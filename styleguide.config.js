module.exports = {
  components: './src/components/**/[A-Z]*.jsx',
  ignore: ['**/[A-Z]*.test.js'],
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
          test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        },
      ]
    }
  }
}