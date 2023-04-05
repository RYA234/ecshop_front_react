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
<<<<<<< HEAD
    'storybook-addon-next',
=======
    "@storybook/addon-links/register"
>>>>>>> 5eb562ec6a36dc4653f6f11c2c5cfc7c543ed824
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },


}