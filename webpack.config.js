"use strict";
var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: {
    index: "./index.js"
  },
  output: {
    path: path.join(__dirname, "lib"),
    chunkFilename: "[name].bundle.js",
    filename: "[name]",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: "all"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/, //Check for all js files
        use: [
          {
            loader: "babel-loader",
            options: { babelrcRoots: [".", "../"] }
          }
        ],
        exclude: /(node_modules|bower_compontents)/
      },
      {
        test: /\.(css|sass|scss)$/, //Check for sass or scss file names
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.json$/,
        loader: "json-loader" //JSON loader
      }
    ]
  },
  //To run development server
  devServer: {
    contentBase: __dirname
  }
};
