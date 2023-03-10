import { ButtonHTMLAttributes, FC, memo } from 'react';
import { cls } from 'shared/lib/classNames/cls';
import classes from './Button.module.scss';

export enum ButtonTheme {
    CLEAN = 'clean',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
    className?: string;
    children: React.ReactNode;
    theme?: ButtonTheme;
    squared?: boolean;
    size?: ButtonSize;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        squared,
        size = ButtonSize.M,
        disabled,
        ...others
    } = props;

    return (
        <button
            type="button"
            data-testid="btn"
            className={cls(
                classes.Button,
                classes[theme],
                {
                    [classes.squared]: squared,
                    [classes[size]]: true,
                    [classes.disabled]: disabled,
                },
                className,
            )}
            disabled={disabled}
            {...others}
        >
            {children}
        </button>
    );
});
