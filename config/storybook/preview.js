import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/styleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/themeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import i18n from './i18next';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    i18n,
    locale: 'en',
    locales: {
        en: { title: 'English', left: '🇺🇸' },
        ka: { title: 'ქართული', left: '🇬🇪' },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
