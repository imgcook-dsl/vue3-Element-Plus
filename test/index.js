const fs = require("fs");
const path = require("path");
const { NodeVM } = require("vm2");
const _ = require("lodash");
const data = require("./data.js");
const componentsMap = require("./componentsMap1");
const helper = require("@imgcook/dsl-helper");
const entry = require("../src/index");

const prettier = require("prettier/standalone");
const parserHtml = require("prettier/parser-html");
const parserBabel = require("prettier/parser-babel");
const parserCss = require("prettier/parser-postcss");
const parserMarkDown = require("prettier/parser-markdown");
const browerParser = {
  babel: parserBabel,
  json: parserBabel,
  vue: parserHtml,
  css: parserCss,
  scss: parserCss,
  less: parserCss,
  html: parserHtml,
  md: parserMarkDown,
};

const vm = new NodeVM({
  console: "inherit",
  sandbox: {},
});

const runCode = (data, dslConfig) => {
  data = _.cloneDeep(data);
  const config = _.get(data, "imgcook.dslConfig", {});
  _.set(data, "imgcook.dslConfig", Object.assign(config, dslConfig));

  const code = fs.readFileSync(
    path.resolve(__dirname, "../src/index.js"),
    "utf8"
  );

  const options = {
    prettier: {
      format: (str, opt) => {
        if (opt && browerParser[opt.parser]) {
          opt.plugins = [browerParser[opt.parser]];
        } else {
          return str;
        }
        try {
          return prettier.format(str, opt);
        } catch (e) {
          console.error("format error", e);
          return str;
        }
      },
    },
    _: _,
    responsive: {
      width: 750,
      viewportWidth: 375,
    },
    helper,
    componentsMap,
  };

  const files = vm.run(code)(data, options);
  // const files = entry(data, options);
  // console.log('files', files)
  return files.panelDisplay;
};

const panelDisplay = runCode(data, {
  dsl: "vue",
  dslName: "vue",
  cssFile: false,
  cssUnit: "px",
  cssStyle: "camelCase",
  globalCss: false,
  htmlFontSize: "16",
  responseHeight: 1334,
  responseWidth: 750,
  outputStyle: "component",
  componentStyle: "hooks",
});

// console.log('panelDisplay', panelDisplay)

const baseDir = "../code-view/src/components";

// if (fs.existsSync(path.join(__dirname, baseDir))) {
//   fs.rmdirSync(path.join(__dirname, baseDir), { recursive: true });
//   console.log('删除文件夹')
// }
mkDirsSync(path.join(__dirname, baseDir));
// console.log("创建文件夹", path.join(__dirname, baseDir));

panelDisplay.forEach((file) => {
  if (file.folder) {
    let fileFolder = path.join(__dirname, `${baseDir}/${file.folder}`);
    if (!fs.existsSync(fileFolder)) {
      mkDirsSync(fileFolder);
    }
    fs.writeFileSync(
      path.join(__dirname, `${baseDir}/${file.folder}/${file.panelName}`),
      file.panelValue
    );
  } else {
    fs.writeFileSync(
      path.join(__dirname, `${baseDir}/${file.panelName}`),
      file.panelValue
    );
  }
});

function mkDirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkDirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
}

module.exports = {
  runCode,
};
