import { IPanelDisplay } from "../interface";
import { parseStyle, generateStyleStr } from "../utils";
import { prettierHtmlOpt, prettierCssOpt, DSL_CONFIG } from "../consts";
import { generateContent } from "./generateContent";
import { preprocess } from "./preprocess";

export function exportHtml(schema, option): IPanelDisplay[] {
  const { prettier, componentsMap, _ } = option;
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
        xml = `<img${classString} src="${node.props.src}" /> `;
        break;
      case "div":
      case "page":
      case "block":
      case "component":
        xml = getXml(node, "div");
        break;
      default:
        xml = getXml(node, "div");
    }
    return xml || "";
  };

  const style = {};
  const xmlStr = generateRenderXml(schema, style);
  let styleStr = generateStyleStr(style, 'css');
  styleStr = prettier.format(styleStr, prettierCssOpt);

  const panelDisplay: IPanelDisplay[] = [];
  if (DSL_CONFIG.cssFile) {
    panelDisplay.push({
      panelName: `index.css`,
      panelValue: styleStr,
      panelType: DSL_CONFIG.cssType,
      folder: folderName,
    });
    styleStr = `<link rel="stylesheet" type="text/css" href="index.css">`;
  } else {
    styleStr = `<style>${styleStr}</style>`;
  }

  let jsStr = `console.log('hello world!')`
  if (DSL_CONFIG.jsFile) {
    panelDisplay.push({
      panelName: `index.js`,
      panelValue: jsStr,
      panelType: 'js',
      folder: folderName,
    });
    jsStr = `<script type="module" src="index.js"></script>`;
  } else {
    jsStr = `<script>${jsStr}</script>`;
  }

  const htmlStr = generateContent({ xmlStr, styleStr, jsStr });
  panelDisplay.push({
    panelName: `index.html`,
    panelValue: prettier.format(htmlStr, prettierHtmlOpt),
    panelType: "html",
    folder: folderName,
  });

  return panelDisplay;
}
