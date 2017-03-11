var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['script-loader!jquery/dist/jquery.min.js','script-loader!foundation-sites/dist/js/foundation.min.js','./app/app.jsx'],
  externals: {
    jquery : 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery' : 'jquery'
    }),


  //   new webpack.LoaderOptionsPlugin({
  //   options: {
  //     sassLoader: {
  //       includePaths: []
  //     }
  //   },
  // })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
  modules: [
    path.resolve(__dirname, "app/components/"),
    path.resolve(__dirname, "app/api/"),
    path.resolve(__dirname, "app/actions/"),
    path.resolve(__dirname, "app/reducers/"),
    "node_modules",
    path.resolve(__dirname, "app/store/"),
    path.resolve(__dirname, "app/styles/")

   ],

    extensions: ['.js','.jsx']
  },
  module:{
    loaders:[
      {
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015','stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  // sassLoader: {
  //   sourcemap: true,
  //   includePaths: [
  //     path.resolve(__dirname, './node_modules/foundation-sites/scss')
  //   ]
  // },
  devtool: 'cheap-module-eval-source-map'
};
