const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const entryFiles = require('./tsfile')

module.exports = {
  // entry: [
  //   './src/index.ts',
  //   './src/3_xxx.ts'
  // ],
  entry: () => {
    return new Promise((resolve)=>{
      resolve(entryFiles);
    });
  },
  output: {
    // clean: true, // 在生成文件之前清空 output 目录
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...(Object.entries(entryFiles).map(itemArr => {
      console.log('***************: ', itemArr)
      let entryName = itemArr[0];
      let title = itemArr[1].split('./src/')[1].replace(/\.ts$/, '') || '';
      let onlyTitle = title.split('_')[1] || '';
      return new HtmlWebpackPlugin({
        title: title,
        filename: `${entryName}_${onlyTitle}.html`,
        chunks: [`${entryName}`],
        minify: false, // true if mode is 'production', otherwise false
      })
    }))
  ],
  resolve: {
    extensions: ['.ts', '.js']
  }
}