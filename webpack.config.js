module.exports = {
    entry: ["/index.js"],
    output: {
      path: __dirname,
      filename: "bundle.js"
    },
    module: {
      resolve: {
        extensions: ["", ".js", ".jsx", ".css"] /*add '.css' "root": __dirname */
      },
      loaders: [
        {
          test: /\.(woff2?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
          loader: "file-loader"
        },
        {
          test: /\.scss$/,
          include: paths.appSrc,
          loaders: ["style", "css", "sass", "scss"]
        },
        {
          test: /\.css$/,
          use: [
            "handlebars-loader", // handlebars loader expects raw resource string
            "extract-loader",
            "css-loader"
          ]
        },
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: [, /\.sass$/, , /\.scss$/, /node_modules/]
        }
      ]
    },
    devServer: {
      port: 3000,
      contentBase: ".",
      inline: true
    }
  };
  