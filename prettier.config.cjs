/** @type {import("prettier").Options} */
const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 999,
  singleAttributePerLine: false,
  useTabs: false,
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.cjs",
};

module.exports = config;
