/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      boxShadow: {
        default:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        breadcrumbs: "inset #171717 0px 0px 50px -6px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "var(--color-background)",
        "background-searchbar": "var(--color-background-searchbar)",
        red: {
          light: "var(--color-primary-red-light)",
          DEFAULT: "var(--color-primary-red)",
          dark: "var(--color-primary-red-dark)",
        },
        blue: {
          light: "var(--color-primary-blue-light)",
          DEFAULT: "var(--color-primary-blue)",
          dark: "var(--color-primary-blue-dark)",
        },
        yellow: {
          light: "var(--color-primary-yellow-light)",
          DEFAULT: "var(--color-primary-yellow)",
          dark: "var(--color-primary-yellow-dark)",
        },
        // These colors are for testing purposes only:
        purple: {
          light: "var(--color-primary-purple-light)",
          DEFAULT: "var(--color-primary-purple)",
          dark: "var(--color-primary-purple-dark)",
        },
        green: {
          light: "var(--color-primary-green-light)",
          DEFAULT: "var(--color-primary-green)",
          dark: "var(--color-primary-green-dark)",
        },
        orange: {
          light: "var(--color-primary-orange-light)",
          DEFAULT: "var(--color-primary-orange)",
          dark: "var(--color-primary-orange-dark)",
        },
        teal: {
          light: "var(--color-primary-teal-light)",
          DEFAULT: "var(--color-primary-teal)",
          dark: "var(--color-primary-teal-dark)",
        },
        brown: {
          light: "var(--color-primary-brown-light)",
          DEFAULT: "var(--color-primary-brown)",
          dark: "var(--color-primary-brown-dark)",
        },
        pink: {
          light: "var(--color-primary-pink-light)",
          DEFAULT: "var(--color-primary-pink)",
          dark: "var(--color-primary-pink-dark)",
        },
        indigo: {
          light: "var(--color-primary-indigo-light)",
          DEFAULT: "var(--color-primary-indigo)",
          dark: "var(--color-primary-indigo-dark)",
        },
        offwhite: {
          light: "var(--color-primary-offwhite-light)",
          DEFAULT: "var(--color-primary-offwhite)",
          dark: "var(--color-primary-offwhite-dark)",
        },
        tablegray: {
          light: "var(--color-primary-tablegray-light)",
          DEFAULT: "var(--color-primary-tablegray)",
          dark: "var(--color-primary-tablegray-dark)",
        },
        dropicongray: {
          light: "var(--color-primary-dropicongray-light)",
          DEFAULT: "var(--color-primary-dropicongray)",
          dark: "var(--color-primary-dropicongray-dark)",
        },
        dividergray: {
          light: "var(--color-primary-dividergray-light)",
          DEFAULT: "var(--color-primary-dividergray)",
          dark: "var(--color-primary-dividergray-dark)",
        },
      },
      fontSize: {
        h1: [
        // 40px
          "2.5rem",
          {
            lineHeight: "3.125rem",
            fontWeight: "500",
          },
        ],
        h2: [
          "3.5rem",
          {
            lineHeight: "4.2rem",
            fontWeight: "500",
          },
        ],
        h3: [
          "2.75rem",
          {
            lineHeight: "3.4375rem",
            fontWeight: "500",
          },
        ],
        h4: [
          "2.125rem",
          {
            lineHeight: "2.7625rem",
            fontWeight: "500",
          },
        ],
        h5: [
          "1.5rem",
          {
            lineHeight: "2.1rem",
            fontWeight: "500",
          },
        ],
        h6: [
          "1.25rem",
          {
            lineHeight: "1.875rem",
            fontWeight: "500",
          },
        ],
      },
      spacing: {
        21: "5.25rem",
        22: "5.5rem",
        100: "26rem",
      },
      maxWidth: {
        "700px": "700px",
      },
      width: {
        triangle: "200px",
        "stacked-image-default": "280px",
        "stacked-image-md": "291.2px",
      },
      height: {
        triangle: "173px",
        "triangle-md": "246.25px",
        "triangle-lg": "276.8px",
        "triangle-xl": "346px",
        128: "32rem", // 512px
        144: "36rem", // 576px
        160: "40rem", // 640px
        176: "44rem", // 704px
        192: "48rem", // 768px
        484: "484px", // 484px
        488: "488px", // 488px
        508: "508px", // 508px
        539: "539px",
      },
      scale: {
        140: "1.40",
        142: "1.425",
        160: "1.60",
        175: "1.75",
        190: "1.90",
        200: "2.0",
      },
      backgroundSize: {
        0: "0 0",
      },
    },
  },
  plugins: [],
};
