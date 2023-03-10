import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { cls } from 'shared/lib/classNames/cls';
import classes from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const inputRef = useRef<HTMLInputElement>();

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            inputRef?.current?.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    return (
        <div className={cls(classes.InputWrapper, className)}>
            {placeholder && (
                <div className={classes.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={classes.caretWrapper}>
                <input
                    ref={inputRef}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={classes.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        className={classes.caret}
                        style={{ left: `${caretPosition * 8}px` }}
                    />
                )}
            </div>
        </div>
    );
});
