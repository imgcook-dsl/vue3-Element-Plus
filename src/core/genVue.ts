import { prettierHtmlOpt, prettierJsOpt } from "./consts";

const handleScript = ({ imports, importMods, datas, prettier }) => {
  const rawStr = `
    import { reactive } from 'vue'
    ${imports.map((i) => i._import).join("\n")}
    ${importMods.map((i) => i._import).join("\n")}

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
  imports,
  importMods,
  datas,
  methods,
  lifeCycles,
  templateStr,
  styleStr,
  prettier,
}) => `
<script setup>
${handleScript({ imports, importMods, datas, prettier })}
</script>

<template>
${handleTemplate(templateStr, prettier)}
</template>

<style scoped>
${styleStr}
</style>
`;

export default genVue;
