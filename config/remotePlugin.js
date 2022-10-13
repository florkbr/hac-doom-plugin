const { resolve } = require('path');
const packageInfo = require('../package.json');

module.exports = {
  pluginMetadata: {
    name: packageInfo.name,
    version: packageInfo.version,
    exposedModules: {
      init: resolve(__dirname, '../src/PluginEntry/PluginEntry.tsx'),
    },
  },
  extensions: [
    {
      type: 'console.page/route',
      properties: {
        path: '/doom-plugin',
        component: {
          $codeRef: 'init',
        },
      },
    },
    {
      type: 'core.page/route',
      properties: {
        path: '/doom-plugin',
        component: {
          $codeRef: 'init',
        },
      },
    },
    {
      type: 'console.navigation/href',
      properties: {
        href: '/doom-plugin',
        name: 'Doom Plugin',
      },
    },
    {
      type: 'core.navigation/href',
      properties: {
        href: '/doom-plugin',
        name: 'Doom Plugin',
      },
    },
  ],
  sharedModules: {
    '@openshift/dynamic-plugin-sdk': { singleton: true, import: false },
    '@openshift/dynamic-plugin-sdk-utils': { singleton: true, import: false },
    'react-router-dom': { singleton: true },
    '@scalprum/react-core': { singleton: true, import: false },
    '@patternfly/react-core': { singleton: true, eager: true },
    '@patternfly/quickstarts': { singleton: true, eager: true },
  },
};
