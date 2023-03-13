import { AppRoutePath } from 'shared/config/routerConfig/routerConfig';
import MainIcon from 'shared/assets/icons/main-icon.svg';
import AboutIcon from 'shared/assets/icons/about-icon.svg';
import ProfileIcon from 'shared/assets/icons/profile-icon.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.FC<React.SVGAttributes<SVGElement>>;
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: AppRoutePath.main,
        text: 'მთავარი',
        Icon: MainIcon,
    },
    {
        path: AppRoutePath.about,
        text: 'ჩვენ შესახებ',
        Icon: AboutIcon,
    },
    {
        path: AppRoutePath.profile,
        text: 'პროფილი',
        Icon: ProfileIcon,
    },
];
