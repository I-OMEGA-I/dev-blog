import { ButtonHTMLAttributes, FC } from 'react';
import { cls } from 'shared/lib/classNames/cls';
import classes from './Button.module.scss';

export enum ButtonTheme {
  CLEAN = 'clean',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
  theme: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...others
    } = props;

    return (
        <button
            type="button"
            className={cls(classes.Button, classes[theme])}
            {...others}
        >
            {children}
        </button>
    );
};
