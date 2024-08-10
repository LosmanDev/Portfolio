const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        aurora: 'aurora 60s linear infinite',
      },
      boxShadow: {
        projects:
          '0 20px 25px -5px rgba(59, 130, 246, 0.4), 0 10px 10px -5px rgba(165, 180, 252, 0.3), 0 20px 25px -5px rgba(147, 197, 253, 0.4), 0 10px 10px -5px rgba(221, 214, 254, 0.3), 0 20px 25px -5px rgba(96, 165, 250, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%',
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%',
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ':root': newVars,
  });
}
