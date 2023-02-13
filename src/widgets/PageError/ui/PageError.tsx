import { useTranslation } from 'react-i18next';
import { cls } from 'shared/lib/classNames/cls';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/Button';
import classes from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reload = () => {
        window.location.reload();
    };

    return (
        <div className={cls(classes.PageError, className)}>
            <span>{t('error')}</span>
            <Button
                type="button"
                theme={ButtonTheme.CLEAN}
                onClick={reload}
            >
                {t('reload')}
            </Button>
        </div>
    );
};
