import '../../public/styles/globals.css';
import '../../public/styles/vars.css';

import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import React from 'react';

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['cyrillic', 'latin'],
});

export const metadata: Metadata = {
    title: 'Ennui',
    description: 'Ennui...',
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
