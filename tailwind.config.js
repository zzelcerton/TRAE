/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFFBF2',
        milk: '#FFF8E7',
        softYellow: '#FFE8A8',
        softPink: '#FFD9E0',
        softBrown: '#8B6B4D',
        lineBrown: '#3E2E22',
      },
      fontFamily: {
        cute: [
          '"Nunito"',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 6px 20px rgba(139, 107, 77, 0.08)',
        pop: '0 4px 0 rgba(139, 107, 77, 0.15)',
      },
      borderRadius: {
        xl2: '1.5rem',
      },
      keyframes: {
        wag: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pop: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        blink: {
          '0%, 90%, 100%': { transform: 'scaleY(1)' },
          '95%': { transform: 'scaleY(0.1)' },
        },
      },
      animation: {
        wag: 'wag 1.6s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        pop: 'pop 0.35s ease-out',
        blink: 'blink 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
