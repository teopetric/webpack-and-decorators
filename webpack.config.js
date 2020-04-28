const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// commonJs modules
// module.exports, exports, require
module.exports = {
    mode: 'development', // development, production, none, SourceMaps
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\.ts?$/
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        // new HtmlWebpackPlugin({template: './src/template.html'})
        new HtmlWebpackPlugin()
    ],

    devServer: {
        contentBase: './dist/',
        hot: true,
        overlay: true
    }
}