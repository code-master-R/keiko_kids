"use client";

import { theme } from '@/config/theme';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
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
        <header className="fixed top-0 left-0 w-full z-50">
            <nav className="bg-white/90 backdrop-blur-lg shadow-md">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex-shrink-0">
                            {/* Using Next.js Image component for optimization */}
                            <Link href="/">
                                <Image
                                    src="/images/logo_image.png"
                                    alt="Keiko Kids Logo"
                                    width={150} // Set an appropriate width
                                    height={50} // Set an appropriate height
                                    className="h-auto"
                                    priority
                                />
                            </Link>
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
            </nav>

            {/* Mobile Menu Panel */}
            <div
                className={`lg:hidden fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="p-5">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold" style={{ color: theme.colors.heading }}>Menu</h2>
                        <button onClick={() => setIsMenuOpen(false)} className="p-2">
                            <X size={28} style={{ color: theme.colors.secondary }} />
                        </button>
                    </div>
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-lg font-medium" style={{ color: theme.colors.heading }}>
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 mt-4 text-center text-white font-bold rounded-md shadow-lg" style={{ backgroundColor: theme.colors.secondary }}>
                            Locate Us
                        </Link>
                    </div>
                </div>
            </div>

            {/* Overlay for when menu is open */}
            {isMenuOpen && <div onClick={() => setIsMenuOpen(false)} className="lg:hidden fixed inset-0 bg-black/30 z-30"></div>}
        </header>
    );
};

export default Navbar;
