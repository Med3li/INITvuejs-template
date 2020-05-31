var path = require('path');

var bundleConfig = {
    mode: 'development',
    entry: {
      'bundle.js': [
            path.resolve(__dirname, './script/bundled files/build.js'),
            path.resolve(__dirname, './script/main.js'),
            path.resolve(__dirname, './script/javascript/theme.js'),
            ]
    },
    output: {
        path: path.resolve(__dirname, './script/bundled files'),
        publicPath: '/script/bundled files',
        filename: '[name]'
    },
    performance: {
        hints: process.env.NODE_ENV === 'production' ? "warning" : false
    },
    optimization: {
        splitChunks: {
            // include all types of chunks
            chunks: 'all',
        }
    },
    target: "node",
    node: {
        __dirname: false,
        fs: "empty"
    },
    watch: true
};

module.exports =bundleConfig;
/*
//to bundle multiply file
entry: {
    //method:single named entry '[name]':
    one:path.resolve(__dirname,'src/util.js'),
    two:path.resolve(__dirname, 'src/index.js')
  },
  output: {
    filename: '[name].js',
    chunkFilename: "[id].chunk.js",
    path: path.resolve(__dirname, 'dist'),
  }
*/