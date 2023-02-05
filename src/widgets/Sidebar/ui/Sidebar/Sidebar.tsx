import { useState } from 'react';
import { cls } from 'shared/lib/classNames/cls';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import classes from './Sidebar.module.scss'

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  }

  return (
    <div
      className={cls(classes.Sidebar, {
        [classes.collapsed]: collapsed
      })}
    >
      <button onClick={onToggle}>Toggle</button>
      <div className={cls(classes.switchers)}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};