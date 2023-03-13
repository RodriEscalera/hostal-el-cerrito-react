const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#F5F5BF",
        color2: "#098ACE",
        color3: "#0061A9",
        color4: "#97C7DE",
        background: "#F5F5F5",
        darkness: "rgba(black, 1);",
      },
      fontFamily: {
        roboto: ["roboto"],
      },
    },
  },
  plugins: [],
});

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         color1: "#F5F5BF",
//         color2: "#098ACE",
//         color3: "#0061A9",
//         color4: "#97C7DE",
//         background: "#F5F5F5",
//         darkness: "rgba(black, 1);",
//       },
//       fontFamily: {
//         roboto: ["roboto"],
//       },
//     },
//   },
//   plugins: [],
// };
