/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: 0,

          },
          '100%': {
            opacity: 1,
          },
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"]
      },
      colors: {
        primary: "var(--primary)",

        secondary: "var(--secondary-1)",
        darkBackgroundColor: "var(--dark-background-color)",
        lightBackgroundColor: "var(--light-background-color)",
        succesColor: "var(--success-color)",
        alertColor: "var(--alert-color)",
        dangerColor: "var(--danger-color)",
        hoverColor: "var(--hover-color)",
        mutedColor: "var(--muted-color)",
        lightGray1: "var(--light-gray-1)",
        lightGray2: "var(--light-gray-2)",
        primaryTextColor: "var(--primary-text-color)",
        secondaryTextColor: "var(--secondary-text-color-1)",
        secondaryTextColor2: "var(--secondary-text-color-2)",
        textColor: "var(--text-color)",
        secondTextColor: "var(--second-text-color)",
        lightTextColor: "var(--light-text-color)",
        succesTextColor: "var(--success-text-color)",
        alertTextColor: "var(--alert-text-color)",
        dangerTextColor: "var(--danger-text-color)",
        hoverTextColor: "var(--hover-text-color)",
        disabledElementTextColor: "var(--disabled-element-text-color)",
        mutedTextColor: "var(--muted-text-color)",
        lightTextGray1: "var(--light-text-gray-1)",
        lightTextGray2: "var(--light-text-gray-2)",
        fadedPrimaryColor: "var(--faded-primary-color)",
        fadedSecondaryColor1: "var(--faded-secondary-color-1)",
        fadedSecondaryColor2: "var(--faded-secondary-color-2)",
        lightBackground: "var(--light-background)",

      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}