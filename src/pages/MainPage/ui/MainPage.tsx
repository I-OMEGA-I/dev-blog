import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {`${t('page.title.main')}`}
        </div>
    );
};

export default MainPage;
