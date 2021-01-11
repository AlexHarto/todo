# Vue3 + TypeScript + TailwindCSS

## Create new Vue project

```
vue create project-name
```

**-> Manually select features**\
(\*) Choose Vue version\
(\*) Babel\
(\*) TypeScript\
(\*) Router\
(\*) Vuex\
(\*) Linter / Formatter\
**-> 3.x (Preview)**\
class-style syntax? **N**\
Babel alongside TypeScript? **Y**\
history mode for router? **Y**\
**-> ESLint + Prettier**\
(\*) Lint on save\
**-> In dedicated config files**

```
cd project-name
```

## Add TailwindCSS + PostCSS

```
yarn add -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
npx tailwindcss init -p
```

## Add main.css

_src/main.ts_\
(import main.css)

```
···
import './styles/main.css';
···
```

_src/styles/main.css_

```
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body,
#app {
  height: 100%;
}

#app {
  @apply flex flex-col h-full mx-auto;
}
```

## Tailwind and PostCSS config

_tailwind.config.js_

```
module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

_postcss.config.js_

```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## 7. Other configuration files

_.editorconfig_

```
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
quote_type = single
```

_.eslintrc.js_

```
module.exports = {
  root: true,
  env: { node: true },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: { ecmaVersion: 2020 },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: [2, 'single', { avoidEscape: true }],
    'vue/html-closing-bracket-newline': [
      'error',
      { singleline: 'never', multiline: 'always' },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          ['provide', 'inject'],
          'ROUTER_GUARDS',
          'layout',
          'middleware',
          'validate',
          'scrollToTop',
          'transition',
          'loading',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'emits',
          'setup',
          'asyncData',
          'data',
          'fetch',
          'head',
          'computed',
          'watch',
          'watchQuery',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError',
        ],
      },
    ],
  },
};
```

_.prettierrc_

```
{
  "jsxBracketSameLine": false,
  "trailingComma": "all"
}
```

_babel.config.js_

```
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
};
```

_tsconfig.json_

```
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "strict": true,
    "jsx": "preserve",
    "importHelpers": true,
    "moduleResolution": "node",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "sourceMap": true,
    "baseUrl": ".",
    "types": [
      "webpack-env"
    ],
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "tests/**/*.ts",
    "tests/**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

## VS Code Plugins used:

- Auto Close Tags (Jun Han)
- Auto Rename Tag (Jun Han)
- Backet Pair Colorized (CoenraadS)
- EditorConfig for VS Code (EditorConfig)
- ESLint (Dirk Baeumer)
- Format in context menus (lacroixdavid1)
- GitLens (Eric Amodio)
- Headwind (Ryan Heybourn)
- Import Cost (Wix)
- Prettier - Code formatter (Prettier)
- Sorting HTML and Jade attributes (mrmlnc)
- Tailwind CSS IntelliSense (Brad Cornes)
- TODO Highlight (Wayou Liu)
- Vetur 0.31.3 (Pine Wu)
- vscode-icons (VSCode Icons Team)
- Vue VSCode Snippets (sarah.drasner)

## VS Code settings.json:

```
{
  "css.validate": false,
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "eslint.validate": ["javascript", "javascriptreact", "vue"],
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "javascript.format.placeOpenBraceOnNewLineForControlBlocks": false,
  "javascript.format.placeOpenBraceOnNewLineForFunctions": false,
  "javascript.preferences.quoteStyle": "single",
  "typescript.format.insertSpaceBeforeFunctionParenthesis": true,
  "typescript.format.placeOpenBraceOnNewLineForControlBlocks": false,
  "typescript.format.placeOpenBraceOnNewLineForFunctions": false,
  "vetur.format.defaultFormatter.html": "prettier",
  "vetur.format.defaultFormatter.js": "prettier-eslint",
  "vetur.format.defaultFormatter.ts": "prettier-tslint",
  "vetur.validation.template": false,
  "vetur.validation.style": false,
  "tailwindCSS.emmetCompletions": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "html.format.wrapLineLength": 180,
  "prettier.jsxSingleQuote": true,
  "prettier.jsxBracketSameLine": false,
  "prettier.packageManager": "yarn",
  "prettier.singleQuote": true,
  "prettier.trailingComma": "all",
  "prettier.htmlWhitespaceSensitivity": "ignore",

  "attrsSorter.order": [
    "is",
    "v-for",
    "v-if",
    "v-else-if",
    "v-else",
    "v-show",
    "v-cloak",
    "v-once",
    "v-pre",
    "id",
    "ref",
    "key",
    "v-slot",
    "v-slot.+",
    "#.*",
    "slot",
    "v-model",
    "v-model.+",
    "v-bind",
    "v-bind.+",
    ":.+",
    "v-text",
    "v-text.+",
    "v-html",
    "v-html.+",
    "class",
    "v-on.+",
    "@.+",
    "name",
    "data-.+",
    "ng-.+",
    "src",
    "for",
    "type",
    "href",
    "values",
    "title",
    "alt",
    "role",
    "aria-.+",
    "$unknown$"
  ],
  "todohighlight.isEnable": true,
  "todohighlight.include": [
    "**/*.js",
    "**/*.jsx",
    "**/*.ts",
    "**/*.tsx",
    "**/*.html",
    "**/*.php",
    "**/*.css",
    "**/*.scss",
    "**/*.vue",
    "**/*.styl"
  ],
  "workbench.iconTheme": "vscode-icons",
  "git.confirmSync": false
}
```

## Run JSON-SERVER:

```
npx json-server --watch data/db.json
```

## NOTE: Using Vite

```
yarn create @vitejs/app project-name --template vue-ts
```
