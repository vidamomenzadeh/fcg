const path = require('path');
const pageTitle = "World Map";
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: ['@babel/polyfill', './index.js'],// './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './static/js/[name].[contenthash].js',
    },
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new OptimizeCSSAssetsPlugin({})
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: pageTitle,
            jsExtension: ".gz",
            cache: false
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: './static/css/[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
        new CompressionPlugin({
            filename(info) {
                // info.file is the original assets filename
                // info.path is the path of the original assets
                // info.query is the query
                return `${info.path}.gz${info.query}`
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    // fallback to style-loader in development
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            publicPath: './static/assets',
                            outputPath: './static/assets/',// '/static/assets/',
                        },
                    },
                ],
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader'
            },



        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            "@actions"      : path.resolve(__dirname, 'src/actions/'),
            "@queries"      : path.resolve(__dirname, 'src/queries/'),
            "@assets"       : path.resolve(__dirname, 'src/assets/'),
            "@components"   : path.resolve(__dirname, 'src/components/'),
            "@constants"    : path.resolve(__dirname, 'src/constants/'),
            "@containers"   : path.resolve(__dirname, 'src/containers/'),
            "@selectors"    : path.resolve(__dirname, 'src/selectors/'),
            "@sass"          : path.resolve(__dirname, 'src/sass/'),
            "@reducers"     : path.resolve(__dirname, 'src/reducers/'),
            "@sagas"        : path.resolve(__dirname, 'src/sagas/'),
            "@utils"        : path.resolve(__dirname, 'src/utils/'),
            "@store"        : path.resolve(__dirname, 'src/store/'),
            "@history"      : path.resolve(__dirname, 'src/history/'),
        }
    }
};


