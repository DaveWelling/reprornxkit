module.exports = {
    //  presets: ['module:metro-react-native-babel-preset'],
    presets: ['@rnx-kit/babel-preset-metro-react-native']
};
// const { makeBabelConfig } = require('@rnx-kit/metro-config');
// module.exports = makeBabelConfig([
//     [
//         '@rnx-kit/babel-plugin-import-path-remapper',
//         {
//             test: source => {
//                 console.log('SOMESOURCE: ', source);
//                 if (source.startsWith('@babel/')) {
//                     console.log('OLDPATH: ', source);
//                     return true;
//                 }
//             },
//             remap: moduleName => { {
//                 const newpath = path.join(__dirname, 'node_modules', moduleName);
//                 console.log('NEWPATH: ', newpath);
//                 return newpath;
//             }
//         },
//     ]
// ]);
