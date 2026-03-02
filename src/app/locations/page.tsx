"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const LOCATIONS = [
    {
        name: "Carstensz Mall",
        address: "Jl. Jend. Sudirman No. 1 GF #01 Cihuni Kec. Pagedangan, Kab. Tangerang, Banten 15332",
        image: "/roemah_koffie_assets/RK_Carstensz_Mall.webp",
        specs: ["Boutique Experience", "Signature Brew Bar"]
    },
    {
        name: "BAIC Tower",
        address: "BAIC Tower, Central Jakarta",
        image: "/roemah_koffie_assets/RK_BAIC_Tower4-1.webp",
        specs: ["Corporate Sanctuary", "Quick Service"]
    },
    {
        name: "Gunawarman",
        address: "Jl. Gunawarman No. 4, Kebayoran Baru, South Jakarta",
        image: "/roemah_koffie_assets/RK_GUNS4.webp",
        specs: ["Heritage Concept", "Artisanal Roastery"]
    },
    {
        name: "PIK 2",
        address: "Pantai Indah Kapuk 2, North Jakarta",
        image: "/roemah_koffie_assets/RK_PIK2.webp",
        specs: ["Coastal Retreat", "Outdoor Seating"]
    },
    {
        name: "Puri Indah Mall 2",
        address: "Puri Indah Mall 2, West Jakarta",
        image: "/roemah_koffie_assets/RK_Puri_2.webp",
        specs: ["Premium Retail", "Family Friendly"]
    },
    {
        name: "T.B. Simatupang",
        address: "BMW Motorrad, Jl. T.B. Simatupang, South Jakarta",
        image: "/roemah_koffie_assets/RK_BMW-web.webp",
        specs: ["Technical Duo", "Fast Pace"]
    }
];

export default function LocationsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-rk-cream">
            <Navbar />

            <main className="flex-grow pt-32 pb-24">
                {/* Header (Quiet Luxury) */}
                <div className="container mx-auto px-6 mb-20 text-center space-y-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-rk-primary">Our Boutiques</span>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none">
                        Find Your <br />
                        <span className="italic font-light">Sanctuary.</span>
                    </h1>
                    <p className="font-sans text-sm md:text-base text-rk-textSecondary max-w-xl mx-auto opacity-70">
                        Each Roemah Koffie location is a curated archive of Indonesian heritage, designed to provide a moment of stillness in the tectonic shifts of the city.
                    </p>
                </div>

                {/* Locations Grid (Onyx Style Technical Grid) */}
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-rk-border">
                    {LOCATIONS.map((loc) => (
                        <article key={loc.name} className="group border-r border-b border-rk-border bg-white hover:bg-rk-cream/30 transition-all duration-700">
                            {/* Boutique Image */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={loc.image}
                                    alt={loc.name}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
                            </div>

                            {/* Boutique Data */}
                            <div className="p-8 space-y-6">
                                <div className="space-y-2">
                                    <h2 className="font-serif text-3xl text-rk-brownDark">{loc.name}</h2>
                                    <p className="font-sans text-xs text-rk-textSecondary leading-relaxed min-h-[3rem]">
                                        {loc.address}
                                    </p>
                                </div>

                                <div className="space-y-3 pt-6 border-t border-rk-border/50">
                                    <span className="block font-mono text-[9px] uppercase tracking-widest text-rk-muted">Capabilities</span>
                                    <div className="flex flex-wrap gap-2">
                                        {loc.specs.map(spec => (
                                            <span key={spec} className="px-3 py-1 border border-rk-border text-[9px] font-mono uppercase tracking-tighter text-rk-textMain bg-rk-offWhite/50">
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <button className="w-full mt-6 py-4 bg-rk-brownDark text-rk-white font-mono text-[10px] uppercase tracking-widest hover:bg-rk-primary transition-all duration-300">
                                    View Detail Specs // Directions
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </main>

            {/* Footer Insight */}
            <footer className="w-full bg-rk-brownDark text-rk-cream py-16 border-t border-rk-border/10 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="font-serif text-3xl tracking-tighter mb-4">
                        Roemah<span className="font-light italic">Koffie</span>
                    </h2>
                    <p className="font-mono text-[9px] uppercase tracking-[0.5em] opacity-30">
                        © 2026 PRECISE ORIGIN TRACEABILITY.
                    </p>
                </div>
            </footer>
        </div>
    );
}
