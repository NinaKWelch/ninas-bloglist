# Bloglist App

## Branch

https://github.com/NinaKWelch/ninas-bloglist/tree/webpack

## New dependencies

webpack
webpack-cli
webpack-dev-server
@babel/core
babel-loader
@babel/preset-react
@babel/polyfill
@babel/preset-env
eslint-plugin-import
eslint-plugin-react

## Not needed

Installing  _style-loader_ and _css-loader_ not needed as all styles are in _js_ files.


##  Webpack Issues

Babel notified about style files being too big.

```
[BABEL] Note: The code generator has deoptimised the styling of /Users/nina/Documents/github/ninas-bloglist/node_modules/react-dom/cjs/react-dom.development.js as it exceeds the max of 500KB.
```

This warning disappeard after changing build scripts from `--mode=development` to `--mode=production`.

Instead, new warnings appeared:

```
WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  main.js (472 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (472 KiB)
      main.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/
```
