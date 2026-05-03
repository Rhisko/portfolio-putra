/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 45px rgba(34, 211, 238, 0.18)",
        violetGlow: "0 0 45px rgba(139, 92, 246, 0.18)",
        card: "0 20px 60px rgba(15, 23, 42, 0.08)",
        cardHover: "0 24px 70px rgba(8, 145, 178, 0.14)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
