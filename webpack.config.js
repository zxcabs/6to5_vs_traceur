/**
 * @author "Evgeny Reznichenko" <kusakyky@gmail.com>
 */
var
    webpack = require('webpack'),
    CompressionPlugin = require('compression-webpack-plugin'),

    EXCLUDE = [
        /node_modules/
    ],

    PLUGINS = [
        { Class: CompressionPlugin, opt: {} },
        { Class: webpack.optimize.UglifyJsPlugin, opt: {
            verbose: false,
            lint: false,
            compressor: {
                warnings: false
            }
        }}
    ];

module.exports = [
    {
        entry: './lib/index.js',
        output: {
            filename: './build/traceur_index.min.js'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'traceur',
                    query: { runtime: true },
                    exclude: EXCLUDE
                }
            ]
        },
        plugins: PLUGINS.map(function (item) {
            return new item.Class(item.opt)
        })
    },
    {
        entry: './lib/index.js',
        output: {
            filename: './build/6to5_index.min.js'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: '6to5-loader',
                    query: { runtime: true, optional: ['selfContained'] },
                    exclude: EXCLUDE
                }
            ]
        },
        plugins: PLUGINS.map(function (item) {
            return new item.Class(item.opt)
        })
    }
];
