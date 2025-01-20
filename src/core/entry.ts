import { IPanelDisplay, IDslConfig } from "./interface";
import {
  line2Hump,
  transComponentsMap,
  initSchema,
  traverse,
  genStyleClass,
  getGlobalClassNames,
  simpleStyle,
} from "./utils";
const camelCase = require("lodash/camelCase");
import {
  CSS_TYPE,
  COMPONENT_TYPE,
  OUTPUT_TYPE,
  DSL_CONFIG,
  initConfig,
} from "./consts";

import exportBlock from "./exportBlock";
import exportGlobalCss from "./exportGlobalCss";

module.exports = function (schema, option) {
  console.log("core");
  console.log("schema", schema);
  console.log("option", option);
  // get blocks json
  const blocks: any[] = [];

  // 参数设置
  option.scale = 750 / ((option.responsive && option.responsive.width) || 750);
  option.componentsMap = transComponentsMap(option.componentsMap);
  option.blockInPage = schema.componentName === "Page";
  option.pageGlobalCss = schema.css || "";

  const dslConfig = Object.assign(
    {},
    option._.get(schema, "imgcook.dslConfig")
  );

  dslConfig.useTypescript = dslConfig.jsx === "typescript";
  option.dslConfig = dslConfig;

  // 初始化全局参数
  initConfig(dslConfig);

  traverse(schema, (json) => {
    if (json.componentName == "Block") {
      json.componentName = "Div";
    }
  });
  schema.componentName = "Block";

  // clear schema
  initSchema(schema);

  // 记录所有blocks
  traverse(schema, (json) => {
    switch ((json.componentName || "").toLowerCase()) {
      case "block":
        blocks.push(json);
        break;
    }
  });

  // 样式名处理：指定命名风格
  traverse(schema, (json) => {
    if (json.props && json.props.className) {
      json.props.className = genStyleClass(
        json.props.className,
        dslConfig.cssStyle
      );
    }
  });

  // 精简默认样式
  simpleStyle(schema);

  // 提取全局样式，类名数组存于 json.classString , 剩余样式覆盖 style
  traverse(schema, (json) => {
    let className = json.props && json.props.className;
    let classString = "";
    let style = json.props.style;
    if (!className) {
      return;
    }

    // inline
    let classnames: string[] = [];
    let enableGlobalCss = dslConfig.globalCss && schema.css;

    // 计算全局样式类名
    if (enableGlobalCss) {
      const cssResults = getGlobalClassNames(style, schema.css);
      if (cssResults.names.length > 0) {
        classnames = cssResults.names;
      }
      style = cssResults.style;
    }

    if (className) {
      classnames.push(className);
    }
    if (classnames.length > 0) {
      classString = ` class="${classnames.join(" ")}"`;
    }

    json.props.style = style;
    json.classString = classString;
  });

  option.blocksCount = blocks.length;

  // export module code
  let panelDisplay: IPanelDisplay[] = [];

  blocks.length > 0 &&
    blocks.forEach((block) => {
      const result = exportBlock(block, option);
      panelDisplay = panelDisplay.concat(result);
    });
  // export Page code
  if (schema.componentName === "Page") {
    const result = exportBlock(schema, option);
    panelDisplay = panelDisplay.concat(result);
  }

  // 全局样式
  panelDisplay = panelDisplay.concat(exportGlobalCss(schema, option));

  return {
    panelDisplay,
    imagesFolder: "",
    noTemplate: true,
  };
};
