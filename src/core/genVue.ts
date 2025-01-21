const genVue = ({
  template,
  imports,
  importMods,
  datas,
  methods,
  lifeCycles,
  styleStr,
}) => `
<script setup>
import { reactive } from 'vue'
${imports.map((i) => i._import).join("\n")}
${importMods.map((i) => i._import).join("\n")}

const state = reactive({
  ${datas.join(",\n")}
})
</script>

<template>
    ${template}
</template>

${styleStr}
`;

export default genVue;