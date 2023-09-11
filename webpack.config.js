const path = require('path');

module.exports = (env, argv) => ({
    mode: 'production',
	entry: {
        'chrome-tip.min': './src/index.js',
    },
    output: {
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
        library: 'ChromeTipCom',
        libraryTarget: 'umd',
        libraryExport: 'default',
        umdNamedDefine: true,
        path: path.resolve(__dirname, 'build'),
    },
    devServer: {
        hot: true,
        static: {
            directory: path.resolve(__dirname, 'example')
        },
        open: true,
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
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
        ]
    },
});
