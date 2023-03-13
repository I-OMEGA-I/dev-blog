import { loginActions, loginReducer } from 'features/AuthByUsername';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { cls } from 'shared/lib/classNames/cls';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import {
    getLoginPassword,
} from '../../model/selectors/getLoginPassword/getLoginPassword';
import {
    getLoginUsername,
} from '../../model/selectors/getLoginUsername/getLoginUsername';
import {
    getLoginIsLoading,
} from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import classes from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess?: () => void;
}

const reducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div className={cls(classes.LoginForm, className)}>
                <Text title={t('Sign in')} />
                {error && (
                    <Text text={t(`${error}`)} theme={TextTheme.ERROR} />
                )}
                <Input
                    type="text"
                    className={classes.input}
                    placeholder={t('Username')}
                    onChange={onChangeUsername}
                    value={username}
                    autoFocus
                />
                <Input
                    type="text"
                    className={classes.input}
                    placeholder={t('Password')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    className={classes.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Sign in')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
