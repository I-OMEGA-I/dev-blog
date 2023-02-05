import { Link } from 'react-router-dom';
import { cls } from 'shared/lib/classNames/cls';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import classes from './Navbar.module.scss'

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={cls(classes.Navbar)}>
      <div>
        
      </div>
      <div className={cls(classes.links)}>
        <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>
          Main
        </AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY} >
          About
        </AppLink>
      </div>
    </div>
  );
};