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

                blink: {
                    "0%": {
                        opacity: 1,
                    },
                    "50%": {
                        opacity: 0,
                    },
                    "100%": {
                        opacity: 1,
                    },
                },
            },
            animation: {
                "open-menu": "open-menu 0.5s ease-in-out forwards",
                blink: "blink 2s infinite ease-in-out",
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
