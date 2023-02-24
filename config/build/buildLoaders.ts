import { RuleSetRule } from 'webpack';
import buildCssLoader from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
    return [
        {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        },
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        buildCssLoader(options.isDev),
    ];
}
