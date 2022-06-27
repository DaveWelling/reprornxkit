const { makeMetroConfig } = require('@rnx-kit/metro-config');
const MetroSymlinksResolver = require('@rnx-kit/metro-resolver-symlinks');
const path = require('path');
module.exports = makeMetroConfig({
    projectRoot: __dirname,
    resolver: {
        resolveRequest: MetroSymlinksResolver(),
        //nodeModulesPaths: [path.resolve(__dirname, '..', 'node_modules')]
    },
    watchFolders: [__dirname, path.resolve(__dirname, '..')],
});
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
