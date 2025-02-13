import { prettierHtmlOpt, prettierJsOpt } from "./consts";

const handleScript = ({ datas, prettier }) => {
  const rawStr = `
    import { reactive } from 'vue'

    const state = reactive({
      ${datas.join(",\n")}
    })
  `;
  return prettier.format(rawStr, prettierJsOpt);
};

const handleTemplate = (templateStr, prettier) => {
  templateStr = templateStr.replaceAll('>', '>\n');
  templateStr = prettier.format(templateStr, prettierHtmlOpt);
  return templateStr.replaceAll('> ', '>');
}

const genVue = ({
  datas,
  templateStr,
  styleStr,
  styleLang,
  prettier,
}) => `
<script setup>
${handleScript({ datas, prettier })}
</script>

<template>
${handleTemplate(templateStr, prettier)}
</template>

<style lang="${styleLang}" scoped>
${styleStr}
</style>
`;

export default genVue;
