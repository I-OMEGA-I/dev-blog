import path from 'path';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import buildCssLoader from '../build/loaders/buildCssLoader';

export default ({ config }: {config: Configuration}) => {
    const srcPath = path.resolve(__dirname, '..', '..', 'src');
    config.module.rules.push(buildCssLoader(true));
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/ };
        }

        return rule;
    });
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.resolve.modules.push(srcPath);
    config.resolve.extensions.push('.ts', '.tsx');
    config.plugins.push(new DefinePlugin({ __IS_DEV__: true }));
    config.resolve.modules = [
        path.resolve(__dirname, '../../src'),
        'node_modules',
    ];

    return config;
};
