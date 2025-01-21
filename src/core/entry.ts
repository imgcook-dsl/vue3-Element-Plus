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

module.exports.CONFIG_FORM = [
  // { name: 'componentStyle', title: '组件风格', type: 'radio', initValue: 'hooks', options: [{ label: 'Hooks', value: 'hooks' }, { label: 'Class Component', value: 'component' }] },
  // { name: 'globalCss', title: '提取全局样式', help: '', type: 'switch', initValue: false, },
  { name: 'cssFile', title: '提取样式', help: '', type: 'switch', initValue: false, },
  { name: 'cssUnit', title: '单位', type: 'radio', initValue: 'px', options: ['px', 'rem', 'vw', 'rpx'] },
  { name: 'cssType', title: '类型', type: 'radio', initValue: 'css', options: ['css', 'scss', 'less'] },
  // { name: 'inlineStyle', title: '样式引入方式', type: 'radio', initValue: 'module', options: [{ label: 'CSS Module', value: 'module' }, { label: 'Import', value: 'import' }, { label: 'Inline CSS', value: 'module_style' }, { label: 'Inline', value: 'inline' }] },
  { name: 'cssStyle', title: '样式名', type: 'radio', initValue: 'camelCase', options: [{ label: '驼峰式', value: 'camelCase' }, { label: '中划线', value: 'kebabCase' }, { label: '下划线', value: 'snakeCase' }] },
  // { name: 'outputStyle', title: '导出格式', type: 'radio', initValue: 'component', options: [{ label: '仅组件', value: 'component' }, { label: '完整项目', value: 'project' }] },
  // { name: 'jsx', title: '导出 jsx/tsx', type: 'radio', initValue: 'javascript', options: [{ label: 'javascript', value: 'javascript' }, { label: 'typescript', value: 'typescript' }] },
  // { name: 'accessible', title: '无障碍', type: 'switch', initValue: true, },
]