const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    output: {
        path: path.join(__dirname, '/build'),
        clean: true
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