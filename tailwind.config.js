/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFFAF0',
        milk: '#FFF4E0',
        maltWhite: '#FFFFFF',
        retrieverGold: '#FFE4A8',
        softGold: '#FFD98A',
        softPink: '#FFD9E0',
        softMint: '#C8E6D0',
        softPurple: '#E8D9F0',
        softBlue: '#D4E7F5',
        softBrown: '#8A7357',
        lineBrown: '#4A3B2A',
      },
      fontFamily: {
        cute: ['"Gaegu"', '"Noto Sans KR"', '"PingFang SC"', 'sans-serif'],
        body: ['"Noto Sans KR"', '"PingFang SC"', '"Hiragino Sans GB"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 6px 22px rgba(74, 59, 42, 0.08)',
        pop: '0 4px 0 rgba(74, 59, 42, 0.12)',
      },
      borderRadius: {
        '2xl2': '1.25rem',
        '3xl2': '1.75rem',
      },
      keyframes: {
        wag: {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(8deg)' },
        },
        wagSlow: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        popIn: {
          '0%': { transform: 'scale(0.85)', opacity: '0' },
          '60%': { transform: 'scale(1.04)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        blink: {
          '0%, 92%, 100%': { transform: 'scaleY(1)' },
          '96%': { transform: 'scaleY(0.1)' },
        },
        lift: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-4px)' },
        },
        fadeUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        wag: 'wag 1.8s ease-in-out infinite',
        wagSlow: 'wagSlow 2.6s ease-in-out infinite',
        float: 'float 3.5s ease-in-out infinite',
        popIn: 'popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        blink: 'blink 5s ease-in-out infinite',
        lift: 'lift 0.25s ease-out forwards',
        fadeUp: 'fadeUp 0.5s ease-out',
      },
    },
  },
  plugins: [],
}
