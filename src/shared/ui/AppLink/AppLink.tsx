import { memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { cls } from 'shared/lib/classNames/cls';
import classes from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        className,
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
        ...others
    } = props;

    return (
        <Link
            to={to}
            className={cls(classes.AppLink, classes[theme], className)}
            {...others}
        >
            {children}
        </Link>
    );
});
