import { useTranslation } from 'react-i18next';
import { cls } from 'shared/lib/classNames/cls';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
 className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={cls(classes.LoginForm, className)}>
            <Input
                type="text"
                className={classes.input}
                placeholder={t('Username')}
                autoFocus
            />
            <Input
                type="text"
                className={classes.input}
                placeholder={t('Password')}
            />
            <Button className={classes.loginBtn}>
                {t('Sign in')}
            </Button>
        </div>
    );
};
