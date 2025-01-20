import { IPanelDisplay } from "./interface";
import {
  transComponentsMap,
  initSchema,
  traverse,
  genStyleClass,
  simpleStyle,
} from "./utils";
import { initConfig } from "./consts";

import exportBlock from "./exportBlock";

module.exports = function (schema, option) {
  console.log("core");
  console.log("schema", schema);
  console.log("option", option);

  // 参数设置
  option.scale = 750 / ((option.responsive && option.responsive.width) || 750);
  option.componentsMap = transComponentsMap(option.componentsMap);

  const dslConfig = Object.assign(
    {},
    option._.get(schema, "imgcook.dslConfig")
  );

  option.dslConfig = dslConfig;

  // 初始化全局参数
  initConfig(dslConfig);

  traverse(schema, (json) => {
    if (json.componentName == "Block") {
      json.componentName = "Div";
    }
  });
  schema.componentName = "Block";

  // 预处理
  initSchema(schema);

  // 记录所有blocks
  const blocks: any[] = [];
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

  // json.classString
  traverse(schema, (json) => {
    let className = json.props && json.props.className;
    if (!className) {
      return;
    }
    json.classString = ` class="${className}"`;
  });

  // export module code
  let panelDisplay: IPanelDisplay[] = [];

  blocks.forEach((block) => {
    const result = exportBlock(block, option);
    panelDisplay = panelDisplay.concat(result);
  });
  // export Page code
  if (schema.componentName === "Page") {
    const result = exportBlock(schema, option);
    panelDisplay = panelDisplay.concat(result);
  }

  return {
    panelDisplay,
    imagesFolder: "",
    noTemplate: true,
  };
};
