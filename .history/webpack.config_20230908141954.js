const path = require('path');

// Builds web module. Only really used in example code / static site.
module.exports = (env, argv) => ({
    mode: 'production',
	entry: {
        'chrome-tip.min': './lib/cjs.js',
    },
    output: {
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
        devtoolModuleFilenameTemplate: '../[resource-path]',
        library: 'ChromeTipCom',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'build'),
    },
    devServer: {
        hot: true,
        open: 'example/index.html',
        client: {
            overlay: true,
        },
        devMiddleware: {
            // disableHostCheck: true,
            writeToDisk: true,
        },
        static: {
            directory: '.',
        }
    },
    devtool: 'source-map',
    externals: {
        'react': {
            'commonjs': 'react',
            'commonjs2': 'react',
            'amd': 'react',
            // React dep should be available as window.React, not window.react
            'root': 'React'
        },
        'react-dom': {
            'commonjs': 'react-dom',
            'commonjs2': 'react-dom',
            'amd': 'react-dom',
            'root': 'ReactDOM'
        }
    },
    module: {
        rules: [
            {
                test: /\.js|.jsx$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: ['@babel/preset-env', '@babel/react'],
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',
                options: {
                    limit: 40000,
                },
            },
            { test: /\.css$/, use: 'css-loader' },
        ]
    },
});