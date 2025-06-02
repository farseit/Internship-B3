/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // theme: {
  //   extend: {
  //     fontFamily: {
  //       oswald: ["var(--font-oswald)"],
  //       lato: ["var(--font-lato)"],
  //     },
  //     backgroundImage: {
  //       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
  //       "gradient-conic":
  //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  //     },
  //     keyframes: {
  //       fadeInUp: {
  //         "0%": { transform: "translateY(20px)", opacity: 0 },
  //         "100%": { transform: "rtranslateY(0px)", opacity: 1 },
  //       },
  //     },
  //     animation: {
  //       fadeInUp: "fadeInUp 0.3s ease-in-out",
  //     },
  //     backgroundColor: {
  //       primary: "#192a56",
  //       secondary: "#273c75",
  //     },
  //     textColor: {
  //       secondary: "#273c75",
  //     },
  //   },
  // },
  //New theme added by Roman
  darkMode: "class", //add for control the mode [dark,light]
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#192a56",
        secondary: "#273c75",
        textPrimary: "#000000",
        textSecondary: "#273c75",
      },
    },
  },
  plugins: [],
};
