"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? "bg-rk-white/90 backdrop-blur-md py-4 border-b border-rk-border/30"
                : "bg-transparent py-8"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className={`group flex items-center transition-all duration-300 ${isScrolled ? "gap-4" : "gap-0"}`}>
                    <div className={`transition-all duration-500 overflow-hidden flex items-center ${isScrolled ? "w-14 opacity-100" : "w-0 opacity-0"}`}>
                        <Image
                            src="/roemah_koffie_assets/logo_all58099a.webp"
                            alt="Roemah Koffie Logo"
                            width={56}
                            height={56}
                            className="object-contain"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className={`font-serif text-2xl tracking-tighter transition-colors duration-300 ${isScrolled ? "text-rk-primary" : "text-white"
                            }`}>
                            Roemah<span className="font-light italic">Koffie</span>
                        </span>
                        <span className={`font-mono text-[8px] uppercase tracking-[0.4em] transition-colors duration-300 ${isScrolled ? "text-rk-textSecondary" : "text-white/60"
                            }`}>
                            Est. 1928
                        </span>
                    </div>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-10">
                    {[
                        { name: "Origins", href: "/#origins" },
                        { name: "The Craft", href: "/#heritage" },
                        { name: "Catalogue", href: "/#catalogue" },
                        { name: "Locations", href: "/locations" },
                        { name: "Journal", href: "/#journal" }
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`font-sans text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 hover:text-rk-primary ${isScrolled ? "text-rk-textMain" : "text-white/80 hover:text-white"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Action Button */}
                <button
                    className={`px-6 py-2 border font-sans text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${isScrolled
                        ? "border-rk-primary text-rk-primary hover:bg-rk-primary hover:text-rk-white"
                        : "border-white/40 text-white hover:bg-white hover:text-rk-brownDark"
                        }`}
                >
                    Connect with MyJHL
                </button>
            </div>
        </nav>
    );
}
