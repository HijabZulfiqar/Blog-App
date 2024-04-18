/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      height: {
        'screen-minus-100': 'calc(100vh - 100px)',
      },
      colors: {
        'custom-bg': 'var(--bg)', // Using CSS variable
        'custom-text': 'var(--textColor)', // Using CSS variable
        'custom-soft-bg': 'var(--softBg)', // Using CSS variable
        'custom-soft-text': 'var(--softTextColor)', // Using CSS variable
        
      },
      maxWidth: {
        '1536': '1536px', 
        '1366': '1366px', // Adding a custom maxWidth for screens up to 1536px
        '1024': '1024px', // Adding a custom maxWidth for screens up to 1280px
        '768': '768px', // Adding a custom maxWidth for screens up to 1024px
        '640': '640px', // Adding a custom maxWidth for screens up to 768px
        '475': '475px', // Adding a custom maxWidth for screens up to 640px
      },
      padding: {
        '80': '80px', // Adding padding of 80px
        '40': '40px', // Adding padding of 40px
      },
    },
  },
  plugins: [],
};
