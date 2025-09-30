'use client';

import styles from './header.module.scss';

import { Cube, Welcome } from '@/widgets/header';
import { motion } from 'motion/react';

const emojis = ['🍥', '🌸', '🌊', '🗻', '👘', '🍡'];

export function Header() {
    return (
        <header className={styles.header}>
            <Welcome />
            <motion.div
                className={styles.cube}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: 'spring', duration: 0.8 }}
            >
                <Cube emojis={emojis} />
            </motion.div>
        </header>
    );
}
