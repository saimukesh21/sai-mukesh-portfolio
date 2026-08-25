/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#060a10",
        panel: "#0d1520",
        line: "rgba(148, 197, 220, 0.12)",
        signal: "#45e0b8",
        alert: "#f5a623",
        ink: "#e7eef3",
        mute: "#8ea0b3"
      },
      fontFamily: {
        display: ["\"Space Grotesk\"", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["\"JetBrains Mono\"", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      keyframes: {
        pulse_dot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" }
        }
      },
      animation: {
        pulse_dot: "pulse_dot 2.4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
