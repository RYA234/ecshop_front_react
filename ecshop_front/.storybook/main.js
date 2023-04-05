module.exports = {
  "stories": ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)", "../components/**/*.stor@(y|ies).[tj]sx"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-mdx-gfm"],
  "webpackFinal": async (config) => {
    // remove existing source-loader in place
    config.module.rules.splice(6, 1);
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.stories\.[jt]sx?$/,
        loaders: [
          {
            loader: require.resolve("@storybook/source-loader"),
            options: { parser: "typescript", injectStoryParameters: false },
          },
        ],
        enforce: "pre",
      },
    ];
    return config;
   },  
  
  "framework": {
    options: {}
  },
  docs: {
    autodocs: true
  },

};