var webpack = require("webpack");
var path = require("path");

module.exports = [
  {
    entry: {
      main: "./assets/jsx/app.jsx",
    },
    output: {
      path: path.join(__dirname, "assets", "js"),
      filename: "[name].js"
    },
    module: {
      loaders: [
        {
          test: /\.jsx$/,
          loader: "jsx-loader?insertPragma=React.DOM&harmony"
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }
      ]
    },
    resolve: {
      extensions: ["", ".js", ".jsx"]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.DedupePlugin()
      //new webpack.optimize.UglifyJsPlugin({
      //  minimize: true,
      //  compress: { warnings: false }
      //})
    ]
  }
];
