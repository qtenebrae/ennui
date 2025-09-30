import styles from './skill.module.scss';

import React from 'react';
import cn from 'classnames';

interface SkillProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
}

export function Skill({ title, className, children, ...props }: SkillProps) {
    return (
        <div className={cn(styles.skill, className)} {...props}>
            {children}
            <span className={styles.skill__title}>{title}</span>
        </div>
    );
}
