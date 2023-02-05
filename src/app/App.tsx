
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
import { Sidebar } from "widgets/Sidebar";


const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cls('app', theme)}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <RouterProvider />
      </div>
    </div>
  );
}

export default App;