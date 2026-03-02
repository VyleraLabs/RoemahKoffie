"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const FloatingDecorators = () => {
    const [scrollY, setScrollY] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Define decorator positions based on typical page height
    // In a real app, these could be randomized or mapped to specific sections
    const decorators = [
        // Butterflies
        { src: "/roemah_koffie_assets/kupu-besar-hitam.XGjmTB0_.svg", top: "120vh", left: "5%", speedX: 0.1, speedY: -0.3, scale: 0.3 },
        { src: "/roemah_koffie_assets/kupu-kecil-hitam.DeXO39xv.svg", top: "250vh", right: "15%", speedX: -0.2, speedY: -0.5, scale: 0.2 },
        { src: "/roemah_koffie_assets/kupu-kecil-kanan-hitam.CUEGKd7x.svg", top: "380vh", left: "20%", speedX: 0.15, speedY: -0.3, scale: 0.25 },
        { src: "/roemah_koffie_assets/kupu-besar-hitam.XGjmTB0_.svg", top: "520vh", right: "10%", speedX: -0.1, speedY: -0.6, scale: 0.4 },
        { src: "/roemah_koffie_assets/kupu-kecil-hitam.DeXO39xv.svg", top: "680vh", left: "8%", speedX: 0.25, speedY: -0.2, scale: 0.2 },
        { src: "/roemah_koffie_assets/kupu-kecil-kanan-hitam.CUEGKd7x.svg", top: "800vh", right: "25%", speedX: -0.15, speedY: -0.4, scale: 0.3 },

        // Animals
        { src: "/roemah_koffie_assets/kuda_pelana.png", top: "280vh", left: "-5%", speedX: 0.3, speedY: 0, scale: 0.5 },
        { src: "/roemah_koffie_assets/ikan.png", top: "450vh", right: "-10%", speedX: -0.4, speedY: -0.1, scale: 0.4 },
        { src: "/roemah_koffie_assets/harimau.EoQPHTJG.png", top: "650vh", left: "-5%", speedX: 0.25, speedY: 0, scale: 0.6 },
    ];

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-50 overflow-hidden">
            {decorators.map((dec, i) => (
                <div
                    key={i}
                    className="absolute"
                    style={{
                        top: dec.top,
                        left: dec.left || "auto",
                        right: dec.right || "auto",
                        transform: `translate(${scrollY * dec.speedX}px, ${scrollY * dec.speedY}px) scale(${dec.scale})`,
                        transition: "transform 0.1s linear",
                        opacity: 0.8, // Slightly more visible
                    }}
                >
                    <Image
                        src={dec.src}
                        alt=""
                        width={200} // Base size reduced for performance optimization
                        height={200}
                        className="object-contain"
                    />
                </div>
            ))}
        </div>
    );
};

export default FloatingDecorators;
