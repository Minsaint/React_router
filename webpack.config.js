
var uglifyjs = require('webpack').optimize.UglifyJsPlugin;
module.exports = {
    entry: './modules/bootstrap.jsx',
    output: {
        filename: './dest/dest.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test:/\.(jpg|png)$/,
                loader: 'url-loader?limit=5000'
            }
        ]
    },
    plugins: [
        new uglifyjs()
    ]
}