module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', "module:react-native-dotenv"],
    plugins: [
      ["transform-inline-environment-variables", {
        "include": [
          "NODE_ENV"
        ]
      }]
    ]
  };
};
