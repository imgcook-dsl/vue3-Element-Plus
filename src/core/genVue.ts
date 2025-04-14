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

const genVue = ({
  templateStr,
  styleStr,
  styleLang,
  prettier,
}) => `
<script setup>
${handleScript({ prettier })}
</script>

<template>
${handleTemplate(templateStr, prettier)}
</template>

<style lang="${styleLang}" scoped>
${styleStr}
</style>
`;

export default genVue;
