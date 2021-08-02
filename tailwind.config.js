module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "nice-lion-orange": "#ffa052",
        "nice-lion-black": "#231f1b",
        "slate-gray": "#628395"
      },
      fontFamily: {
        body: ["Comfortaa"]
      },
      keyframes: {
        'up-down': {
            '0%': {
              transform: 'translateY(10px)'
            },
            '100%': {
              transform: "translateY(-10px)"
            }
        }
      },
      animation: {
        'up-down': 'up-down 2s ease-in-out infinite alternate-reverse both'
      }
      
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
