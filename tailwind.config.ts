import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#ffffff",
                foreground: "#1a0f0a",
                rk: {
                    primary: "#84161b",    // The "Roemah Koffie" Red
                    primaryDark: "#5a0f12",
                    white: "#ffffff",
                    cream: "#fffdfa",      // Heritage Cream (Kettmeir)
                    offWhite: "#f6f6f6",
                    slate: "#f1f5f9",
                    border: "#d1d5db",
                    brownDark: "#1a0f0a",  // Espresso Dark
                    textMain: "#1a0f0a",
                    textSecondary: "#4b5563",
                    textMuted: "#9ca3af",
                    gold: "#c5a45d",       // Accent Gold
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
                serif: ["var(--font-playfair)", "serif"],
                mono: ["var(--font-roboto-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
            },
            backgroundImage: {
                'espresso-texture': "url('/roemah_koffie_assets/BACKGROUND_ESPRESSO_JOURNEY.png')",
                'macrame-texture': "url('/roemah_koffie_assets/BACKGROUND_MACRAME.png')",
                'leather-texture': "url('/roemah_koffie_assets/BACKGROUND_LEATHER.png')",
            },
            animation: {
                'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'reveal': 'reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                reveal: {
                    '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
                    '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
                }
            }
        },
    },
    plugins: [],
};
export default config;
