import { NavLink } from 'react-router-dom'
import DogMaltese from './DogMaltese'
import DogRetriever from './DogRetriever'

const LINKS: { to: string; label: string; icon: 'home' | 'mood' | 'cards' | 'quotes' | 'me' }[] = [
  { to: '/', label: '首页', icon: 'home' },
  { to: '/mood', label: '心情', icon: 'mood' },
  { to: '/cards', label: '卡片', icon: 'cards' },
  { to: '/quotes', label: '语录', icon: 'quotes' },
  { to: '/me', label: '关于', icon: 'me' },
]

function Icon({ name, active }: { name: string; active: boolean }) {
  const base = 'w-6 h-6 flex items-center justify-center text-xl'
  const color = active ? 'text-deepBrown' : 'text-grayBrown'
  switch (name) {
    case 'home':
      return <span className={`${base} ${color} font-cute font-bold`}>♡</span>
    case 'mood':
      return <span className={`${base} ${color}`}>🌸</span>
    case 'cards':
      return <span className={`${base} ${color}`}>🐾</span>
    case 'quotes':
      return <span className={`${base} ${color} font-cute font-bold`}>"</span>
    case 'me':
      return <span className={`${base} ${color}`}>♪</span>
    default:
      return null
  }
}

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      {/* 小小小狗，在左右边缘 */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 flex items-end justify-between px-3">
        <div className="w-14 h-14">
          <DogMaltese mood="happy" size={56} />
        </div>
        <div className="w-14 h-14">
          <DogRetriever mood="cheer" size={56} wag />
        </div>
      </div>

      <div className="mx-auto max-w-xl px-3 pb-3">
        <div className="line-card flex items-center justify-around px-2 py-2 shadow-soft">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 px-2 py-1 rounded-2xl transition ${
                  isActive ? 'text-deepBrown' : 'text-grayBrown'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon name={link.icon} active={isActive} />
                  <span
                    className={`text-xs font-bold ${
                      isActive ? 'text-deepBrown' : 'text-grayBrown'
                    }`}
                  >
                    {link.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
