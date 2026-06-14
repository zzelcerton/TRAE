import { NavLink } from 'react-router-dom'

const items = [
  { to: '/', label: '首页', icon: HomeIcon },
  { to: '/mood', label: '心情', icon: MoodIcon },
  { to: '/quotes', label: '语录', icon: QuoteIcon },
  { to: '/cards', label: '卡片', icon: CardIcon },
  { to: '/settings', label: '设置', icon: GearIcon },
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-xl bg-white/90 backdrop-blur border-t border-white shadow-[0_-6px_20px_rgba(139,107,77,0.08)]">
        <ul className="flex h-16 items-stretch px-2 pb-1">
          {items.map(({ to, label, icon: Icon }) => (
            <li key={to} className="flex-1">
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `tab-item ${isActive ? 'tab-active' : ''}`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`transition-transform ${
                        isActive ? '-translate-y-0.5 scale-110' : ''
                      }`}
                    >
                      <Icon active={isActive} />
                    </span>
                    <span className="font-bold">{label}</span>
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

function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 11 L12 4 L20 11"
        stroke={active ? '#3E2E22' : '#8B6B4D'}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 10 V19 C6 19.5 6.5 20 7 20 H17 C17.5 20 18 19.5 18 19 V10"
        stroke={active ? '#3E2E22' : '#8B6B4D'}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {active && <circle cx="12" cy="15" r="1.4" fill="#3E2E22" />}
    </svg>
  )
}

function MoodIcon({ active }: { active: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke={active ? '#3E2E22' : '#8B6B4D'}
        strokeWidth="2.2"
      />
      <circle cx="10" cy="11" r="1.1" fill={active ? '#3E2E22' : '#8B6B4D'} />
      <circle cx="14" cy="11" r="1.1" fill={active ? '#3E2E22' : '#8B6B4D'} />
      <path
        d="M9 15 q 3 2.5 6 0"
        fill="none"
        stroke={active ? '#3E2E22' : '#8B6B4D'}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function QuoteIcon({ active }: { active: boolean }) {
  const color = active ? '#3E2E22' : '#8B6B4D'
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 14 C 7 11 9 9 12 9 V12 C 11 12 10 13 10 14 H7 Z M14 14 C 14 11 16 9 19 9 V12 C 18 12 17 13 17 14 H14 Z"
        fill={color}
      />
    </svg>
  )
}

function CardIcon({ active }: { active: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="4"
        y="5"
        width="16"
        height="14"
        rx="3"
        stroke={active ? '#3E2E22' : '#8B6B4D'}
        strokeWidth="2.2"
      />
      <circle cx="10" cy="11" r="1" fill={active ? '#3E2E22' : '#8B6B4D'} />
      <circle cx="14" cy="11" r="1" fill={active ? '#3E2E22' : '#8B6B4D'} />
      <path
        d="M9 15 q 3 2 6 0"
        fill="none"
        stroke={active ? '#3E2E22' : '#8B6B4D'}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function GearIcon({ active }: { active: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke={active ? '#3E2E22' : '#8B6B4D'}
        strokeWidth="2"
      />
      <path
        d="M12 2v3 M12 19v3 M4.2 4.2l2.1 2.1 M17.7 17.7l2.1 2.1 M2 12h3 M19 12h3 M4.2 19.8l2.1 -2.1 M17.7 6.3l2.1 -2.1"
        stroke={active ? '#3E2E22' : '#8B6B4D'}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
