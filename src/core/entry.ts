import { IPanelDisplay } from "./interface";
import {
  transComponentsMap,
  traverse,
  genStyleClass,
  simpleStyle,
} from "./utils";
import { initConfig } from "./consts";

import exportBlock from "./exportBlock";

module.exports = function (schema, option) {
  console.log("window", typeof window);
  const dslConfig = Object.assign({}, option._.get(schema, "imgcook.dslConfig"));
  if (!dslConfig.isDev) {
    console.log("schema", schema);
    console.log("option", option);
  }
  // 初始化全局参数
  initConfig(dslConfig);

  // 参数设置
  option.scale = 750 / ((option.responsive && option.responsive.width) || 750);
  option.componentsMap = transComponentsMap(option.componentsMap);
  option.dslConfig = dslConfig;

  // schema预处理
  traverse(schema, (node) => {
    if (node && node.props && node.props.className) {
      // 清理 class 空格
      node.props.className = String(node.props.className).trim();
      // 样式名处理：指定命名风格
      node.props.className = genStyleClass(
        node.props.className,
        dslConfig.cssStyle
      );
      // 样式属性拼接
      node.classString = ` class="${node.props.className}"`;
    }
    // 精简样式
    simpleStyle(node);
  });


  const panelDisplay: IPanelDisplay[] = exportBlock(schema, option);

  return {
    panelDisplay,
    imagesFolder: "",
    noTemplate: true,
  };
};

// 出码设置
module.exports.CONFIG_FORM = [
  // { name: 'componentStyle', title: '组件风格', type: 'radio', initValue: 'hooks', options: [{ label: 'Hooks', value: 'hooks' }, { label: 'Class Component', value: 'component' }] },
  // { name: 'globalCss', title: '提取全局样式', help: '', type: 'switch', initValue: false, },
  {
    name: "cssFile",
    title: "提取样式",
    help: "",
    type: "switch",
    initValue: false,
  },
  {
    name: "cssUnit",
    title: "单位",
    type: "radio",
    initValue: "px",
    options: ["px", "rem", "vw", "rpx"],
  },
  {
    name: "cssType",
    title: "类型",
    type: "radio",
    initValue: "css",
    options: ["css", "scss", "less"],
  },
  // { name: 'inlineStyle', title: '样式引入方式', type: 'radio', initValue: 'module', options: [{ label: 'CSS Module', value: 'module' }, { label: 'Import', value: 'import' }, { label: 'Inline CSS', value: 'module_style' }, { label: 'Inline', value: 'inline' }] },
  {
    name: "cssStyle",
    title: "样式名",
    type: "radio",
    initValue: "camelCase",
    options: [
      { label: "驼峰式", value: "camelCase" },
      { label: "中划线", value: "kebabCase" },
      { label: "下划线", value: "snakeCase" },
    ],
  },
  // { name: 'outputStyle', title: '导出格式', type: 'radio', initValue: 'component', options: [{ label: '仅组件', value: 'component' }, { label: '完整项目', value: 'project' }] },
  // { name: 'jsx', title: '导出 jsx/tsx', type: 'radio', initValue: 'javascript', options: [{ label: 'javascript', value: 'javascript' }, { label: 'typescript', value: 'typescript' }] },
  // { name: 'accessible', title: '无障碍', type: 'switch', initValue: true, },
];
