import { render } from '@testing-library/react';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { PageLoader } from 'widgets/PageLoader';

export interface ComponentRenderOptions {
    route?: string
}

export function componentRender(
    Component: React.ReactNode,
    options: ComponentRenderOptions = {},
) {
    const { route = '/' } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <Suspense fallback={<PageLoader />}>
                <I18nextProvider i18n={i18nForTests}>
                    {Component}
                </I18nextProvider>
            </Suspense>
        </MemoryRouter>,
    );
}
