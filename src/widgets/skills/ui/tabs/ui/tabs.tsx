import styles from './tabs.module.scss';

import React from 'react';
import cn from 'classnames';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import {
    HtmlIcon,
    CssIcon,
    SassIcon,
    FigmaIcon,
    TailwindIcon,
    ReactIcon,
    ReduxIcon,
    TanstackIcon,
    ChartIcon,
} from '@/shared/ui/icons';
import { Skill } from '@/widgets/skills/ui/skill';

export interface ISkill {
    title: string;
    icon: React.JSX.Element;
}

const frontend: ISkill[] = [
    {
        title: 'HTML',
        icon: <HtmlIcon />,
    },
    {
        title: 'CSS',
        icon: <CssIcon />,
    },
    {
        title: 'Sass',
        icon: <SassIcon />,
    },
    {
        title: 'Figma',
        icon: <FigmaIcon />,
    },
    {
        title: 'Tailwind',
        icon: <TailwindIcon />,
    },
    {
        title: 'React',
        icon: <ReactIcon />,
    },
    {
        title: 'Redux',
        icon: <ReduxIcon />,
    },
    {
        title: 'TanStack',
        icon: <TanstackIcon />,
    },
    {
        title: 'Chart.js',
        icon: <ChartIcon />,
    },
];

interface SkillsTabsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SkillsTabs({ className, ...props }: SkillsTabsProps) {
    return (
        <div className={cn(styles.wrapper, className)} {...props}>
            <Tabs className={styles.tabs} defaultValue='tab1'>
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
                    {frontend.map(skill => (
                        <Skill key={skill.title} title={skill.title}>
                            {skill.icon}
                        </Skill>
                    ))}
                </TabsContent>
                <TabsContent value='tab2'>Backend skills</TabsContent>
                <TabsContent value='tab3'>DevOps skills</TabsContent>
                <TabsContent value='tab4'>Other skills</TabsContent>
            </Tabs>
        </div>
    );
}
