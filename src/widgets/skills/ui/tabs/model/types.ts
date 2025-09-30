import React from 'react';

export type TSkills = {
    frontend?: TSkill[];
    backend?: TSkill[];
    devops?: TSkill[];
    other?: TSkill[];
};

export type TSkill = {
    title: string;
    icon: React.JSX.Element;
};
