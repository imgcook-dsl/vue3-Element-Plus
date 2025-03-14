const find = require("lodash/find");
const unset = require("lodash/unset");
const get = require("lodash/get");
const set = require("lodash/set");
const camelCase = require("lodash/camelCase");
const kebabCase = require("lodash/kebabCase");
const snakeCase = require("lodash/snakeCase");
const cssParser = require("css/lib/parse");
import { DSL_CONFIG } from "./consts";

// 从 css 解析样式规则饿
export const getCssRules = (
  text: string
): {
  selectors: string;
  style: any;
}[] => {
  if (!cssParser) {
    return [];
  }
  const globalCssResult = cssParser(text, { source: "global.css" });

  let rules = globalCssResult.stylesheet.rules;
  rules = rules.filter((item) => item.type === "rule");
  rules = rules.map((item) => {
    let style = {};
    for (let dec of item.declarations) {
      const property = camelCase(dec.property);
      style[property] = dec.value;
    }

    return {
      selectors: item.selectors[0],
      style: style,
    };
  });

  return rules;
};

//  提取全局样式
export const getGlobalClassNames = (cssObject, globalCssString) => {
  let names: string[] = [];
  if (!(globalCssString && cssParser)) {
    // 没有全局样式名
    return {
      names,
      style: cssObject,
    };
  }

  // 解析全局 css 规则
  const rules = getCssRules(globalCssString);

  for (let rule of rules) {
    // 按顺序提取样式
    // 仅提取 . 选择符
    const isMatch =
      find([cssObject], rule.style) && rule.selectors.startsWith(".");
    if (isMatch) {
      for (let key in rule.style) {
        unset(cssObject, key);
      }
      names.push(rule.selectors.replace(".", ""));
    }
  }

  return {
    names,
    style: cssObject,
  };
};

export const isExpression = (value) => {
  return /^\{\{.*\}\}$/.test(value);
};

// eg: hello_world => HelloWorld
export const line2Hump = (str) => {
  str = str.replace(/[_|-](\w)/g, (all, letter) => {
    return letter.toUpperCase();
  });
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str;
};

export const isEmptyObj = (o) => {
  if (o !== null && Object.prototype.toString.call(o) === "[object Object]") {
    return !Object.keys(o).length;
  }
  return false;
};

export const transComponentsMap = (compsMap) => {
  if (!compsMap || !Array.isArray(compsMap.list)) {
    return [];
  }
  if (Array.isArray(compsMap.list)) {
    return compsMap.list.reduce((obj, comp) => {
      const componentName = comp.name;
      if (!obj[componentName]) {
        obj[componentName] = comp;
      }
      return obj;
    }, {});
  }
  return compsMap;
};

export const toString = (value) => {
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

export const toUpperCaseStart = (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

// 是否所有样式相同
function isAllEqual(array) {
  if (array.length > 0) {
    return !array.some(function (value, index) {
      return value !== array[0];
    });
  } else {
    return true;
  }
}

// 获得相同样式
function getMaxSameStyles(array) {
  if (array.length < 2) {
    return {};
  }
  let maxStyle = {};
  const keys = Object.keys(array[0]);
  for (let key of keys) {
    if (isAllEqual(array.map((item) => item[key]))) {
      maxStyle[key] = array[0][key];
    }
  }

  return maxStyle;
}

export const commonStyle = (schema) => {
  traverseBrother(schema, function (nodes) {
    const sameStyle = getMaxSameStyles(
      nodes
        .filter((item) => item.props && item.props.style)
        .map((item) => item.props.style)
    );
    if (Object.keys(sameStyle).length > 3) {
      const commonClassName = genStyleClass(
        "common_" + nodes[0].props.className,
        DSL_CONFIG.cssStyle
      );

      set(schema, `commonStyles.${commonClassName}`, parseStyle(sameStyle));
      for (let node of nodes) {
        for (let key of Object.keys(sameStyle)) {
          unset(node, `props.style.${key}`);
        }
        node.classnames = node.classnames || [];
        node.classnames.push(commonClassName);
      }
    }
  });
};

// 精简样式
export const simpleStyle = (node) => {
  // 删除 font-weight 400 或者 normal
  const removeStyle = (node, styleName, values) => {
    const fw = get(node, `props.style.${styleName}`);
    if (values.includes(String(fw) || "")) {
      unset(node, `props.style.${styleName}`);
    }
  };
  removeStyle(node, "fontWeight", ["400", 400, "normal"]);
  removeStyle(node, "flexDirection", ["row"]);
  removeStyle(node, "textDecoration", ["none"]);
};

// 遍历节点
export const traverse = (json, callback) => {
  if (Array.isArray(json)) {
    json.forEach((node) => {
      traverse(node, callback);
    });
    return;
  }

  callback(json);

  if (json.children && json.children.length > 0) {
    json.children.forEach((child) => {
      traverse(child, callback);
    });
  }
};

// 遍历兄弟节点
export const traverseBrother = (json, callback) => {
  if (Array.isArray(json)) {
    json.forEach((node) => {
      traverseBrother(node, callback);
    });
    return;
  }

  if (json && Array.isArray(json.children) && callback) {
    callback(json.children);
  }

  if (
    json.children &&
    json.children.length > 0 &&
    Array.isArray(json.children)
  ) {
    json.children.forEach((child) => {
      traverseBrother(child, callback);
    });
  }
};

export const genStyleClass = (string = "", type = "camelCase") => {
  let classArray = string.split(" ");
  classArray = classArray.filter((name) => !!name);
  classArray = classArray.map((name) => {
    switch (type) {
      case "camelCase":
        return camelCase(name);
      case "kebabCase":
        return kebabCase(name);
      case "snakeCase":
        return snakeCase(name);
      default:
        return camelCase(name);
    }
  });
  return classArray.join(" ");
};

export const genStyleCode = (styles, key = "") => {
  if (!key) {
    return "";
  }
  return !/-/.test(key) && key.trim()
    ? `${styles}.${key}`
    : `${styles}['${key}']`;
};

const mayOnlyNumberAttrs = [
  "height",
  "width",
  "left",
  "right",
  "top",
  "bottom",
  "marginLeft",
  "marginRight",
  "marginTop",
  "marginBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  "paddingBottom",
  "fontSize",
  "lineHeight",
];

export const parseStyle = (style) => {
  const { scale, cssUnit } = DSL_CONFIG;
  const resultStyle = {};
  for (let key in style) {
    let val = String(style[key]);
    if (!val) continue;
    // 样式单位处理
    if (mayOnlyNumberAttrs.includes(key) && /^\d*\.?\d+$/.test(val)) {
      val = `${val}${cssUnit}`;
    } else {
      val = val.replace(/(?<=\d)px/gi, cssUnit);
    }
    resultStyle[key] = val;
  }
  return resultStyle;
};

// parse function, return params and content
export const parseFunction = (func) => {
  const funcString = func.toString();
  const params = funcString.match(/\([^\(\)]*\)/)[0].slice(1, -1);
  const content = funcString.slice(
    funcString.indexOf("{") + 1,
    funcString.lastIndexOf("}")
  );
  return {
    params,
    content,
  };
};

// parse layer props(static values or expression)
export const parseProps = (value, isReactNode?) => {
  if (typeof value === "string") {
    if (isExpression(value)) {
      if (isReactNode) {
        return value.slice(1, -1);
      } else {
        return value.slice(2, -2);
      }
    }

    if (isReactNode) {
      return value;
    } else {
      return `'${value}'`;
    }
  } else if (typeof value === "function") {
    const { params, content } = parseFunction(value);
    return `(${params}) => {${content}}`;
  } else if (typeof value === "object") {
    return `${JSON.stringify(value)}`;
  } else {
    return value;
  }
};

// parse condition: whether render the layer
export const parseCondition = (condition, render) => {
  if (typeof condition === "boolean") {
    return `${condition} && ${render}`;
  } else if (typeof condition === "string") {
    condition = condition.replace(/this\./, "");
    return `${condition.slice(2, -2)} && ${render}`;
  }
};

// flexDirection -> flex-direction
export const parseCamelToLine = (string) => {
  return ` ${string}`
    .split(/(?=[A-Z])/)
    .join("-")
    .toLowerCase()
    .trim();
};

// style obj -> css
export const generateCSS = (style, prefix = "") => {
  console.log("style", style);
  let css = "";

  for (let layer in style) {
    css += `${prefix && prefix !== layer ? "." + prefix + " " : ""}.${layer} {`;
    for (let key in style[layer]) {
      css += `${parseCamelToLine(key)}: ${style[layer][key]};\n`;
    }
    css += "}";
  }

  return css;
};

// style obj -> style string
export const generateStyleStr = (style) => {
  const styleObj = style.children;
  let str = "";
  switch (DSL_CONFIG.cssType) {
    case "css": {
      const redo = (data) => {
        for (let className in data) {
          str += `.${className} {`;
          const children = data[className].children;
          delete data[className].children;
          for (let key in data[className]) {
            str += `${parseCamelToLine(key)}: ${data[className][key]};`;
          }
          str += `}`;
          redo(children);
        }
      };
      redo(styleObj);
      break;
    }
    case "less":
    case "scss": {
      const redo = (data) => {
        for (let className in data) {
          str += `.${className} {`;
          const children = data[className].children;
          delete data[className].children;
          for (let key in data[className]) {
            str += `${parseCamelToLine(key)}: ${data[className][key]};`;
          }
          redo(children);
          str += `}`;
        }
      };
      redo(styleObj);
      break;
    }
    default:
      break;
  }
  return str;
};

// parse loop render
export const parseLoop = (loop, loopArg, render, params = {}) => {
  let data;
  let loopArgItem = (loopArg && loopArg[0]) || "item";
  let loopArgIndex = (loopArg && loopArg[1]) || "index";

  if (Array.isArray(loop)) {
    data = toString(loop);
  } else if (isExpression(loop)) {
    data = loop.slice(2, -2);
  }

  // add loop key
  const tagEnd = render.match(/^<.+?\s/)[0].length;
  render = `${render.slice(0, tagEnd)} key={${loopArgIndex}}${render.slice(
    tagEnd
  )}`;

  // remove `this`
  const re = new RegExp(`this.${loopArgItem}`, "g");
  render = render.replace(re, loopArgItem);
  let stateValue = data;
  if (data.match(/this\.state\./)) {
    stateValue = `state.${data.split(".").pop()}`;
  }

  const formatRender =
    params["formatRender"] ||
    function (str) {
      return str;
    };
  return {
    hookState: [],
    value: `${stateValue}.map((${loopArgItem}, ${loopArgIndex}) => {
      return (${formatRender(render)});
    })`,
  };
};

// parse state
export const parseState = (states) => {
  let stateName = "state";
  // hooks state
  return `const [${stateName}, set${toUpperCaseStart(stateName)}] = useState(${
    toString(JSON.parse(states)) || null
  });`;
};

// replace state
export const replaceState = (render) => {
  // remove `this`
  let stateName = "state";
  const re = new RegExp(`this.state`, "g");
  return render.replace(re, stateName);
};

// replace state
export const parseLifeCycles = (schema, init) => {
  let lifeCycles: string[] = [];
  if (!schema.lifeCycles["_constructor"] && init) {
    schema.lifeCycles["_constructor"] = `function _constructor() {}`;
  }

  Object.keys(schema.lifeCycles).forEach((name) => {
    let { params, content } = parseFunction(schema.lifeCycles[name]);
    content = replaceState(content);
    switch (name) {
      case "_constructor": {
        init.push(content);
        lifeCycles.unshift(`
          // constructor
          useState(()=>{
            ${init.join("\n")}
          })
        `);
        break;
      }
      case "componentDidMount": {
        lifeCycles.push(`
          // componentDidMount
          useEffect(()=>{
            ${content}
          }, [])
        `);
        break;
      }
      case "componentDidUpdate": {
        lifeCycles.push(`
          // componentDidUpdate
          useEffect(()=>{
            ${content}
          })
        `);
        break;
      }
      case "componentWillUnMount": {
        lifeCycles.push(`
          // componentWillUnMount
          useEffect(()=>{
            return ()=>{
              ${content}
            }
          }, [])
        `);
        break;
      }
    }
  });
  return lifeCycles;
};

export const existImport = (imports, singleImport) => {
  let exist = false;
  imports.forEach((item) => {
    if (item._import === singleImport) {
      exist = true;
    }
  });
  return exist;
};

// parse async dataSource
export const parseDataSource = (
  data,
  imports: {
    _import: string;
    package: string;
    version: string;
  }[] = []
) => {
  const name = data.id;
  const { uri, method, params } = data.options;
  const action = data.type;
  let payload = {};
  let singleImport;

  switch (action) {
    case "fetch":
      singleImport = `import {fetch} from 'whatwg-fetch';`;
      if (!existImport(imports, singleImport)) {
        imports.push({
          _import: singleImport,
          package: "whatwg-fetch",
          version: "^3.0.0",
        });
      }
      payload = {
        method: method,
      };

      break;
    case "jsonp":
      singleImport = `import {fetchJsonp} from 'fetch-jsonp';`;
      if (!existImport(imports, singleImport)) {
        imports.push({
          _import: singleImport,
          package: "fetch-jsonp",
          version: "^1.1.3",
        });
      }
      break;
  }

  Object.keys(data.options).forEach((key) => {
    if (["uri", "method", "params"].indexOf(key) === -1) {
      payload[key] = toString(data.options[key]);
    }
  });

  let comma = isEmptyObj(payload) ? "" : ",";
  // params parse should in string template
  if (params) {
    if (method !== "GET") {
      payload = `${toString(payload).slice(0, -1)} ${comma} body: ${
        isExpression(params) ? parseProps(params) : toString(params)
      }}`;
    } else {
      payload = `${toString(payload).slice(0, -1)}}`;
    }
  } else {
    payload = toString(payload);
  }

  let result = `{
  return ${action}(${parseProps(uri)}, ${toString(payload)})
    .then((response) => response.json())
`;

  if (data.dataHandler) {
    const { params, content } = parseFunction(data.dataHandler);
    result += `.then((${params}) => {${content}})
    .catch((e) => {
      console.log('error', e);
    })
  `;
  }

  result += "}";

  return {
    value: `${name}() ${result}`,
    functionName: name,
    functionBody: result,
    imports,
  };
};

// get children text
export const getText = (schema) => {
  let text = "";

  const getChildrenText = (schema) => {
    const type = schema.componentName.toLowerCase();
    if (type === "text") {
      text += parseProps(schema.props.text || schema.text, true).replace(
        /\{/g,
        "${"
      );
    }

    schema.children &&
      Array.isArray(schema.children) &&
      schema.children.map((item) => {
        getChildrenText(item);
      });
  };

  getChildrenText(schema);

  return text;
};

export const transAnimation = function (animation) {
  let keyFrames = ``;
  for (let i of animation.keyframes) {
    keyFrames += `${((i.offset * 10000) / 100.0).toFixed(0) + "%"} {
  ${i.opacity ? "opacity: ".concat(i.opacity) + ";" : ""}
  ${i.transform ? "transform: ".concat(i.transform) + ";" : ""}
}
`;
  }
  let keyframes = `
@keyframes ${animation.name} {
${keyFrames}
}
`;
  return keyframes;
};

export const addAnimation = function (schema) {
  let animationRes = ``;
  traverse(schema, (json) => {
    if (json.animation) {
      animationRes += transAnimation(json.animation);
    }
  });
  return animationRes;
};
