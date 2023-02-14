import { useTranslation } from 'react-i18next';
import { cls } from 'shared/lib/classNames/cls';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/Button';
import classes from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { i18n, t } = useTranslation();

    const onToggleLang = async () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ka' : 'en');
    };

    return (
        <div className={cls(classes.LangSwitcher, className)}>
            <Button theme={ButtonTheme.CLEAN} onClick={onToggleLang}>{`${t('lang')}`}</Button>
        </div>
    );
};
