import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { cls } from 'shared/lib/classNames/cls';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={cls(classes.Navbar)}>
            <div />
            <div className={cls(classes.links)} />
        </div>
    );
};
