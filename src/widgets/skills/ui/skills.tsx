import styles from './skills.module.scss';

import React from 'react';
import cn from 'classnames';

import { SkillsTabs } from '@/widgets/skills/ui/tabs';

interface SkillsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skills({ className, ...props }: SkillsProps) {
    return (
        <section className={cn(styles.skills, className)} {...props}>
            <h2 className={styles.skills__head}>Skills</h2>

            <SkillsTabs className={styles.skills__tabs} />
        </section>
    );
}
