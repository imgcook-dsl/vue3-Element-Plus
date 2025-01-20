import { IPanelDisplay } from "./interface";

import {
  prettierJsOpt,
  prettierMarkDownOpt,
  prettierJsonOpt,
  prettierHtmlOpt,
} from "./consts";

export default function exportCreateApp(schema, option): IPanelDisplay[] {
  const fileName = schema.fileName;
  const folderName = schema.componentName == "Page" ? "./" : "./components/";
  const { dependencies, dslConfig, _, prettier } = option;

  let panelValue = "";
  const panelDisplay: IPanelDisplay[] = [];

  panelValue = `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + Vue</title>
      </head>
      <body>
        <div id="app"></div>
        <script type="module" src="/src/main.js"></script>
      </body>
    </html>
  `;
  panelDisplay.push({
    panelName: `index.html`,
    panelType: "html",
    panelValue,
    folder: "",
  });

  // main.js
  panelValue = `
    import { createApp } from 'vue'
    import './style.css'
    import App from './App.vue'
    import ElementPlus from 'element-plus'
    import 'element-plus/dist/index.css'

    const app = createApp(App)
    app.use(ElementPlus)
    app.mount('#app')
  `;
  panelDisplay.push({
    panelName: `main.js`,
    panelType: "js",
    panelValue: prettier.format(panelValue, prettierJsOpt),
    folder: "/src",
  });

  // package.json
  let packDependencies = dependencies;
  panelValue = `
    {
      "name": "vue3-element-plus",
      "private": true,
      "version": "0.0.0",
      "type": "module",
      "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview"
      },
      "dependencies": {
        "element-plus": "^2.9.3",
        "vue": "^3.5.13"
      },
      "devDependencies": {
        "@vitejs/plugin-vue": "^5.2.1",
        "vite": "^6.0.5"
      }
    }
  `;
  panelDisplay.push({
    panelName: `package.json`,
    panelType: "json",
    panelValue: prettier.format(panelValue, prettierJsonOpt),
    folder: "",
  });

  // jsconfig.json/tsconfig.json
  panelValue = `
    {
      "compilerOptions": {
        "paths": {
          "@/*": ["./src/*"]
        }
      },
      "include": ["src"],
      "exclude": ["node_modules", "dist"]
    }
  `;
  panelDisplay.push({
    panelName: dslConfig.useTypescript ? `tsconfig.json` : `jsconfig.json`,
    panelType: "json",
    panelValue: prettier.format(panelValue, prettierJsonOpt),
    folder: "",
  });

  // README.md
  panelValue = `
    # 项目说明
  `;
  panelDisplay.push({
    panelName: `README.md`,
    panelType: "md",
    panelValue: prettier.format(panelValue, prettierMarkDownOpt),
    folder: "",
  });

  // vite.config.js
  panelValue = `
    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'

    // https://vite.dev/config/
    export default defineConfig({
      plugins: [vue()],
    })
  `
  panelDisplay.push({
    panelName: `vite.config.js`,
    panelType: "js",
    panelValue: prettier.format(panelValue, prettierJsOpt),
    folder: "",
  });

  return panelDisplay;
}
