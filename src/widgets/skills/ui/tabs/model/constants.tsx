import React from 'react';

import { TSkills } from '@/widgets/skills/ui/tabs/model/types';

import {
    ChartIcon,
    CssIcon,
    FigmaIcon,
    HtmlIcon,
    ReactIcon,
    ReduxIcon,
    SassIcon,
    TailwindIcon,
    TanstackIcon,
} from '@/shared/ui/icons';

export const skills: TSkills = {
    frontend: [
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
    ],
};
