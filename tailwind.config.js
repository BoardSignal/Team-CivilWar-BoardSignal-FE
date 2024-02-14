/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          "darken": 'var(--primary-darken)',
          "lighten": 'var(--primary-lighten)',
          "lighter": 'var(--primary-lighter)',
        },
        "accent1": 'var(--accent-1)',
        "accent2": 'var(--accent-2)',
        "accent3": 'var(--accent-3)',
        "accent4": 'var(--accent-4)',
        "accent5": 'var(--accent-5)',
        "accent6": 'var(--accent-6)',
        "accent7": 'var(--accent-7)',
      },
    },
  },
  plugins: [],
};
