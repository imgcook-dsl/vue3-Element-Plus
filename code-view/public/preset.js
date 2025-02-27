import "./eruda.js";

if (location.href.includes('eruda')) {
  window.eruda && window.eruda.init();
};

/**
 * 响应式布局：设置viewport和根font-size，再通过使用rem尺寸实现响应式布局
 * @param {number} [designWidth] 设计宽度，默认750
 */
function setViewAdapt(designWidth) {
  window.designWidth = designWidth || 750;
  var metas = document.getElementsByTagName("meta");
  for (var i = 0; i < metas.length; i++) {
    var meta = metas[i];
    if ("viewport" == meta.name) meta.remove();
  }
  var viewport = document.createElement("meta");
  viewport.name = "viewport";
  viewport.content =
    "width=device-width,initial-scale=1.0,maximum-scale=1.0, minimum-scale=1.0,user-scalable=no";
  document.head.insertBefore(viewport, document.head.firstChild);
  var adapt = function () {
    var html = document.documentElement;
    window.rem2px = html.clientWidth / window.designWidth;
    html.style.fontSize = window.rem2px + "px";
  };
  adapt();
  window.addEventListener("resize", adapt);
}
setViewAdapt(750);
