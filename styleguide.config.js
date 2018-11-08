const path = require('path')
module.exports = {
  components: './src/components/**/[A-Z]*.jsx',
  ignore: ['**/[A-Z]*.test.js'],
  title: 'linte styleguide',
  exampleMode: 'collapse',
  usageMode: 'expand',
  sortProps: props => props,
  require: [
    'babel-polyfill',
    path.join(__dirname, 'node_modules/materialize-css/dist/js/materialize.min.js'),
    path.join(__dirname, 'node_modules/materialize-css/dist/css/materialize.min.css'),
    path.join(__dirname, 'src/styleguide.css')
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js|.jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ["es2015", "react"]
              }
            }
          ],
        },
        {
          test:/\.(s*)css$/,
          use: [{
              loader: "style-loader"
          }, {
              loader: "css-loader"
          }, {
              loader: "sass-loader",
          }]
        },
      ]
    }
  }
}
