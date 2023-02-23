/* eslint-disable max-len */
import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cls } from 'shared/lib/classNames/cls';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/Button';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const onAuthModalClose = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);

    const onAuthModalOpen = useCallback(() => {
        setIsAuthModalOpen(true);
    }, []);

    return (
        <div className={cls(classes.Navbar)}>
            <Button
                theme={ButtonTheme.CLEAN}
                className={cls(classes.links)}
                onClick={onAuthModalOpen}
            >
                {t('Sign in')}
            </Button>
            <LoginModal
                isOpen={isAuthModalOpen}
                onClose={onAuthModalClose}
            />
        </div>
    );
};
