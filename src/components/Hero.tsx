"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
    const [scrollY, setScrollY] = useState(0);
    const [vh, setVh] = useState(0);
    const [vw, setVw] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        const handleResize = () => {
            setVh(window.innerHeight);
            setVw(window.innerWidth);
        };

        setVh(window.innerHeight);
        setVw(window.innerWidth);
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const safeVh = vh || 1000;
    const isMobile = vw > 0 && vw < 768;

    // Reveal Logic (Extended Runway for "Forced" Animation feel)
    // 0 to 1 progress over 3.5 viewports
    const revealProgress = Math.min(1, scrollY / (safeVh * 3.5));
    const blurAmount = revealProgress * 12;
    const convergeProgress = revealProgress; // 0 to 1

    return (
        <section className="relative h-[500vh] w-full flex flex-col items-center bg-rk-cream">
            {/* Sticky Hero Container */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-rk-cream">
                {/* Base Background Image with Dynamic Blur */}
                <div
                    className="absolute inset-0 z-0 transition-all duration-300"
                    style={{
                        transform: `scale(${1 + revealProgress * 0.05})`,
                        filter: `blur(${blurAmount}px) brightness(${0.8 - revealProgress * 0.3})`,
                    }}
                >
                    <Image
                        src="/roemah_koffie_assets/16_9_landscape_rambadia__1_.webp"
                        alt="Atmospheric coffee farm landscape"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />

                    {/* Texture Overlay */}
                    <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay">
                        <Image
                            src="/roemah_koffie_assets/BACKGROUND_MACRAME.webp"
                            alt="Texture"
                            fill
                            sizes="100vw"
                            className="object-cover"
                            quality={60}
                        />
                    </div>
                </div>

                {/* Tin Can Reveal Layer */}
                <div
                    className="absolute z-10 w-[300px] md:w-[500px] h-auto pointer-events-none transition-all duration-700 ease-out left-[50%] top-[50%]"
                    style={{
                        // Anchor reliably in the vertical center of the screen, shifted left into the gap.
                        // It starts higher and drops precisely into calc(-50%, -50%) as the user scrolls.
                        // Extensively adjust scaling and X-shift for mobile vs desktop
                        transform: `translate(calc(-50% - ${isMobile ? 22 : 13}vw), calc(-50% + ${-(vh * 3.5) * 0.04 + Math.min(scrollY, vh * 3.5) * 0.04}px)) scale(${isMobile ? 0.15 + revealProgress * 0.15 : 0.25 + revealProgress * 0.25})`,
                        opacity: revealProgress,
                    }}
                >
                    <Image
                        src="/roemah_koffie_assets/logo_all58099a.webp"
                        alt="Roemah Koffie Logo"
                        width={600}
                        height={600}
                        priority
                        className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    />
                </div>

                {/* Parallax Elements Layer (Clouds & Becaks) */}
                <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
                    <div
                        className="absolute top-[10%] left-[-15%] w-[600px] h-[300px]"
                        style={{ transform: `translateX(${-scrollY * (vh / 600)}px)` }}
                    >
                        <Image src="/roemah_koffie_assets/awan.webp" alt="" fill sizes="(max-width: 768px) 300px, 600px" className="object-contain" />
                    </div>

                    {/* Raised Becak to avoid "Exploring the World" text clash */}
                    <div
                        className="absolute top-[10%] right-[10%] w-[220px] h-[180px]"
                        style={{ transform: `translateX(${-scrollY * (vh / 1500)}px)` }}
                    >
                        <Image src="/roemah_koffie_assets/becak.webp" alt="" fill sizes="(max-width: 768px) 150px, 220px" className="object-contain" />
                    </div>

                    <div
                        className="absolute top-[50%] right-[-10%] w-[400px] h-[200px]"
                        style={{ transform: `translateX(${scrollY * (vh / 700)}px)` }}
                    >
                        <Image src="/roemah_koffie_assets/awan_kecil.webp" alt="" fill sizes="(max-width: 768px) 200px, 400px" className="object-contain" />
                    </div>
                </div>

                {/* Converging Mosaic Text Layer */}
                <div className="container relative z-30 mx-auto px-6 h-full flex items-center justify-center pointer-events-none">
                    <div className="relative w-full max-w-5xl h-[80%] flex flex-col justify-between py-24">

                        {/* "Cultivating" - Converges to Top Left */}
                        <div
                            className="self-start transition-all duration-300"
                            style={{
                                transform: `translate(${(1 - convergeProgress) * -300}px, ${(1 - convergeProgress) * -100}px)`,
                                opacity: convergeProgress
                            }}
                        >
                            <h2 className="font-serif text-5xl md:text-8xl lg:text-9xl text-rk-cream tracking-tighter drop-shadow-[0_8px_32px_rgba(0,0,0,0.7)]">
                                Cultivating
                            </h2>
                        </div>

                        {/* "The Fine" - Converges to Middle Right (Framing the Can) */}
                        <div
                            className="self-end transition-all duration-300 mr-[5%]"
                            style={{
                                transform: `translateX(${(1 - convergeProgress) * 500}px)`,
                                opacity: convergeProgress
                            }}
                        >
                            <h2 className="font-serif text-5xl md:text-8xl lg:text-9xl italic font-light text-rk-cream tracking-tight drop-shadow-[0_8px_32px_rgba(0,0,0,0.7)]">
                                The Fine
                            </h2>
                        </div>

                        {/* "Indonesian Soil." - Converges to Bottom Left */}
                        <div
                            className="self-start transition-all duration-300 mt-4"
                            style={{
                                transform: `translate(${(1 - convergeProgress) * -200}px, ${(1 - convergeProgress) * 200}px)`,
                                opacity: convergeProgress
                            }}
                        >
                            <h2 className="font-serif text-5xl md:text-8xl lg:text-9xl text-rk-cream tracking-tighter drop-shadow-[0_8px_32px_rgba(0,0,0,0.7)]">
                                Indonesian Soil.
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Content Overlay Revealed at the End */}
                <div
                    className="absolute bottom-0 z-40 flex flex-col md:flex-row gap-10 items-center transition-all duration-1000 p-6 md:p-8 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 shadow-2xl"
                    style={{
                        opacity: revealProgress > 0.9 ? 1 : 0,
                        transform: `translateY(${30 - revealProgress * 30}px)`
                    }}
                >
                    <Link href="/locations" className="group relative px-12 py-6 bg-rk-brownDark text-rk-white font-mono text-[11px] uppercase tracking-[0.5em] overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] block">
                        <span className="relative z-10">Launch The Experience</span>
                        <div className="absolute inset-0 bg-rk-primary translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                    </Link>
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-rk-cream/80">1928 Legacy</span>
                        <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-rk-cream border-b border-rk-cream/30 pb-1">
                            [ Cultivating through Culture ]
                        </span>
                    </div>
                </div>

                {/* Hint for interaction */}
                <div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 transition-opacity duration-500"
                    style={{ opacity: scrollY > 100 ? 0 : 1 }}
                >
                    <div className="w-[1px] h-10 bg-white/30" />
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/50 animate-pulse">Scramble To Reveal</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
