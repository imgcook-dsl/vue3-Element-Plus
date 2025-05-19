export interface IPanelDisplay {
  panelName: string;
  panelValue: string;
  panelType: string;
  folder?: string;
  type?: string;
  panelImports?: IImport[];
}

export interface IImport {
  _import: string;
  package: string;
  version: string;
}

export interface IDslConfig {
  framework: 'html' | 'vue' | 'react';
  jsxOrTsx: 'jsx' | 'tsx';
  cssUnit: "px" | "rem";
  cssType: "css" | "less" | "scss";
  outputStyle: "project" | "component";
  cssStyle: "kebabCase" | "camelCase" | "snakeCase";
  cssFile: boolean;
  jsFile: boolean;
}
