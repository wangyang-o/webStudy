/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月17日 12:34:37
 * @LastEditors: wy
 * @LastEditTime: 2021年01月19日 13:29:22
 */
const {
    resolve
} = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
    Chunk
} = require('webpack');
module.exports = {
    entry: {
        index: './src/index.js',
        add: './src/add.js',
    }, //入口
    // 出口
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'build'),
        publicPath: '/',
        chunkFilename: '[name]_chunk.js',
        library: '[name]', //向外暴露的名字
        libraryTarget: '[name]', //添加到哪个对象上window（browser），global（node），common.js

    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'eslint-loader',
            // 只检查
            include: resolve(__dirname, 'src'),
            // 不检查
            exclude: '/node_modules/',
            // 优先执行
            enforce: 'pre',
            // enforce: 'post',延后执行
        }, {
            oneOf: [{

            }]
        }]
    },
    // plugins
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/common.css'
        }),
    ],
    mode: 'development',
    // 解析模块的规则
    resolve: {
        //路径别名
        alias: {
            $css: resolve(__dirname, 'src/css'),
        },
        // 后缀名
        extentions: ['.js', '.json'],
        modules: [],
    },
    optimazation: {
        spiltchunks: {
            chunks: 'all',
            miniSize: 30 * 1024, //分割chunk最小30kb
            minChunks: 1, //提取的chunk最少被引用1次
            

        },
    },
    devServer: {
        // 项目构建路径 webpack serve...
        contentBase: resolve(__dirname, 'build'),
        watchcontentBase: true,
        watchOptions: {
            ignored: '/node_nodules/'
        },
        // gzip压缩
        compress: true,
        // 端口
        port: 3000,
        // 浏览器
        open: true,
        // 热更新HMR
        hot: true,
        // 域名
        host: 'localhost',
        // 不显示服务器日志
        clientLogLevel: 'none',
        // 基本启动信息外，其他不打印
        quiet: true,
        // 出错不要全屏提示
        overlay: false,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: {
                    '^/api': '',
                }
            },
        },
    }
}