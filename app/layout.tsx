import '../public/styles/main.scss';

import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import React from 'react';

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
            <body className={`${montserrat.variable}`}>{children}</body>
        </html>
    );
}
