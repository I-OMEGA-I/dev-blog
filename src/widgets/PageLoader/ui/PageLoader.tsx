import { cls } from 'shared/lib/classNames/cls';
import { Loader } from 'shared/ui/Loader';
import classes from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={cls(classes.PageLoader, className)}>
        <Loader />
    </div>
);
