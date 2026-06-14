/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8F0',
        milk: '#FFF3E6',
        softPink: '#FFB8C5',
        deepBrown: '#2C2420',
        lineBrown: '#2C2420',
        grayBrown: '#8A7357',
      },
      fontFamily: {
        cute: ['"Gaegu"', '"Noto Sans KR"', 'sans-serif'],
        body: ['"Noto Sans KR"', '"PingFang SC"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 12px rgba(44, 36, 32, 0.06)',
        card: '0 4px 20px rgba(44, 36, 32, 0.08)',
      },
      borderRadius: {
        '3xl2': '1.75rem',
        '4xl2': '2.5rem',
      },
      keyframes: {
        wag: {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(8deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pop: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '60%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounce2: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        wag: 'wag 1.8s ease-in-out infinite',
        float: 'float 3.5s ease-in-out infinite',
        pop: 'pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        bounce2: 'bounce2 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
