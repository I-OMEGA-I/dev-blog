import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouteConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';

export const RouterProvider = () => (
    <Routes>
        {Object.values(AppRouteConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<PageLoader />}>
                        <div className="page">
                            {element}
                        </div>
                    </Suspense>
                )}
            />
        ))}
    </Routes>
);
