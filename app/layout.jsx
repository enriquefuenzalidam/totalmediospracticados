"use client";

import '../styles/globals.css';
import { Header } from '../components/header';
import { useEffect } from 'react';

export default function RootLayout({ children }) {
    useEffect(() => {
        // Add Google Analytics script
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-TLZ32T20BM';
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TLZ32T20BM');
        `;
        document.head.appendChild(script2);

        return () => {
            // Cleanup the scripts when the component unmounts
            document.head.removeChild(script1);
            document.head.removeChild(script2);
        };
    }, []);
    return (
        <html lang="es" className={` scroll-smooth `}>
            <head>
            </head>
            <body className="antialiased text-white" id="inicio">
            <Header />
            {children}
            </body>
        </html>
    );
}
