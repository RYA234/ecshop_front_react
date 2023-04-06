module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-postcss'

  ],
  "framework": "@storybook/react",
  "typescript": { reactDocgen: 'react-docgen' },
  "staticDirs": ["../public"],
  "core": {
    "builder": "webpack4"
  },


}