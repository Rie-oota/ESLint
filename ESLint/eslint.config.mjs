// import js from "@eslint/js";
// import globals from "globals";
// import { defineConfig } from "eslint/config";


// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
//   { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
//   { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
// ]);
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
baseDirectory: __dirname,
recommendedConfig: js.configs.recommended,
allConfig: js.configs.all
})
export default defineConfig([
{
extends: compat.extends('eslint:recommended'),
languageOptions: {
globals: {
...globals.browser,
...globals.jquery
},
ecmaVersion: 12,
sourceType: 'script'
},
rules: {
semi: ['error', 'always'],
quotes: ['error', 'single'],
'no-console': ['warn'],
'no-var': 'error',
'array-bracket-spacing': 'error',
'comma-dangle': 'warn',
'comma-spacing': 'warn',
'comma-style': 'warn',
'no-nested-ternary': 'error',
'spaced-comment': 'warn',
'prefer-const': 'warn',
'no-trailing-spaces': 'warn',
'no-lonely-if': 'error',
'multiline-ternary': 'warn'
}
}
])