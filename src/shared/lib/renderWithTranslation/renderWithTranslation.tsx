import { render } from '@testing-library/react';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';

export function renderWithTranslation(Component: React.ReactNode) {
    return render(
        <Suspense fallback="">
            <I18nextProvider i18n={i18nForTests}>
                {Component}
            </I18nextProvider>
        </Suspense>,
    );
}
