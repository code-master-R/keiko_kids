"use client"; // This component uses useState

import { theme } from '@/config/theme';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Programs", href: "/programs" },
        // { name: "Admissions", href: "/nursery" },
        { name: "Curriculum", href: "/curriculum" },
        // { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="bg-white/90 backdrop-blur-lg shadow-md sticky top-0 z-50">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <img
                            src="images/logo_image.png"
                            alt="A child happily engaged in a learning activity"
                            className="h-auto max-w-md"
                            style={{ width: "60%" }}
                        />
                    </div>
                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            {navLinks.map((link) => (
                                <Link key={link.name} href={link.href}
                                    className="text-lg font-medium transition-colors"
                                    style={{ color: theme.colors.heading }}
                                    onMouseOver={e => e.currentTarget.style.color = theme.colors.primary}
                                    onMouseOut={e => e.currentTarget.style.color = theme.colors.heading}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <Link href="/contact" className="px-6 py-3 text-white font-bold rounded-full shadow-lg transition-transform transform hover:scale-105" style={{ backgroundColor: theme.colors.secondary }}>
                            Locate Us
                        </Link>
                    </div>
                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none" style={{ color: theme.colors.secondary }}>
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="lg:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium" style={{ color: theme.colors.heading }}>
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 mt-2 text-center text-white font-bold rounded-md shadow-lg" style={{ backgroundColor: theme.colors.secondary }}>
                            Locate Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
