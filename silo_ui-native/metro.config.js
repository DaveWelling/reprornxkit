const { makeMetroConfig, resolveUniqueModule } = require('@rnx-kit/metro-config');
const MetroSymlinksResolver = require('@rnx-kit/metro-resolver-symlinks');
const path = require('path');
const [reactPath] = resolveUniqueModule('react');
const [reactNativePath] = resolveUniqueModule('react-native');

const metroConfig = makeMetroConfig();
module.exports = {
    ...metroConfig,
    resolver: {
        extraNodeModules: {
            react: reactPath,
            'react-native': reactNativePath,
        },
    },
    watchFolders: [...metroConfig.watchFolders, path.resolve(__dirname, '..')],
};
// /**
//  * Metro configuration for React Native
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// module.exports = {
//     transformer: {
//         getTransformOptions: async () => ({
//             transform: {
//                 experimentalImportSupport: false,
//                 inlineRequires: true
//             }
//         })
//     }
// };
