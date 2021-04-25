# webextension-toolbox-typescript

This is a module that allows you to add [typescript](https://www.typescriptlang.org/) support to [webextension-toolbox](https://github.com/webextension-toolbox/webextension-toolbox), including root files and typescript with xml _tsx_.

```shell
npm install webextension-toolbox-typescript --save
```

## Usage

**webextension-toolbox-typescript** exports out an export named **withTypescript**. This should be used in a [`webextension-toolbox-config.js`](https://github.com/webextension-toolbox/webextension-toolbox#customizing-webpack-config) in the root of your directory.

```javascript
const { withTypescript } = require("webextension-toolbox-typescript");

module.exports = {
  webpack: withTypescript(),
};
```

If you wish to continue to configure your webpack configuration you can use the webpack option on **withTypescript**.

```javascript
const { withTypescript } = require("webextension-toolbox-typescript");

module.exports = {
  webpack: withTypescript({
    webpack: (config, { dev, vendor }) => {
      // Modify the config.
      return config;
    },
  }),
};
```
