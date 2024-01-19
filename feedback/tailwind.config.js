/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-sug": "url(.../assets/shared/desktop/._background-header.png)",
        "tablet-sug": "url(.../assets/shared/tablet/._background-header.png)",
        "mobile-sug": "url(.../assets/shared/mobile/._background-header.png)",
      },
      colors: {
        primary: "#F2F4FF",
        secondary: "#FFFFFF",
        tags: "#4661E6",
        tagsback: "#F2F4FF",
        all: " #4661E6",
        header: " #373F68",

        //radial gradient
        "radial-gradient":
          "radial-gradient(background: radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */)",
      },
    },
  },
  plugins: [],
};
