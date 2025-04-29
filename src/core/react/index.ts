import { IPanelDisplay } from "../interface";
import { parseStyle, generateStyleStr } from "../utils";
import { prettierCssOpt, DSL_CONFIG, prettierJsOpt } from "../consts";
import { preprocess } from "./preprocess";
import { generateContent } from "./generateContent";

export function exportReact(schema, option): IPanelDisplay[] {
  const { prettier, _ } = option;
  const folderName = ``;

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
        const src = node.props.src.startsWith("http")
          ? `"${node.props.src}"`
          : `{require("${node.props.src}")}`;
        xml = `<img${classString} src=${src} /> `;
        break;
      case "div":
      case "page":
      case "block":
      case "component":
        xml = getXml(node, "div");
        break;
      default:
        break;
    }
    return xml || "";
  };

  const style = {};
  const xmlStr = generateRenderXml(schema, style);
  let styleStr = generateStyleStr(style);
  styleStr = prettier.format(styleStr, prettierCssOpt);

  const panelDisplay: IPanelDisplay[] = [];
  const reactStr = generateContent({
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
  });
  // 样式
  panelDisplay.push({
    panelName: `index.${DSL_CONFIG.cssType}`,
    panelValue: styleStr,
    panelType: DSL_CONFIG.cssType,
    folder: folderName,
  });

  return panelDisplay;
}
