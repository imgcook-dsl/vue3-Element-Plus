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
  globalCss: boolean;
  cssUnit: "px" | "rem";
  cssType: "css" | "less" | "scss";
  outputStyle: "project" | "component";
  cssStyle: "kebabCase" | "camelCase" | "snakeCase";
  cssFile: boolean;
}
