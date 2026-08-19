/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors: {
        rentags: {
          green: "#173F2D",
          deep: "#0E2B20",
          mint: "#E8F3EC",
          white: "#FFFFFF",
          sage: "#B9D5C1",
          success: "#2C7A4E",
          ink: "#183229",
          muted: "#617169",
          line: "#DCE7DF"
        }
      },
      borderRadius: {
        xs: "0.375rem",
        sm: "0.625rem",
        DEFAULT: "0.875rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "1.75rem",
        "3xl": "2.25rem",
        card: "1.75rem",
        modal: "2rem",
        full: "9999px",
        pill: "9999px"
      },
      fontFamily: {
        display: ["Nunito Sans", "Arial Rounded MT Bold", "sans-serif"],
        sans: ["DM Sans", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        app: "0 24px 70px rgba(14, 43, 32, 0.16)",
        card: "0 14px 38px rgba(14, 43, 32, 0.09)",
        green: "0 14px 32px rgba(23, 63, 45, 0.25)"
      }
    }
  },
  plugins: []
};
