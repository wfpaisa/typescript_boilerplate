const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "source-map",
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    // extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
