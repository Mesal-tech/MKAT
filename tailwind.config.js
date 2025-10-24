/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      heading: ['"Cubao Free Wide"', 'sans-serif'],
      body: ['"Arial Nova"', 'sans-serif'],
    },
  },
  plugins: [],
};
