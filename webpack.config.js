const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
console.log(__dirname + '/public/dist/')
module.exports = {
  entry: "./src/app/index.tsx",
  output: {
    filename: "app.js",
    path: __dirname + "/public/dist"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'LightyBoy',
      template: './src/app/index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/app/colour.html',
      filename: 'colour.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/app/cync.html',
      filename: 'cync.html',
      inject: false,
    }),
    new CopyPlugin([
      { from: __dirname + '/src/app/vendor/cync', to: __dirname + '/public/dist/cync' },
      { from: __dirname + '/src/app/cync/integrate.js', to: __dirname + '/public/dist/cync/integrate.js' },
    ]),
  ],

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    // "react": "React",
    // "react-dom": "ReactDOM"
  }
};