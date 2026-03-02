"use client";

import Image from "next/image";
import Link from "next/link";

const COFFEE_VARIANTS = [
    {
        id: "RK-L01-2026",
        name: "Rambadia",
        origin: "North Sumatra",
        process: "Wet Hulled",
        roast: "Medium-Dark",
        notes: ["Cacao", "Tobacco", "Earthy"],
        image: "/roemah_koffie_assets/rambadia_tincan__1_.webp",
    },
    {
        id: "RK-L02-2026",
        name: "Tondiku",
        origin: "Tana Toraja",
        process: "Washed",
        roast: "Light-Medium",
        notes: ["Citrus", "Floral", "Tea-like"],
        image: "/roemah_koffie_assets/TONDIKU_TINCAN__1___1_.webp",
    },
    {
        id: "RK-L03-2026",
        name: "Anak Daro",
        origin: "Solok, West Sumatra",
        process: "Natural",
        roast: "Medium",
        notes: ["Berry", "Creamy", "Sweet"],
        image: "/roemah_koffie_assets/ANAK_DARO_TINCAN__2___1_.webp",
    },
];

export default function ProductShowcase() {
    return (
        <section id="catalogue" className="w-full bg-rk-white py-32 border-t border-rk-border/50">
            <div className="container mx-auto px-6">
                {/* Technical Header (Onyx Style) */}
                <header className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="px-2 py-0.5 bg-rk-primary text-rk-white font-mono text-[9px] uppercase tracking-tighter">Live Catalogue</span>
                            <span className="font-mono text-[9px] uppercase text-rk-muted tracking-widest">Updated: Feb 2026</span>
                        </div>
                        <h2 className="font-serif text-5xl md:text-7xl leading-none">
                            The Current <br />
                            <span className="italic text-rk-primary">Harvest.</span>
                        </h2>
                    </div>

                    <div className="flex flex-col items-end text-right space-y-2">
                        <span className="font-mono text-[10px] uppercase text-rk-muted tracking-widest">Total Variants: 03</span>
                        <span className="font-mono text-[10px] uppercase text-rk-muted tracking-widest">Origin : Indonesian Unique Soil</span>
                        <span className="font-mono text-[10px] uppercase text-rk-muted tracking-widest">Global Shipping Available</span>
                        <Link href="/#merchandise" className="px-5 py-2 mt-4 bg-rk-primary text-rk-white font-mono text-[9px] uppercase tracking-widest hover:bg-rk-brownDark transition-colors duration-300">
                            Shop Merchandise
                        </Link>
                    </div>
                </header>

                {/* Technical Grid (Brutalist x Luxury) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-rk-border">
                    {COFFEE_VARIANTS.map((bean) => (
                        <article
                            key={bean.id}
                            className="group relative flex flex-col border-r border-b border-rk-border transition-all duration-700 hover:bg-rk-cream/50"
                        >
                            {/* Product Info (Top) */}
                            <div className="p-8 border-b border-rk-border space-y-1">
                                <span className="font-mono text-[9px] text-rk-muted uppercase tracking-widest">Lot Number</span>
                                <p className="font-mono text-xs font-bold text-rk-brownDark">{bean.id}</p>
                            </div>

                            {/* Product Visual Center */}
                            <div className="relative aspect-[4/5] w-full flex items-center justify-center p-12 overflow-hidden bg-white group-hover:bg-transparent transition-colors duration-700">
                                <Image
                                    src={bean.image}
                                    alt={`Packaging for ${bean.name}`}
                                    fill
                                    className="object-contain p-8 scale-90 group-hover:scale-105 transition-transform duration-1000 ease-out"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>

                            {/* Technical Specifications (Bottom) */}
                            <div className="p-8 space-y-6 flex-grow flex flex-col">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-serif text-3xl">{bean.name}</h3>
                                    <div className="text-right">
                                        <span className="block font-mono text-[10px] text-rk-muted uppercase">Origin</span>
                                        <span className="block font-mono text-xs">{bean.origin}</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pb-6 border-b border-rk-border">
                                    <div>
                                        <span className="block font-mono text-[10px] text-rk-muted uppercase">Process</span>
                                        <span className="block font-mono text-xs">{bean.process}</span>
                                    </div>
                                    <div>
                                        <span className="block font-mono text-[10px] text-rk-muted uppercase">Roast</span>
                                        <span className="block font-mono text-xs">{bean.roast}</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {bean.notes.map((note) => (
                                        <span key={note} className="px-3 py-1 border border-rk-border text-[10px] font-mono uppercase tracking-tighter text-rk-textSecondary">
                                            {note}
                                        </span>
                                    ))}
                                </div>

                                <button className="w-full mt-auto py-5 bg-rk-brownDark text-rk-white font-mono text-[10px] uppercase tracking-widest transition-all duration-300 hover:bg-rk-primary active:scale-[0.98]">
                                    Order Technical Specs
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
