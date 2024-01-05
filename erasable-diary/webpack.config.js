const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/index.tsx',
    basePath: isProd ? "/ErasableDiary" : "",
    output: {
        path: path.resolve(__dirname, './dist')
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/i,
                use: ['css-loader', 'sass-loader'],
                exclude: /node_modules/
            }
        ]
    }
}