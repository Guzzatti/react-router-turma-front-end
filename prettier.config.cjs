const PrettierPluginTailwindCss = require("prettier-plugin-tailwindcss");

module.exports = {
  plugins: [PrettierPluginTailwindCss],
  printWidth: 120,
  singleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  bracketSameLine: true,
  semi: true,
  requirePragma: false,
  proseWrap: "preserve",
  arrowParens: "avoid",
};
