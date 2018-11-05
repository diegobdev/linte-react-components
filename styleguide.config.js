module.exports = {
  components: './src/components/**/index.js',
  ignore: ['**/index.test.js'],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js?$/,
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