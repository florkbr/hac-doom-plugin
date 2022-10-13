const { resolve } = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const config = require('@redhat-cloud-services/frontend-components-config');
const commonPlugins = require('./plugins');
const CopyPlugin = require("copy-webpack-plugin");

const { config: webpackConfig, plugins } = config({
  rootFolder: resolve(__dirname, '../'),
  sassPrefix: '.hacCore, .hacDoomPlugin',
  deployment: process.env.BETA ? 'beta/api/plugins' : 'api/plugins',
});

module.exports = (env) => {
  return commonPlugins().then((resolvedPlugins) => {
    plugins.push(...resolvedPlugins);

    if (env && env.analyze === 'true') {
      plugins.push(new BundleAnalyzerPlugin());
    }
    plugins.push(new CopyPlugin({
      patterns: [
        { from: "static", to: "" },
      ],
    }));
    return {
      ...webpackConfig,
      plugins,
    };
  });
};
