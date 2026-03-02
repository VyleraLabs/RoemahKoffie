import Image from "next/image";
import Link from "next/link";

const Merchandise = () => {
    return (
        <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-rk-brownDark">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/roemah_koffie_assets/MERCHANDISE_BANNER.webp"
                    alt="Roemah Koffie Merchandise"
                    fill
                    className="object-cover opacity-60 hover:opacity-80 transition-opacity duration-1000"
                    sizes="100vw"
                />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col items-center text-center p-8 bg-black/30 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl max-w-2xl mx-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-rk-primary mb-4">
                    Wear The Legacy
                </span>
                <h2 className="font-serif text-4xl md:text-6xl text-rk-cream mb-6 drop-shadow-md">
                    Exclusive Merchandise
                </h2>
                <p className="font-sans text-sm tracking-widest uppercase opacity-80 text-rk-cream mb-10 max-w-md leading-relaxed">
                    Apparel and accessories crafted with the same precision and origin traceability as our coffee.
                </p>

                <Link
                    href="/#catalogue" // Assuming a section or page for merch catalogue
                    className="group relative px-10 py-5 bg-rk-white text-rk-brownDark font-mono text-[10px] uppercase tracking-[0.3em] overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-rk-white">Shop Collection</span>
                    <div className="absolute inset-0 bg-rk-primary translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                </Link>
            </div>
        </section>
    );
};

export default Merchandise;
