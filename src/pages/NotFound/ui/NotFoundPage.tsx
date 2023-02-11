import { useTranslation } from 'react-i18next';
import { cls } from 'shared/lib/classNames/cls';
import classes from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={cls(classes.NotFoundPage, className)}>
            {t('not found')}
        </div>
    );
};
