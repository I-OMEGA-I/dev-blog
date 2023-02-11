import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouteConfig } from 'shared/config/routerConfig/routerConfig';

export const RouterProvider = () => (
    <Routes>
        {Object.values(AppRouteConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<div>Loading...</div>}>
                        <div className="page">
                            {element}
                        </div>
                    </Suspense>
                )}
            />
        ))}
    </Routes>
);
