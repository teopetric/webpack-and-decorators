const path = require('path');

//commonJs modules
// module.exports, exports, require
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'mybundle.js'
    },
    resolve: {
        extensions: [' .js', '.ts']
    },
    module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\.ts?$/
            }
        ]
    }
}