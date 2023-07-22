/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  bracketSpacing: true,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
};

module.exports = config;
