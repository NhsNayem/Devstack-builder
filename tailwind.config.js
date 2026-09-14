/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f1024',
      },
      backgroundImage: {
        // Single source of truth for the brand gradient (orange -> pink -> violet).
        // Change this one value to re-theme the whole site.
        'brand-gradient': 'linear-gradient(90deg, #fb923c 0%, #ec4899 50%, #8b5cf6 100%)',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 16, 36, 0.06), 0 8px 24px rgba(15, 16, 36, 0.06)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
