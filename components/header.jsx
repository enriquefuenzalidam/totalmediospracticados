import Link from 'next/link';
import totalmediosLogo from 'public/totalmedios.png';

const navItems = [
    { linkText: 'Inicio', href: '#inicio' },
    { linkText: 'Servicios', href: '#servicios' },
    { linkText: 'Nosotros', href: '#nosotros' },
    { linkText: 'Contacto', href: '#contacto' }
];

export function Header() {
    return (
        <nav className="fixed top-0 left-0 right-0 pr-4 flex flex-wrap items-center justify-between p-2 sm:p-3 md:p-4 bg-black z-50">
            <div><img className="w-20 md:w-40 ml-5" src={totalmediosLogo.src} alt="logo principal" /></div>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-2 gap-y-1 sm:gap-x-3 sm:gap-y-2 justify-end">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="inline-block px-1.5 py-1 transition hover:text-blue-600 hover:opacity-80 sm:px-3 sm:py-2 text-white no-underline text-xs sm:text-sm md:text-md lg:text-lg"
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
