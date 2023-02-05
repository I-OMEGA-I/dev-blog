import { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { cls } from 'shared/lib/classNames/cls';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { RouterProvider } from './providers/RouterProvider';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={cls('app', theme)}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <RouterProvider />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
