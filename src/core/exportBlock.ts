import { IPanelDisplay, IImport } from "./interface";
import { parseStyle, generateCSS, isExpression, addAnimation, generateStyleStr } from "./utils";
import { prettierVueOpt, prettierCssOpt, DSL_CONFIG } from "./consts";
import genVue from "./genVue";

export default function exportMod(schema, option): IPanelDisplay[] {
  const { prettier, scale, componentsMap, _ } = option;
  const folderName = ``;

  // imports
  const imports: IImport[] = [];

  // Global Public Functions
  const utils: string[] = [];

  // data
  let datas: string[] = [];

  const constants = {};

  // methods
  const methods: string[] = [];

  const expressionName = {};

  const style = {};

  const width = option.responsive.width || 750;
  const viewportWidth = option.responsive.viewportWidth || 375;

  // 1vw = width / 100
  const _w = width / 100;
  const _ratio = width / viewportWidth;

  const transformEventName = (name) => {
    return name.replace("on", "").toLowerCase();
  };

  const toString = (value) => {
    if ({}.toString.call(value) === "[object Function]") {
      return value.toString();
    }
    if (typeof value === "string") {
      return value;
    }
    if (typeof value === "object") {
      return JSON.stringify(value, (key, value) => {
        if (typeof value === "function") {
          return value.toString();
        } else {
          return value;
        }
      });
    }

    return String(value);
  };

  // parse function, return params and content
  const parseFunction = (func) => {
    const funcString = func.toString();
    const name = funcString
      .slice(funcString.indexOf("function"), funcString.indexOf("("))
      .replace("function ", "");
    const params = funcString.match(/\([^\(\)]*\)/)[0].slice(1, -1);
    const content = funcString.slice(
      funcString.indexOf("{") + 1,
      funcString.lastIndexOf("}")
    );
    return {
      params,
      content,
      name,
    };
  };

  // parse layer props(static values or expression)
  const parseProps = (value, isReactNode = false, constantName = "") => {
    if (typeof value === "string") {
      if (isExpression(value)) {
        if (isReactNode) {
          return value;
        } else {
          return value.slice(2, -2);
        }
      }

      if (isReactNode) {
        return value;
      } else if (constantName) {
        // save to constant
        expressionName[constantName] = expressionName[constantName]
          ? expressionName[constantName] + 1
          : 1;
        const name = `${constantName}${expressionName[constantName]}`;
        constants[name] = value;
        return `"constants.${name}"`;
      } else {
        return `"${value}"`;
      }
    } else if (typeof value === "function") {
      const { params, content, name } = parseFunction(value);
      expressionName[name] = expressionName[name]
        ? expressionName[name] + 1
        : 1;
      methods.push(`${name}_${expressionName[name]}(${params}) {${content}}`);
      return `${name}_${expressionName[name]}`;
    } else {
      return `"${value}"`;
    }
  };

  const parsePropsKey = (key, value) => {
    if (typeof value === "function") {
      return `@${transformEventName(key)}`;
    } else {
      return `:${key}`;
    }
  };

  // parse loop render
  const parseLoop = (loop, loopArg, render) => {
    let data;
    let loopArgItem = (loopArg && loopArg[0]) || "item";
    let loopArgIndex = (loopArg && loopArg[1]) || "index";

    if (Array.isArray(loop)) {
      data = "loopData";
      datas.push(`${data}: ${toString(loop)}`);
    } else if (isExpression(loop)) {
      data = loop.slice(2, -2).replace("this.state.", "");
    }
    // add loop key
    const tagEnd = render.indexOf(">");
    const keyProp =
      render.slice(0, tagEnd).indexOf("key=") == -1
        ? `:key="${loopArgIndex}"`
        : "";
    render = `
      ${render.slice(0, tagEnd)}
      v-for="(${loopArgItem}, ${loopArgIndex}) in state.${data}"  
      ${keyProp}
      ${render.slice(tagEnd)}`;

    // remove `this`
    const re = new RegExp(`this.${loopArgItem}`, "g");
    render = render.replace(re, loopArgItem);

    return render;
  };

  // generate render xml
  const generateRender = (node, parentStyle) => {
    const type = node.componentName.toLowerCase();
    const className = node.props && node.props.className;
    let classString = node.classString || "";
    if (className) {
      const nodeStyle = parseStyle(node.props.style);
      if (!parentStyle.children) parentStyle.children = {}
      parentStyle.children[className] = nodeStyle;
    }
    let xml;
    let props = "";
    Object.keys(node.props).forEach((key) => {
      if (
        ["className", "style", "text", "src", "lines", "dealGradient"].indexOf(
          key
        ) === -1
      ) {
        props += ` ${parsePropsKey(key, node.props[key])}=${parseProps(
          node.props[key]
        )}`;
      }
    });
    const getXml = (node, label) => {
      let xml = "";
      if (node.children && node.children.length) {
        xml = `<${label}${classString}${props}>${node.children
          .map((node) => {
            return generateRender(node, parentStyle.children[className]);
          })
          .join("")}</${label}>`;
      } else {
        xml = `<${label}${classString}${props} ></${label}>`;
      }
      return xml;
    };
    switch (type) {
      case "text":
        const innerText = parseProps(node.props.text, true);
        xml = `<span${classString}${props}>${innerText}</span> `;
        break;
      case "image":
        let source = parseProps(node.props.src, false);
        if (!source.match('"')) {
          source = `"${source}"`;
          xml = `<img${classString}${props} :src=${source} /> `;
        } else {
          xml = `<img${classString}${props} src=${source} /> `;
        }
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
    if (node.loop) {
      xml = parseLoop(node.loop, node.loopArgs, xml);
    }
    return xml || "";
  };

  if (option.utils) {
    Object.keys(option.utils).forEach((name) => {
      utils.push(`const ${name} = ${option.utils[name]}`);
    });
  }

  const templateStr = generateRender(schema, style);
  datas.push(`constants: ${toString(constants)}`);
  datas = datas.filter((i) => i !== "");

  const panelDisplay: IPanelDisplay[] = [];

  const animationKeyframes = addAnimation(schema);
  let styleStr = `${generateStyleStr(style)} ${animationKeyframes}`;
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
    datas,
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
