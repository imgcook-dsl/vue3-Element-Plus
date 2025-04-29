import { prettierHtmlOpt, prettierJsOpt } from "./consts";

const handleScript = ({ prettier }) => {
  const rawStr = `
    import { reactive } from 'vue'

    const state = reactive({})
  `;
  return prettier.format(rawStr, prettierJsOpt);
};

const handleTemplate = (templateStr, prettier) => {
  templateStr = templateStr.replaceAll('>', '>\n');
  templateStr = prettier.format(templateStr, prettierHtmlOpt);
  return templateStr.replaceAll('> ', '>');
}

export const genVue = ({
  xmlStr,
  styleStr,
  styleLang,
  prettier,
}) => `
<script setup>
${handleScript({ prettier })}
</script>

<template>
${handleTemplate(xmlStr, prettier)}
</template>

<style lang="${styleLang}" scoped>
${styleStr}
</style>
`;
