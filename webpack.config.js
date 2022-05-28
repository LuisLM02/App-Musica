const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const reglasJavaScript = {
    test: /\.js$/,
    loader: 'babel-loader',
}

const reglasSASS = {
    test: /\.s[ac]ss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader']
}

const rules = [reglasJavaScript, reglasSASS];

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build')
      },
      plugins:[
        new HtmlWebpackPlugin({template: './src/index.html'})
      ],
      module: {rules},
      resolve: {
        extensions: [".js"]
      }
}