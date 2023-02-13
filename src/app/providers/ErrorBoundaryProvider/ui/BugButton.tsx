import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cls } from 'shared/lib/classNames/cls';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/Button';

interface BugButtonProps {
  className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState(false);

    const { t } = useTranslation();

    useEffect(() => {
        if (error) {
            throw new Error('');
        }
    }, [error]);

    return (
        <Button
            onClick={() => setError(true)}
            theme={ButtonTheme.CLEAN}
            className={cls(className)}
        >
            {t('bugbtn')}
        </Button>
    );
};
