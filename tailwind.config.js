/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // config lại tailwind để mặc định trở thành desktop first
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) {...}

        xl: { max: "1279px", min: "993px" },
        // => @media (max-width: 1279px) {...}

        lg: { max: "992px", min: "768px" },
        // => @media (max-width: 992px) {...}

        md: { max: "767px" },
        // => @media (max-width: 767px) {...}

        md: { max: "639px" },
        // => @media (max-width: 639px) {...}
      },
    },
  },
  plugins: [],
};
