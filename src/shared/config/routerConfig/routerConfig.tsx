import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about'
}

export const AppRoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about'
}

export const AppRouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
      path: AppRoutePath.main,
      element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
      path: AppRoutePath.about,
      element: <AboutPage />
    },
}