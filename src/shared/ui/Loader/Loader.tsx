import { memo } from 'react';
import { cls } from 'shared/lib/classNames/cls';
import './Loader.scss';

interface LoaderProps {
 className?: string;
}

export const Loader = memo(({ className }: LoaderProps) => (
    <div className={cls('spinner', className)} />
));
