import { cls } from 'shared/lib/classNames/cls';
import './Loader.scss';

interface LoaderProps {
 className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={cls('spinner', className)} />
);
