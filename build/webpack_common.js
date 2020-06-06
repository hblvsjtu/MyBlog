/*
 * @Author: hblvsjtu (hblvsjtu@163.com)
 * @Date: 2020-05-04 12:20:05
 * @Last Modified by: hblvsjtu (hblvsjtu@163.com)
 * @Last Modified time: 2020-06-07 00:53:42
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { srcPath, distPath } = require("../config");

module.exports = {
    entry: {
        main: path.join(srcPath, "main.js"),
    },
    output: {
        filename: "[name].[hash:8].js",
        path: distPath,
        library: "BindData",
        libraryTarget: "umd",
        libraryExport: "default",
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 6 * 1024,
                            fallback: "file-loader",
                            outputPath: "img/",
                        },
                    },
                ],
                include: srcPath,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "../index.html"),
            chunks: ["main", "vendor", "common"],
            inject: "head",
        }),
    ],
};
