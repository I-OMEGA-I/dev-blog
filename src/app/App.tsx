
import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import './styles/index.scss'
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { cls } from "shared/lib/classNames/cls";
import { RouterProvider } from "./providers/RouterProvider";
import { Navbar } from "widgets/Navbar";


const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cls('app', theme)}>
      <Navbar />
      <RouterProvider />
    </div>
  );
}

export default App;