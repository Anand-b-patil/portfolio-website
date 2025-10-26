/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'base': '16px',    // body text
        'lg': '18px',      // slightly larger body / captions
        'xl': '20px',      // subheadings
        '2xl': '24px',     // section subtitles
        '4xl': '36px',     // section titles
        '6xl': '64px'      // hero / main headings
      }
    }
  },
  plugins: []
}
