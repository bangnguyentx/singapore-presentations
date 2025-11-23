/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        singapore: {
          // Primary colors from Singapore flag
          red: {
            DEFAULT: '#EF3340',
            light: '#F25C66',
            dark: '#C72834',
          },
          white: '#FFFFFF',
          // Accent colors
          gold: {
            DEFAULT: '#F6C85F',
            light: '#F9D886',
            dark: '#E5B13D',
          },
          teal: {
            DEFAULT: '#14B8A6',
            light: '#2DD4BF',
            dark: '#0F766E',
          },
          // Neutral colors
          charcoal: {
            DEFAULT: '#0F1724',
            light: '#1E293B',
            lighter: '#334155',
          },
          gray: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            400: '#94A3B8',
            500: '#64748B',
            600: '#475569',
            700: '#334155',
            800: '#1E293B',
            900: '#0F172A',
          }
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'slide-title': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'slide-subtitle': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'vietnamese': ['0.9rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem',
        'slide': '100vh',
      },
      aspectRatio: {
        'slide': '16 / 9',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-singapore': 'linear-gradient(135deg, #EF3340 0%, #C72834 100%)',
        'glassmorphism': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glow-red': '0 0 30px rgba(239, 51, 64, 0.4)',
        'glow-gold': '0 0 30px rgba(246, 200, 95, 0.4)',
      },
      screens: {
        'xs': '360px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    // Custom plugin for glassmorphism
    function({ addUtilities }) {
      const newUtilities = {
        '.glass': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-dark': {
          background: 'rgba(15, 23, 36, 0.7)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
};
