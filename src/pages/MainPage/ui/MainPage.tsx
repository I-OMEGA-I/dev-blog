import { BugButton } from 'app/providers/ErrorBoundaryProvider/ui/BugButton';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {`${t('page.title.main')}`}
            <BugButton />
        </div>
    );
};

export default MainPage;
