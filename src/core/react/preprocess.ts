import { DSL_CONFIG } from "../consts";
import { genStyleClass, simpleStyle } from "../utils";

export const preprocess = (node) => {
  // 清理 class 空格
  node.props.className = String(node.props.className).trim();
  // 样式名处理：指定命名风格
  node.props.className = genStyleClass(
    node.props.className,
    DSL_CONFIG.cssStyle
  );
  // 样式属性拼接
  node.classString = ` className="${node.props.className}"`;
  // 精简样式
  simpleStyle(node);
};
