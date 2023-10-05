/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                blackcurrant: "#150e28",
                veronica: "903aff",
                psychedelicPurple: "d434fe",
            },

            keyframes: {
                "open-menu": {
                    "0%": { transform: "scaleY(0)" },
                    "80%": { transform: "scaleY(1.2)" },
                    "100%": { transform: "scaleY(1)" },
                },
            },
            animation: {
                "open-menu": "open-menu 0.5s ease-in-out forwards",
            },
        },

        fontFamily: {
            montserrat: ["Montserrat", "sans-serif"],
            clashDisplay: ["ClashDisplay", "sans-serif"],
            unica: ["Unica One", "cursive"],
        },
    },
    plugins: [],
};
