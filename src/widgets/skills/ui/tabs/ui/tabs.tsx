import styles from './tabs.module.scss';

import React from 'react';
import cn from 'classnames';

import { skills } from '@/widgets/skills/ui/tabs/model/constants';

import { Tabs as TabsRoot, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import { Skill } from '@/widgets/skills/ui/skill';

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Tabs({ className, ...props }: TabsProps) {
    return (
        <div className={cn(styles.wrapper, className)} {...props}>
            <TabsRoot className={styles.tabs} defaultValue='tab1'>
                <TabsList className={styles.tabs__list}>
                    <TabsTrigger className={styles.tabs__trigger} value='tab1'>
                        Frontend
                    </TabsTrigger>
                    <TabsTrigger className={styles.tabs__trigger} value='tab2'>
                        Backend
                    </TabsTrigger>
                    <TabsTrigger className={styles.tabs__trigger} value='tab3'>
                        DevOps
                    </TabsTrigger>
                    <TabsTrigger className={styles.tabs__trigger} value='tab4'>
                        Other
                    </TabsTrigger>
                </TabsList>
                <TabsContent className={styles.tabs__content} value='tab1'>
                    {skills.frontend?.map(skill => (
                        <Skill key={skill.title} title={skill.title}>
                            {skill.icon}
                        </Skill>
                    ))}
                </TabsContent>
                <TabsContent value='tab2'>Backend skills</TabsContent>
                <TabsContent value='tab3'>DevOps skills</TabsContent>
                <TabsContent value='tab4'>Other skills</TabsContent>
            </TabsRoot>
        </div>
    );
}
