import { prettierJsOpt } from "./consts";

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

const genVue = ({
  template,
  imports,
  importMods,
  datas,
  methods,
  lifeCycles,
  styleStr,
  prettier,
}) => `
<script setup>
${handleScript({ imports, importMods, datas, prettier })}
</script>

<template>
${template}
</template>

<style scoped>
${styleStr}
</style>
`;

export default genVue;
