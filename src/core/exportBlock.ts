import { IPanelDisplay, IImport } from "./interface";
import { parseStyle, generateStyleStr } from "./utils";
import { prettierVueOpt, prettierCssOpt, DSL_CONFIG } from "./consts";
import genVue from "./genVue";

export default function exportMod(schema, option): IPanelDisplay[] {
  const { prettier, componentsMap, _ } = option;
  const folderName = ``;
  const imports: IImport[] = [];
  const style = {};

  // generate render xml
  const generateRender = (node, parentStyle) => {
    const type = node.componentName.toLowerCase();
    const className = node.props && node.props.className;
    if (className) {
      const nodeStyle = parseStyle(node.props.style);
      if (!parentStyle.children) parentStyle.children = {};
      parentStyle.children[className] = nodeStyle;
    }

    let xml = "";
    let classString = node.classString || "";
    const getXml = (node, label) => {
      let xml = "";
      if (node.children && node.children.length) {
        xml = `<${label}${classString}>${node.children
          .map((node) => {
            return generateRender(node, parentStyle.children[className]);
          })
          .join("")}</${label}>`;
      } else {
        xml = `<${label}${classString} ></${label}>`;
      }
      return xml;
    };
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

  const templateStr = generateRender(schema, style);

  const panelDisplay: IPanelDisplay[] = [];

  let styleStr = generateStyleStr(style);
  styleStr = prettier.format(styleStr, prettierCssOpt);
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
    templateStr,
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

  return panelDisplay;
}
