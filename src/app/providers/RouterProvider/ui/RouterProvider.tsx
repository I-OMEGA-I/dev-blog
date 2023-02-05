import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouteConfig } from 'shared/config/routerConfig/routerConfig';

export const RouterProvider = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {Object.values(AppRouteConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <div className="page">
                            {element}
                        </div>
                    )}
                />
            ))}
        </Routes>
    </Suspense>
);
