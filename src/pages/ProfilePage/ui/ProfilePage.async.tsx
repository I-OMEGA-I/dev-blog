import { FC, lazy } from 'react';

export const ProfilePageAsync = lazy<FC<any>>(() => new Promise(
    (resolve) => {
        setTimeout(() => resolve(import('./ProfilePage')), 1500);
    },
));
