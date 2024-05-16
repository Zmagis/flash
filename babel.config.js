module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@constants': './src/constants',
          '@screens': './src/screens',
          '@types': './src/types',
          '@navigators': './src/navigators',
          '@state': './src/state',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
