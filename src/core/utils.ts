const unset = require("lodash/unset");
const get = require("lodash/get");
const camelCase = require("lodash/camelCase");
const kebabCase = require("lodash/kebabCase");
const snakeCase = require("lodash/snakeCase");
import { DSL_CONFIG } from "./consts";

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
  const { cssUnit } = DSL_CONFIG;
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

// flexDirection -> flex-direction
export const parseCamelToLine = (string) => {
  return ` ${string}`
    .split(/(?=[A-Z])/)
    .join("-")
    .toLowerCase()
    .trim();
};

// style obj -> style string
export const generateStyleStr = (style, type) => {
  const styleObj = style.children;
  let str = "";
  switch (type) {
    case "css": {
      const redo = (data) => {
        for (let className in data) {
          str += `.${className} {`;
          for (let key in data[className]) {
            if (key == 'children') continue;
            str += `${parseCamelToLine(key)}: ${data[className][key]};`;
          }
          str += `}`;
          redo(data[className].children);
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
          for (let key in data[className]) {
            if (key == 'children') continue;
            str += `${parseCamelToLine(key)}: ${data[className][key]};`;
          }
          redo(data[className].children);
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
