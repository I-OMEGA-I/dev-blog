import { t } from 'i18next';
import { memo } from 'react';
import { cls } from 'shared/lib/classNames/cls';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import classes from './SidebarItem.module.scss';

interface SidebarItemProps {
  item?: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => (
    <AppLink
        to={item.path}
        theme={AppLinkTheme.SECONDARY}
        className={cls(classes.link, { [classes.collapsed]: collapsed })}
    >
        <item.Icon className={classes.icon} />
        <span>{item.text}</span>
    </AppLink>
));
