/* eslint-disable max-len */
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { cls } from 'shared/lib/classNames/cls';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/Button';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onAuthModalClose = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);

    const onAuthModalOpen = useCallback(() => {
        setIsAuthModalOpen(true);
    }, []);

    const onSignout = useCallback(() => {
        dispatch(userActions.signOut());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={cls(classes.Navbar)}>
                <Button
                    theme={ButtonTheme.CLEAN}
                    className={cls(classes.links)}
                    onClick={onSignout}
                >
                    {t('Sign out')}
                </Button>
            </div>
        );
    }

    return (
        <div className={cls(classes.Navbar)}>
            <Button
                theme={ButtonTheme.CLEAN}
                className={cls(classes.links)}
                onClick={onAuthModalOpen}
            >
                {t('Sign in')}
            </Button>
            {isAuthModalOpen && (
                <LoginModal
                    isOpen={isAuthModalOpen}
                    onClose={onAuthModalClose}
                />
            )}
        </div>
    );
});
