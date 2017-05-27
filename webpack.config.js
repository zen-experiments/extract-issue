'use strict';

const PATH = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const SRC = PATH.resolve(__dirname, 'src/');
const DEST = PATH.resolve(__dirname, 'dist/');
const COMP1 = PATH.resolve(SRC, 'component1/');
const COMP2 = PATH.resolve(SRC, 'component2/');

const NODE_MODULES = PATH.resolve(__dirname, 'node_modules/');

const config = {
    entry: {
        component1: COMP1,
        component2: COMP2
    },
    output: {
        libraryTarget: 'commonjs-module',
        filename: '[name]/index.js',
        path: DEST
    },
    module: {
        rules: [            
            {
                test: /(\.scss|\.css)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: []
                            }
                        },
                        {
                            loader: 'sass-loader',
                        }
                    ]
                }),
                include: SRC,
                exclude: [NODE_MODULES]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name]/index.css'
        })
    ]
};

module.exports = config;
