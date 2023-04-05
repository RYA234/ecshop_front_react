module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stor@(y|ies).[tj]sx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links/register"
  ],
  "framework": "@storybook/react",
  "staticDirs": ["../public"],
  "core": {
    "builder": "webpack4"
  },


}