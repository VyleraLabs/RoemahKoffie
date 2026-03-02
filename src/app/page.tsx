import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Heritage from "@/components/Heritage";
import ProductShowcase from "@/components/ProductShowcase";
import Merchandise from "@/components/Merchandise";
import CoffeeAcademy from "@/components/CoffeeAcademy";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main>
        {/* 
          The Hero Section 
          (Kettmeir aesthetic: Expansive, clean, botanical storytelling)
        */}
        <Hero />

        {/* 
          The Heritage/Story Section 
          (Hendrick's Gin aesthetic: Textural depth, mystery, heritage)
        */}
        <Heritage />

        {/* Merchandise Section */}
        <Merchandise />

        {/* 
          The Product Showcase Section 
          (Onyx Coffee Lab aesthetic: Technical, brutalist, data-driven)
        */}
        <ProductShowcase />

        {/* Coffee Academy Section */}
        <CoffeeAcademy />
      </main>

      {/* Premium Footer */}
      <footer className="w-full bg-rk-brownDark text-rk-cream py-32 border-t border-rk-border/10">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-3xl tracking-tighter mb-6">
              Roemah<span className="font-light italic">Koffie</span>
            </h2>
            <p className="font-sans text-xs tracking-widest uppercase opacity-40 max-w-sm leading-relaxed">
              Curating Indonesia&apos;s finest harvests since 1928. From the volcanic soils of Sumatra to the highlands of Papua.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-rk-primary mb-8">Navigation</h4>
            <ul className="space-y-4 font-sans text-xs uppercase tracking-widest opacity-60">
              <li><Link href="/#heritage" className="hover:text-rk-primary transition-colors">Our Story</Link></li>
              <li><Link href="/#catalogue" className="hover:text-rk-primary transition-colors">Catalogue</Link></li>
              <li><Link href="/locations" className="hover:text-rk-primary transition-colors">Locations</Link></li>
              <li><Link href="/#journal" className="hover:text-rk-primary transition-colors">Journal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-rk-primary mb-8">Connect</h4>
            <ul className="space-y-4 font-sans text-xs uppercase tracking-widest opacity-60">
              <li><a href="#" className="hover:text-rk-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-rk-primary transition-colors">Twitter (X)</a></li>
              <li><a href="#" className="hover:text-rk-primary transition-colors">Wholesale</a></li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-mono text-[9px] tracking-[0.3em] uppercase opacity-30" suppressHydrationWarning>
            © {new Date().getFullYear()} Roemah Koffie Collective. PRECISE ORIGIN TRACEABILITY.
          </p>
          <div className="flex gap-12 font-mono text-[8px] uppercase tracking-[0.4em] opacity-20">
            <span>Privacy Policy</span>
            <span>Terms of Origin</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
