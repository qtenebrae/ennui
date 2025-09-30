'use client';

import styles from './cube.module.scss';
import cn from 'classnames';

import React, { useRef } from 'react';
import { motion, useAnimationFrame } from 'motion/react';

interface CubeProps extends React.HTMLAttributes<HTMLDivElement> {
    emojis: string[];
}

enum ESides {
    front,
    back,
    left,
    right,
    top,
    bottom,
}

export function Cube({ emojis, className }: CubeProps) {
    const cubeRef = useRef<HTMLDivElement>(null);

    useAnimationFrame(t => {
        if (!cubeRef.current) return;

        const rotate = Math.sin(t / 10000) * 200;
        const y = (1 + Math.sin(t / 1000)) * -50 + 50;
        const newDivider = 1.5 + Math.sin(t / 2000) * 0.5;

        cubeRef.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
        cubeRef.current.style.setProperty('--apothem-divider', newDivider.toString());
    });

    return (
        <motion.div className={cn(styles.cube, className)} ref={cubeRef}>
            {emojis?.map((item, i) => (
                <div className={cn(styles.cube__side, styles[ESides[i]])} key={i}>
                    {item}
                </div>
            ))}
        </motion.div>
    );
}
