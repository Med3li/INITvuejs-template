var Loader = require('vue-loader/lib/plugin');
var path = require('path');

var vueConfig = {
    mode: 'development',
    entry: './script/vue.config.js',
    output: {
        path: path.resolve(__dirname, './script/bundled files'),
        publicPath: '/script/bundled files',
        filename: 'build.js'
    },

    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // this will apply to both plain `.js` files
            // AND `<script>` blocks in `.vue` files
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            
            // this will apply to both plain `.css` files
            // AND `<style>` blocks in `.vue` files
            // webpack.config.js -> module.rules
            {
                test: /\.css$/i,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // enable CSS Modules
                            modules: true,
                            // customize generated class names
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                            url: true,
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: { modules: true, url: true }
                    },
                    'sass-loader'
                ]
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'url-loader',
                options: {
        name: '[name].[ext]',
        publicPath: 'img/'
      },
                
            },
        ]
    },

    plugins: [
        new Loader()
    ]
};
/*var bundleConfig = {
    mode: 'development',
    entry: {
        one: './script/main.js',
        //two: './script/javascript/respond.min.js',
        //three: './script/javascript/html5shiv.min.js',
        //four: './script/javascript/theme.js'
        //five: './script/javascript/bootstrap.min.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    performance: {
        hints: process.env.NODE_ENV === 'production' ? "warning" : false
    },
    optimization: {
        splitChunks: {
            // include all types of chunks
            chunks: 'all'
        }
    },
    target: "node",
    node: {
        __dirname: false,
        fs: "empty"
    },
    watch: true};*/

module.exports = vueConfig;

//module.exports = bundleConfig;

//module.exports: [{},{}];
//module.exports = vueConfig;
// found out where the problem occurred.
//#issue TypeError: Cannot read property 'tapAsync' of undefined
//webpack.config.js export Array,but pipe(webpack(webpackConfig)) only accept object