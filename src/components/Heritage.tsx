"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Heritage() {
    const [scrollY, setScrollY] = useState(0);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setScrollY(rect.top);
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            ref={containerRef}
            id="heritage"
            className="relative w-full py-40 md:py-64 bg-rk-brownDark overflow-hidden text-rk-cream"
        >
            {/* Parallax Texture (Hendrick's Style) */}
            <div
                className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-overlay"
                style={{
                    transform: `translateY(${scrollY * 0.1}px)`
                }}
            >
                <Image
                    src="/roemah_koffie_assets/Untitled_design__21_1c4f8c.png"
                    alt="Heritage Texture"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    quality={60}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                    {/* Story Content (Kettmeir Quiet Luxury) */}
                    <div className="space-y-12 max-w-xl">
                        <header className="space-y-4">
                            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-rk-gold block">The Heritage Selection</span>
                            <h2 className="font-serif text-4xl md:text-6xl leading-[1.1]">
                                A Legacy Steeped <br />
                                <span className="italic font-light">In Indonesian</span> <br />
                                Craftsmanship.
                            </h2>
                        </header>

                        <div className="space-y-8 font-serif text-lg md:text-xl leading-relaxed opacity-90 font-light">
                            <p>
                                Since 1928, Roemah Koffie has stood as a guardian of the archipelago&apos;s most exquisite flavors. We believe coffee is not merely a beverage, but a vessel for storytelling—a bridge between the volcanic soils of Sumatra and the refined palates of the world.
                            </p>
                            <p>
                                Every bean is treated with a technical reverence, ensuring the delicate notes of chocolate, jasmine, and peat are preserved with absolute fidelity.
                            </p>
                        </div>

                        <div className="pt-8">
                            <button className="group flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-rk-gold">
                                <span>Discover the Journey</span>
                                <div className="w-12 h-[1px] bg-rk-gold transition-all duration-500 group-hover:w-20" />
                            </button>
                        </div>
                    </div>

                    {/* Feature Visual */}
                    <div className="relative group">
                        {/* Elegant Frame Layer */}
                        <div className="absolute -inset-4 border border-rk-gold/20 scale-95 group-hover:scale-100 transition-transform duration-1000 ease-out" />

                        <div className="relative aspect-[4/5] w-full overflow-hidden">
                            <Image
                                src="/roemah_koffie_assets/Copy_of_Roemah_Koffie_day1_Freehand-1302e2513d3b4ca.jpg"
                                alt="Artisanal coffee preparation"
                                fill
                                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Subtle technical overlay (Onyx Style) */}
                            <div className="absolute top-8 right-8 writing-vertical font-mono text-[9px] uppercase tracking-widest opacity-40">
                                Process Ref: RK-H-451 // Roastery Batch
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
        </section>
    );
}
