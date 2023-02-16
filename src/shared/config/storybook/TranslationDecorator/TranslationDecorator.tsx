import { Story } from '@storybook/react';
import 'app/styles/index.scss';
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { PageLoader } from 'widgets/PageLoader';
import i18nForTests from '../../i18n/i18nForStorybook';

export const TranslationDecorator = (story: () => Story, context: any) => {
    const { globals } = context;

    useEffect(() => {
        i18nForTests.changeLanguage(globals.locale);
    }, [globals.locale]);

    return (
        <Suspense fallback={<PageLoader />}>
            <I18nextProvider i18n={i18nForTests}>
                {story()}
            </I18nextProvider>
        </Suspense>
    );
};
