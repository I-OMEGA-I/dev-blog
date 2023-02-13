import { useTranslation } from 'react-i18next';
import { BugButton } from 'widgets/PageError/ui/BugButton/BugButton';

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
