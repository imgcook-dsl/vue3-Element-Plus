import { IPanelDisplay, IImport } from "./interface";
import { parseStyle, generateStyleStr } from "./utils";
import {
  prettierVueOpt,
  prettierCssOpt,
  DSL_CONFIG,
  prettierJsOpt,
} from "./consts";
import { genVue } from "./genVue";
import { preprocess } from "./preprocess";
import { genReact } from "./genReact";

export default function exportMod(schema, option): IPanelDisplay[] {
  const { prettier, componentsMap, _ } = option;
  const folderName = ``;
  const imports: IImport[] = [];

  // generate render xml
  const generateRenderXml = (node, parentStyle) => {
    // 节点信息预处理
    preprocess(node);

    // 处理样式
    const { className, style } = node.props;
    const nodeStyle = parseStyle(style);
    if (!parentStyle.children) parentStyle.children = {};
    parentStyle.children[className] = nodeStyle;

    // 递归拼装xml
    let xml = "";
    let classString = node.classString || "";
    const getXml = (node, label) => {
      let xml = "";
      if (node.children && node.children.length) {
        xml = `<${label}${classString}>${node.children
          .map((node) => {
            return generateRenderXml(node, nodeStyle);
          })
          .join("")}</${label}>`;
      } else {
        xml = `<${label}${classString} ></${label}>`;
      }
      return xml;
    };
    const type = node.componentName.toLowerCase();
    switch (type) {
      case "text":
        xml = `<span${classString}>${node.props.text}</span> `;
        break;
      case "image":
        xml = `<img${classString} src="${node.props.src}" /> `;
        break;
      case "div":
      case "page":
      case "block":
      case "component":
        xml = getXml(node, "div");
        break;
      default:
        const compName = `el-${_.kebabCase(type)}`;
        xml = getXml(node, compName);
    }
    return xml || "";
  };

  const style = {};
  const xmlStr = generateRenderXml(schema, style);
  let styleStr = generateStyleStr(style);
  styleStr = prettier.format(styleStr, prettierCssOpt);

  const panelDisplay: IPanelDisplay[] = [];

  switch (DSL_CONFIG.framework) {
    case "vue": {
      if (DSL_CONFIG.cssFile) {
        panelDisplay.push({
          panelName: `index.${DSL_CONFIG.cssType}`,
          panelValue: styleStr,
          panelType: DSL_CONFIG.cssType,
          folder: folderName,
        });
        styleStr = `@import './index.${DSL_CONFIG.cssType}';`;
      }
      const vueStr = genVue({
        xmlStr,
        styleStr,
        styleLang: DSL_CONFIG.cssType,
        prettier,
      });
      panelDisplay.push({
        panelName: `index.vue`,
        panelValue: prettier.format(vueStr, prettierVueOpt),
        panelType: "vue",
        folder: folderName,
        panelImports: imports,
      });
      break;
    }
    case "react": {
      const reactStr = genReact({
        xmlStr,
        styleLang: DSL_CONFIG.cssType,
        prettier,
      });
      // 组件
      panelDisplay.push({
        panelName: `index.${DSL_CONFIG.jsxOrTsx}`,
        panelValue: prettier.format(reactStr, prettierJsOpt),
        panelType: "react",
        folder: folderName,
        panelImports: imports,
      });
      // 样式
      panelDisplay.push({
        panelName: `index.${DSL_CONFIG.cssType}`,
        panelValue: styleStr,
        panelType: DSL_CONFIG.cssType,
        folder: folderName,
      });
      break;
    }
    default:
      break;
  }
  return panelDisplay;
}
