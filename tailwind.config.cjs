const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        cstm: {
          primary: {
            'desaturated-dark-cyan': 'hsl(180, 29%, 50%)',
          },
          neutral: {
            'light-grayish-cyan-bg': 'hsl(180, 52%, 96%)',
            'light-grayish-cyan-fltr': 'hsl(180, 31%, 95%)',
            'dark-grayish-cyan': 'hsl(180, 8%, 52%)',
            'very-dark-grayish-cyan': 'hsl(180, 14%, 20%)',
          },
        },
      },
      fontFamily: {
        spartan: ['Spartan', 'sans-serif'],
      },
    },
  },

  plugins: [],
}

module.exports = config
