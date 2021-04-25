/**
 * withTypescript is a function that will allow you to override the web extension default
 * configuration with a configuration that allows you to write typescript files.
 * @param options A small set of options for further configuration of you webextension
 * @param options.webpack A function that will allow you to further configure webpack
 * @returns A function that can consume the output of webextension.config.webpack
 */
const withTypescript = (options = {}) => (config, ...other) => {
  const { webpack } = options;
  const entries = [
    resolve(src, "*.{js,mjs,jsx,ts,tsx}"),
    resolve(src, "?(scripts)/*.{js,mjs,jsx,ts,tsx}"),
  ];
  const typescriptConfig = {
    ...config,
    entry: GlobEntriesPlugin.getEntries(entries),
    resolve: {
      ...config.resolve,
      extensions: [...config.resolve.extensions, ".ts", ".tsx"],
    },
    module: {
      ...config.module,
      rules: [...config.module.rules, { test: /\.tsx?$/, loader: "ts-loader" }],
    },
  };
  return typeof webpack === "function"
    ? webpack(typescriptConfig, ...other)
    : typescriptConfig;
};

module.exports = { withTypescript };
