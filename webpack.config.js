
var path = require('path');

var node_dir = __dirname + '/node_modules';

module.exports = {
    entry: './src/main/js/app.js',
    devtool: 'sourcemaps',
    cache: true,
    debug: true,
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {loader: 'style-loader!css-loader', test: /\.css$/},
            {loader: 'url-loader', test: /\.gif$/},
            {loader: 'file-loader', test: /\.(ttf|eot|svg)$/}
        ],
    },
    resolve: {
        root: __dirname,
        alias: {

            App: './src/main/js/app.js',

        },
        extensions: ['', '.js', '.jsx']
    }
};