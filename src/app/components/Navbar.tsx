'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react"; // 1. Import useState

export default function Navbar() {
    // 2. Define state for mobile menu visibility, default to closed (false)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the state (from true to false, or false to true)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // current url
    const pathname = usePathname();

    const getLinkClass = (href: string) => {
        // Base classes applied to all links
        const baseClasses = " transition duration-300 text-base font-medium tracking-wider ";

        // Logic to determine if the link is active
        const isActive = (pathname === href || pathname.startsWith(href + '/'));

        if (isActive) {
            // Active link styles
            return "text-indigo-600 font-bold " + baseClasses;
        } else {
            // Inactive link styles
            return "text-gray-700 hover:text-indigo-600 " + baseClasses;
        }
    }

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                <Link href="/" className="flex items-center space-x-2 text-gray-900 hover:text-indigo-600 transition duration-300">
                    <Image src="/logo.svg" alt="Site logo" width={40} height={40} />
                    <span className="text-xl sm:text-2xl font-serif font-bold tracking-wide">
                        Turner & Tonic
                    </span>
                </Link>

                <div className="hidden md:block">
                    <ul className="flex space-x-6 lg:space-x-8">
                        <li>
                            <Link href="/about" className={getLinkClass('/about')}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" className={getLinkClass('/shop')}>
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link href="/staff" className={getLinkClass('/staff')}>
                                Staff Picks
                            </Link>
                        </li>
                        <li>
                            <Link href="/faq" className={getLinkClass('/faq')}>
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 p-2 rounded-md"
                        // Optional: Add ARIA attributes for accessibility
                        aria-controls="mobile-menu"
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? (
                            // 'X' (Close) Icon
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger (Menu) Icon
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Panel (Hidden by default, shown when isMenuOpen is true) */}
            <div id="mobile-menu" className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t">
                    <Link
                        href="/about"
                        className={getLinkClass('/about') + " block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-100"}
                        onClick={toggleMenu} // Close menu on link click
                    >
                        About
                    </Link>
                    <Link
                        href="/shop"
                        className={getLinkClass('/shop') + " block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-100"}
                        onClick={toggleMenu} // Close menu on link click
                    >
                        Shop
                    </Link>
                    <Link
                        href="/staff-picks"
                        className={getLinkClass('/staff-picks') + " block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-100"}
                        onClick={toggleMenu} // Close menu on link click
                    >
                        Staff Picks
                    </Link>
                    <Link
                        href="/faq"
                        className={getLinkClass('/faq') + " block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-100"}
                        onClick={toggleMenu} // Close menu on link click
                    >
                        FAQ
                    </Link>
                </div>
            </div>
        </header>
    );
}