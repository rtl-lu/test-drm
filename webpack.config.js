// Generated using webpack-cli https://github.com/webpack/webpack-cli

const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';


const config = {
    entry: {
        main: './src/main.js',
        //custom: './src/custom.js'
    },
    output: {
        path: path.resolve(__dirname, 'html/dist'),
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "node_modules/theoplayer/ui.css", to: "" }
            ]
        })
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
