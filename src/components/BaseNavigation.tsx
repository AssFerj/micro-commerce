"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function BaseNavigation() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { href: "/", label: "Produtos" },
        { href: "/contato", label: "Contato" },
    ];

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="hidden md:block mt-4 w-full">
                <ul className="flex justify-center items-center gap-4">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`link ${pathname === link.href ? 'text-tertiary' : 'text-white'} hover:text-tertiary`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link href="/login" className="link text-primary bg-tertiary hover:bg-secondary hover:text-white rounded px-6 py-2">Login</Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex justify-center">
                <button onClick={toggleMenu} aria-label="Abrir menu">
                    <Menu className="h-6 w-6 text-white" />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-primary z-50 flex flex-col items-center p-4">
                    <div className="w-full flex justify-end">
                        <button onClick={toggleMenu} aria-label="Fechar menu">
                            <X className="h-6 w-6 text-white" />
                        </button>
                    </div>
                    <ul className="flex flex-col items-center gap-8 mt-16">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`text-2xl ${pathname === link.href ? 'text-tertiary' : 'text-white'} hover:text-tertiary`}
                                    onClick={toggleMenu}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="/login" className="text-2xl text-primary bg-tertiary hover:bg-primary hover:text-white rounded p-4">Login</Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}