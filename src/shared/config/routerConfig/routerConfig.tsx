import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFound';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const AppRoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
};

export const AppRouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: AppRoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: AppRoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: AppRoutePath.not_found,
        element: <NotFoundPage />,
    },
};
