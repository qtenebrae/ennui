import '../public/styles/main.scss';
import styles from './layout.module.scss';

import React from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import { Header, Navigation } from '@/widgets';

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['cyrillic', 'latin'],
});

export const metadata: Metadata = {
    title: 'Nagi',
    description: 'Nagi...',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='ru'>
            <body className={montserrat.variable}>
                <Navigation className={styles.navigation} />
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
