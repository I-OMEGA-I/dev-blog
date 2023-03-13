import { memo, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppRoutePath } from 'shared/config/routerConfig/routerConfig';
import { cls } from 'shared/lib/classNames/cls';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button } from 'shared/ui/Button';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import MainIcon from 'shared/assets/icons/main-icon.svg';
import AboutIcon from 'shared/assets/icons/about-icon.svg';
import { SidebarItemList } from 'widgets/Sidebar/model/items';
import classes from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => SidebarItemList.map((link) => (
        <SidebarItem
            key={link.path}
            item={link}
            collapsed={collapsed}
        />
    )), [collapsed]);

    return (
        <div
            data-testid="sidebar"
            className={cls(classes.Sidebar, {
                [classes.collapsed]: collapsed,
            }, className)}
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                className={classes.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                squared
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={classes.items}>
                {itemsList}
            </div>
            <div className={cls(classes.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher
                    className={cls(classes.lang)}
                    short={collapsed}
                />
            </div>
        </div>
    );
});
