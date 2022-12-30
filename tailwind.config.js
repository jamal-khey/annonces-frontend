/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          themePrimary: "#068179",
          themePrimaryLighter: "#E6F2F2",
          themeSecondary: "#F27125",
          themeGreenLight: "#3EA875",
          themeWhiteLow: "#66737F",
          themeWhiteLight: "#F7F8F9",
          themeWhiteLighter: "#5D6D7E",
          themeGrayBorder: "#EBEDEF",
          themeGray: "#AEB6BF",
          themeGrayLight: "#D6DBDF",
          themeGrayDarker: "#06648156",
          themeBlack: "#283746",
          themeBlackDarker: "#1A2B3A",
          themeBlackLighter: "#E7E9EE",
          themeBlackAlt: "#001324",
          themeRedLight: "#FF4040",
          themeYellowLight: "#FF9900",
          themeGrayWhite: "#85929E",
          themeWhiteAlt: "#9CA3AF",
          footerBorder: "#ffffff33",
        },
        boxShadow: {
          boxShadow: "0px 3px 6px rgba(0, 119, 111, 0.08)",
          sectionShadow: "0px 6px 24px rgba(6, 129, 121, 0.08)",
          card: "0px 20px 32px -8px rgba(6, 129, 121, 0.16)",
          owlCard: "0px 6px 12px -4px rgba(6, 129, 121, 0.1)",
          searchShadow: "0px 12px 32px -6px rgba(0, 119, 111, 0.2)",
          filterShadow: "0px 2px 6px rgba(6, 129, 121, 0.08)",
          frontShadow: " 0px 24px 24px -12px rgba(6, 129, 121, 0.12)",
        },
      },
      container: {
        screens: {
          "sm": "640px",
          "md": "768px",
          "lg": "1024px",
          "xl": "1280px",
          "2xl": "1350px",
        },
      },
    },
    plugins: [],
  }