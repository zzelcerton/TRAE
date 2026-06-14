import { NavLink } from 'react-router-dom'

interface IconProps {
  active: boolean
}

function HomeIcon({ active }: IconProps) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 11 L12 4 L20 11"
        stroke={active ? '#4A3B2A' : '#8A7357'}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 10 V19 C6 19.5 6.5 20 7 20 H17 C17.5 20 18 19.5 18 19 V10"
        stroke={active ? '#4A3B2A' : '#8A7357'}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {active && <circle cx="12" cy="15" r="1.5" fill="#4A3B2A" />}
    </svg>
  )
}

function MoodIcon({ active }: IconProps) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke={active ? '#4A3B2A' : '#8A7357'} strokeWidth="2.2" />
      <circle cx="9.5" cy="11" r="1.2" fill={active ? '#4A3B2A' : '#8A7357'} />
      <circle cx="14.5" cy="11" r="1.2" fill={active ? '#4A3B2A' : '#8A7357'} />
      <path d="M8.5 15 q3.5 3 7 0" fill="none" stroke={active ? '#4A3B2A' : '#8A7357'} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function QuoteIcon({ active }: IconProps) {
  const color = active ? '#4A3B2A' : '#8A7357'
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 14 C 6 10 8 8 11 8 V11 C 10 11 9 12 9 14 H6 Z" fill={color} />
      <path d="M14 14 C 14 10 16 8 19 8 V11 C 18 11 17 12 17 14 H14 Z" fill={color} />
    </svg>
  )
}

function CardIcon({ active }: IconProps) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="5" width="16" height="14" rx="3" stroke={active ? '#4A3B2A' : '#8A7357'} strokeWidth="2.2" />
      <circle cx="9.5" cy="11" r="1.2" fill={active ? '#4A3B2A' : '#8A7357'} />
      <circle cx="14.5" cy="11" r="1.2" fill={active ? '#4A3B2A' : '#8A7357'} />
      <path d="M8.5 15 q3.5 3 7 0" fill="none" stroke={active ? '#4A3B2A' : '#8A7357'} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function GearIcon({ active }: IconProps) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3" stroke={active ? '#4A3B2A' : '#8A7357'} strokeWidth="2" />
      <path
        d="M12 2v3 M12 19v3 M3.5 4.5l2.1 2.1 M18.4 17.4l2.1 2.1 M2 12h3 M19 12h3 M3.5 19.5l2.1 -2.1 M18.4 6.6l2.1 -2.1"
        stroke={active ? '#4A3B2A' : '#8A7357'}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

const items = [
  { to: '/', label: '首页', icon: HomeIcon, end: true },
  { to: '/mood', label: '心情', icon: MoodIcon },
  { to: '/quotes', label: '语录', icon: QuoteIcon },
  { to: '/cards', label: '卡片', icon: CardIcon },
  { to: '/settings', label: '设置', icon: GearIcon },
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-xl bg-white/90 backdrop-blur border-t border-white shadow-soft">
        <ul className="flex h-20 items-stretch px-2 pb-1">
          {items.map(({ to, label, icon: Icon, end }) => (
            <li key={to} className="flex-1">
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `tab-item ${isActive ? 'tab-active' : ''}`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className={`transition-transform ${isActive ? '-translate-y-0.5 scale-110' : ''}`}>
                      <Icon active={isActive} />
                    </span>
                    <span className="text-[11px]">{label}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="h-[env(safe-area-inset-bottom)]" />
      </div>
    </nav>
  )
}
