/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yujian: {
          bg: '#FCFAF6',
          coral: '#FF2A5F',
          'coral-hover': '#E01E50',
          navy: '#0D1B2A',
          forest: '#1A382B',
          card: '#171717',
          surface: '#FFFFFF',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'sans-serif'],
      },
      boxShadow: {
        'glow-coral': '0 0 35px -5px rgba(255, 42, 95, 0.4)',
        'soft-float': '0 20px 40px -15px rgba(13, 27, 42, 0.08)',
        'card-elevated': '0 30px 60px -12px rgba(13, 27, 42, 0.12), 0 18px 36px -18px rgba(13, 27, 42, 0.08)',
        'phone-frame': '0 40px 80px -20px rgba(0, 0, 0, 0.35)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}
