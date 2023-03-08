import { PropItem } from "react-docgen-typescript";
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { Configuration } from "webpack";

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  staticDirs: [{ from: '../public/static', to: '/static' }],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config: Configuration) => {
    if (config.resolve) {
      config.resolve.plugins = [
        ...(config?.resolve?.plugins || []),
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        })
      ];
    }
    return {
      ...config,
      module: { ...config.module, rules: config.module ? config.module.rules : {} },
    };
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop: PropItem) =>
      prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
};
