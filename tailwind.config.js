/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          darken: 'var(--primary-darken)',
          lighten: 'var(--primary-lighten)',
          lighter: 'var(--primary-lighter)',
        },
        gray: {
          base: 'var(--base)',
          'bg-base': 'var(--base-reverse)',
          accent1: 'var(--accent-1)',
          accent2: 'var(--accent-2)',
          accent3: 'var(--accent-3)',
          accent4: 'var(--accent-4)',
          accent5: 'var(--accent-5)',
          accent6: 'var(--accent-6)',
          accent7: 'var(--accent-7)',
        },
        manner: {
          accent1: 'var(--manner-accent-1)',
          accent2: 'var(--manner-accent-2)',
          accent3: 'var(--manner-accent-3)',
          accent4: 'var(--manner-accent-4)',
          accent5: 'var(--manner-accent-5)',
          accent6: 'var(--manner-accent-6)',
          accent7: 'var(--manner-accent-7)',
        },
      },
      animation: {
        fadeIn: 'fadeIn ease 0.3s forwards',
        fadeOut: 'fadeOut ease-out 0.3s forwards',
        opacity70: 'opacity70 ease 0.3s forwards',
        opacity0: 'opacity0 ease-out 0.3s forwards',
        moveUp: 'moveUp ease 0.3s forwards',
        moveDown: 'moveDown ease-out 0.3s forwards',
      },
      fontFamily: {
        'sans': ['Noto Sans KR']
      }
    },
  },
  plugins: [],
};
