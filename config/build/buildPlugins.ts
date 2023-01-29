import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack, { WebpackPluginInstance } from "webpack";
import { BuildPaths } from "./types/config";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins({ html }: BuildPaths): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    })
  ]
}