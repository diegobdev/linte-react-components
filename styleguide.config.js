module.exports = {
  components: './src/components/**/[A-Z]*.jsx',
  ignore: ['**/[A-Z]*.test.js'],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js|jsx?$/,
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
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
      ]
    }
  }
}