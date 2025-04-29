import { IPanelDisplay } from "./interface";
import { transComponentsMap } from "./utils";
import { initConfig } from "./consts";

import exportBlock from "./exportBlock";

module.exports = function (schema, option) {
  console.log("window", typeof window);

  const dslConfig = Object.assign(
    {},
    option._.get(schema, "imgcook.dslConfig")
  );
  if (!dslConfig.isDev) {
    console.log("schema", schema);
    console.log("option", option);
  }
  // 初始化全局参数
  initConfig(dslConfig);

  // 参数设置
  option.componentsMap = transComponentsMap(option.componentsMap);
  option.dslConfig = dslConfig;

  const panelDisplay: IPanelDisplay[] = exportBlock(schema, option);

  return {
    panelDisplay,
    imagesFolder: "",
    noTemplate: true,
  };
};

// 出码设置-imgcook
module.exports.CONFIG_FORM = [
  {
    name: "cssType",
    title: "样式类型",
    type: "radio",
    initValue: "css",
    options: ["css", "scss", "less"],
  },
  {
    name: "cssStyle",
    title: "样式名格式",
    type: "radio",
    initValue: "camelCase",
    options: [
      { label: "驼峰式", value: "camelCase" },
      { label: "中划线", value: "kebabCase" },
      { label: "下划线", value: "snakeCase" },
    ],
  },
  {
    name: "cssUnit",
    title: "样式单位",
    type: "radio",
    initValue: "px",
    options: ["px", "rem"],
  },
  {
    name: "cssFile",
    title: "提取样式文件",
    help: "",
    type: "switch",
    initValue: false,
    visible: (config) => config.framework == "vue",
  },
];

// 出码设置-figma
module.exports.EXPORT_CONFIG = [
  {
    name: "framework",
    title: "框架",
    type: "radio",
    initValue: "vue",
    options: ["vue", "react"],
  },
  {
    name: "jsxOrTsx",
    title: "导出jsx/tsx",
    type: "radio",
    initValue: "jsx",
    options: ["jsx", "tsx"],
    visible: (config) => config.framework == "react",
  },
  ...module.exports.CONFIG_FORM,
];
