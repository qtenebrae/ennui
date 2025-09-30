import styles from './skills-section.module.scss';

import React from 'react';
import cn from 'classnames';
import { Tabs } from '@/widgets/skills/ui/tabs';

interface SkillsSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SkillsSection({ className, ...props }: SkillsSectionProps) {
    return (
        <section className={cn(styles.skills, className)} {...props}>
            <h2 className={styles.skills__head}>Skills</h2>

            <Tabs className={styles.skills__tabs} />
        </section>
    );
}
