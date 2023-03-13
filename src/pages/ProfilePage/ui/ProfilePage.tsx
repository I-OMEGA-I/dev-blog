import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = (props: ProfilePageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div className={className}>
                {t('PROFILE PAGE')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
