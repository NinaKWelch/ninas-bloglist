# Bloglist App Webpack Config

## Branch

https://github.com/NinaKWelch/ninas-bloglist/tree/webpack

## New dependencies

```
webpack
webpack-cli
webpack-dev-server
babel-loader
file-loader
@babel/core
@babel/preset-react
@babel/polyfill
@babel/preset-env
eslint-plugin-import
eslint-plugin-react
html-webpack-plugin
html-webpack-template

```

Note: `style-loader` and `css-loader` not needed as all styles are in _js_ files.

## View production build in browser

1. Move to the build folder with `cd build`

2. Run `npx static-server`

3. Go to _localhost:8080_

Note: the production build does not connect to backend API

# Development set up

1. Run `npm run watch` at the backend to start the dev server at _localhost:3003_ 

2. Run `npm start` at the front end

3. Go to _localhost:3000_


##  Webpack Issues

On `--mode=development` Babel notified about style files being too big.

```
[BABEL] Note: The code generator has deoptimised the styling of /Users/nina/Documents/github/ninas-bloglist/node_modules/react-dom/cjs/react-dom.development.js as it exceeds the max of 500KB.
```

On `--mode=production` webpack served a warning about exceeding asset size limit.

```
WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  main.js (466 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (466 KiB)
      main.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/
