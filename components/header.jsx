import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/netlify-logo.svg';
import totalmediosLogo from 'public/totalmedios.png';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
    { linkText: 'Inicio', href: '/' },
    { linkText: 'Servicios', href: '/image-cdn' },
    { linkText: 'Nosotros', href: '/edge' },
    { linkText: 'Contacto', href: '/blobs' }
];

export function Header() {
    return (
        <nav className="fixed top-0 left-0 right-0 pr-4 flex flex-wrap items-center justify-between gap-4 p-2 sm:p-3 md:p-4 bg-black z-50">
            <div ><Image className="w-20 md:w-40 ml-5 mr-5" src={totalmediosLogo} alt="logo principal" /></div>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1 sm:gap-x-6 sm:gap-y-2 justify-end">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="inline-block px-1.5 py-1 transition hover:text-blue-600 hover:opacity-80 sm:px-3 sm:py-2 text-white no-underline text-base sm:text-sm md:text-base lg:text-lg xl:text-xl"
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            
        </nav>
    );
}
