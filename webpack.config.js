const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            //js and jsx loaders
            {
                test: /\.m?(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                //css style loader
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                // imgs loader  
                test: /\.(png|jpg|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                    },
                }, ],
            },
        ]
    },

    resolve: {
        //import files without extiesions
        extensions: ['.js', '.jsx'],
    },

    devServer: {
        open: true,
        port: 3000,
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
}