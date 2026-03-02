import Image from "next/image";
import Link from "next/link";

const CoffeeAcademy = () => {
    return (
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-rk-brownDark">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/roemah_koffie_assets/landscape_of_coffee_and_barista.webp"
                    alt="Roemah Koffie Academy"
                    fill
                    className="object-cover opacity-70 scale-105 hover:scale-100 transition-transform duration-[2000ms]"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rk-brownDark via-transparent to-rk-brownDark/50 mix-blend-multiply" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col flex-end text-center items-center justify-end h-full pb-32 px-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-rk-primary mb-6 animate-pulse">
                    The Art of Extraction
                </span>
                <h2 className="font-serif text-5xl md:text-7xl text-rk-cream mb-8 drop-shadow-2xl">
                    Koffie Academy
                </h2>
                <p className="font-sans text-xs tracking-widest uppercase opacity-80 text-rk-cream mb-12 max-w-xl leading-relaxed text-center shadow-black drop-shadow-lg">
                    Master the craftsmanship behind every cup. Join our expert baristas and roasters for immersive workshops delving into Indonesian soil, harvesting techniques, and sensory evaluation.
                </p>

                <Link
                    href="/academy" // Placeholder link for academy page
                    className="group relative px-12 py-6 border border-rk-cream/30 bg-transparent text-rk-cream font-mono text-[11px] uppercase tracking-[0.4em] overflow-hidden transition-all duration-700 hover:border-rk-primary"
                >
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-rk-brownDark">Discover Workshops</span>
                    <div className="absolute inset-0 bg-rk-primary translate-x-[-100%] transition-transform duration-700 ease-out group-hover:translate-x-0" />
                </Link>
            </div>
        </section>
    );
};

export default CoffeeAcademy;
