
module.exports = {
    entry: './modules/bootstrap.jsx',
    output: {
        filename: './dest/dest.js'
    },
    module: {
        loaders: [
            // es6, jsx加载机
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            // less加载机
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            // url加载机
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader?limit=5000'
            }
        ]
    }
}