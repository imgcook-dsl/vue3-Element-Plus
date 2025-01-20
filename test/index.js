const co = require('co');
const xtpl = require('xtpl');
const fs = require('fs');
const thunkify = require('thunkify');
const path = require('path');
const { NodeVM } = require('vm2');
const _ = require('lodash');
const data = require('./data.js')
const componentsMap = require('./componentsMap1');
const helper = require('@imgcook/dsl-helper');

const prettier = require('prettier');

const entry = require('../src/index')

const vm = new NodeVM({
  console: 'inherit',
  sandbox: {},
});

const runCode = (data, dslConfig) => {
  data = _.cloneDeep(data);
  const config = _.get(data, 'imgcook.dslConfig', {});
  _.set(data, 'imgcook.dslConfig', Object.assign(config, dslConfig));

  const code = fs.readFileSync(
    path.resolve(__dirname, '../src/index.js'),
    'utf8'
  );
  const options =  {
    prettier: {
      format: (str, opt) => {
        // if (opt && browerParser[opt.parser]) {
        //   opt.plugins = [browerParser[opt.parser]]
        // } else {
        //   return str
        // }
        const aa = prettier.format(str, opt)
        console.log('aa', aa)
        try{
          return aa
        }catch(e){
          console.error('format error', e)
          return str
        }
      }
    },
    _: _,
    responsive: {
      width: 750,
      viewportWidth: 375,
    },
    helper,
    componentsMap,
  }

  // const files = vm.run(code)(data,options);

  const files = entry(data, options);
  return files.panelDisplay;
};

co(function*() {
  const panelDisplay = runCode(data, {
    cssUnit: "px",
    // dsl: "rax",
    globalCss: false,
    htmlFontSize: "16",
    responseHeight: 1334,
    responseWidth: 750,
    outputStyle: 'component'
  });

  // console.log('panelDisplay', panelDisplay)

  const baseDir = '../code-view/src/components';

  // if (fs.existsSync(path.join(__dirname, baseDir))) {
  //   fs.rmdirSync(path.join(__dirname, baseDir), { recursive: true });
  //   console.log('删除文件夹')
  // }
  mkDirsSync(path.join(__dirname, baseDir));
  console.log('创建文件夹', path.join(__dirname, baseDir))
  // const baseDir = '../code';
  // 生成到目标目录运行

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
