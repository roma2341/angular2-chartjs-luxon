var webpack = require("webpack");

var config = {
  externals: {
     moment: 'moment'
  },
  devtool: 'source-map',
  entry: {
    main: './dev/app.ts'
  },
  resolve: {
    extensions: ['', '.ts', '.js'],
    alias: {
      'chart.js': 'chart.js/dist/Chart.js'
    }
  },
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts']
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 4200
  }
};

module.exports = config;
