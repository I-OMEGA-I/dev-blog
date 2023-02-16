import { Story } from '@storybook/react';
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Loader } from 'shared/ui/Loader';
import i18nForStorybook from '../../i18n/i18nForStorybook';

export const TranslationDecorator = (story: () => Story, context: any) => {
    const { globals } = context;

    useEffect(() => {
        i18nForStorybook.changeLanguage(globals.locale);
    }, [globals.locale]);

    return (
        <Suspense fallback={<Loader />}>
            <I18nextProvider i18n={i18nForStorybook}>
                {story()}
            </I18nextProvider>
        </Suspense>
    );
};
