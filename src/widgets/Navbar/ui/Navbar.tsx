/* eslint-disable max-len */
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { cls } from 'shared/lib/classNames/cls';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModalOpen((prev) => !prev);
    }, []);

    return (
        <div className={cls(classes.Navbar)}>
            <Button
                theme={ButtonTheme.CLEAN}
                className={cls(classes.links)}
                onClick={onToggleModal}
            >
                {t('Sign in')}
            </Button>
            <Modal isOpen={isAuthModalOpen} onClose={onToggleModal}>
                {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, corporis tenetur eum soluta, rerum reprehenderit animi saepe omnis accusantium, magni laborum officia fugiat?')}
            </Modal>
        </div>
    );
};
