import { prettierHtmlOpt } from "./consts";

const handleTemplate = (templateStr, prettier) => {
  templateStr = templateStr.replaceAll('>', '>\n');
  templateStr = prettier.format(templateStr, prettierHtmlOpt);
  return templateStr.replaceAll('> ', '>');
}

export const genReact = ({
  xmlStr,
  styleLang,
  prettier,
}) => `
'use strict';

import React from 'react';
import './index.${styleLang}';

function Index() {
  return (
    ${handleTemplate(xmlStr, prettier)}
  );
}

export default Index;
`;
