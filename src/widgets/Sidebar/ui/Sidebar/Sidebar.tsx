import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cls } from 'shared/lib/classNames/cls';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={cls(classes.Sidebar, {
                [classes.collapsed]: collapsed,
            }, className)}
        >
            {/* <button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
            >
                {`${t('toggle')}`}
            </button> */}
            <div className={cls(classes.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher className={cls(classes.lang)} />
            </div>
        </div>
    );
};
