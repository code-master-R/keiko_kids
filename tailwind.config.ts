import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // This creates a new utility class, e.g., `font-sans`
                sans: ['var(--font-poppins)'],
                // This creates a new utility class, e.g., `font-logo`
                logo: ['var(--font-hidden-cocktails)'],
            },
        },
    },
    plugins: [],
};
export default config;
