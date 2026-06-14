import type { CSSProperties } from 'react'

export type Mood = 'happy' | 'sleep' | 'cheer' | 'hug' | 'daze'

interface Props {
  mood?: Mood
  size?: number
  wag?: boolean
  className?: string
  style?: CSSProperties
}

/**
 * Maltese 马尔济斯 —— 白色蓬松毛发、圆眼睛、软萌治愈
 */
export default function DogMaltese({
  mood = 'happy',
  size = 180,
  wag = false,
  className = '',
  style,
}: Props) {
  const stroke = '#4A3B2A'
  const strokeThin = '#8A7357'
  const fur = '#FFFFFF'
  const furShade = '#F0EDE5'
  const earInside = '#FFE4E8'
  const blush = '#FFC5CC'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* 背景圆 —— 奶油米白 */}
      <circle cx="120" cy="120" r="110" fill="#FFFAF0" />

      {/* 蓬松毛发外圈 */}
      <g>
        <circle cx="70" cy="70" r="28" fill={fur} stroke={strokeThin} strokeWidth="1.5" />
        <circle cx="170" cy="70" r="28" fill={fur} stroke={strokeThin} strokeWidth="1.5" />
        <circle cx="55" cy="120" r="24" fill={fur} stroke={strokeThin} strokeWidth="1.5" />
        <circle cx="185" cy="120" r="24" fill={fur} stroke={strokeThin} strokeWidth="1.5" />
        <circle cx="75" cy="175" r="26" fill={fur} stroke={strokeThin} strokeWidth="1.5" />
        <circle cx="165" cy="175" r="26" fill={fur} stroke={strokeThin} strokeWidth="1.5" />
        <circle cx="120" cy="185" r="22" fill={fur} stroke={strokeThin} strokeWidth="1.5" />
      </g>

      {/* 身体 —— 圆毛团 */}
      <ellipse cx="120" cy="155" rx="55" ry="50" fill={fur} stroke={stroke} strokeWidth="2" />
      <ellipse cx="120" cy="160" rx="40" ry="32" fill={furShade} />

      {/* 头 */}
      <g>
        <circle cx="120" cy="110" r="50" fill={fur} stroke={stroke} strokeWidth="2.2" />
        {/* 毛发蓬松线 */}
        <path d="M80 100 q8 -10 20 -8" fill="none" stroke={strokeThin} strokeWidth="1.3" />
        <path d="M140 92 q8 -6 20 -2" fill="none" stroke={strokeThin} strokeWidth="1.3" />
        <path d="M70 120 q-6 10 -2 22" fill="none" stroke={strokeThin} strokeWidth="1.3" />
        <path d="M170 120 q6 10 2 22" fill="none" stroke={strokeThin} strokeWidth="1.3" />
      </g>

      {/* 耳朵 —— 下垂的长耳 */}
      <path
        d="M78 90 q-22 10 -18 55 q0 22 18 25 q14 -2 14 -25 q0 -30 -14 -55 z"
        fill={fur}
        stroke={stroke}
        strokeWidth="2"
      />
      <path
        d="M78 95 q-16 8 -14 40 q2 18 14 20"
        fill="none"
        stroke={strokeThin}
        strokeWidth="1.2"
      />
      <path
        d="M162 90 q22 10 18 55 q0 22 -18 25 q-14 -2 -14 -25 q0 -30 14 -55 z"
        fill={fur}
        stroke={stroke}
        strokeWidth="2"
      />
      <path
        d="M162 95 q16 8 14 40 q-2 18 -14 20"
        fill="none"
        stroke={strokeThin}
        strokeWidth="1.2"
      />
      {/* 耳朵内侧粉色 */}
      <ellipse cx="72" cy="130" rx="10" ry="18" fill={earInside} opacity="0.8" />
      <ellipse cx="168" cy="130" rx="10" ry="18" fill={earInside} opacity="0.8" />

      {/* 腮红 */}
      <circle cx="88" cy="128" r="8" fill={blush} opacity="0.7" />
      <circle cx="152" cy="128" r="8" fill={blush} opacity="0.7" />

      {/* 眼睛 */}
      {mood === 'sleep' ? (
        <>
          <path d="M92 108 q8 -6 16 0" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M132 108 q8 -6 16 0" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
        </>
      ) : mood === 'daze' ? (
        <>
          <circle cx="100" cy="110" r="5" fill={stroke} />
          <circle cx="140" cy="110" r="5" fill={stroke} />
          <path d="M92 120 l16 -8 M132 112 l16 8" fill="none" stroke={strokeThin} strokeWidth="1.2" strokeLinecap="round" />
        </>
      ) : (
        <>
          <g className="animate-blink" style={{ transformOrigin: '100px 110px' }}>
            <ellipse cx="100" cy="110" rx="6" ry="7" fill={stroke} />
            <circle cx="102" cy="108" r="2" fill="white" />
          </g>
          <g className="animate-blink" style={{ transformOrigin: '140px 110px' }}>
            <ellipse cx="140" cy="110" rx="6" ry="7" fill={stroke} />
            <circle cx="142" cy="108" r="2" fill="white" />
          </g>
        </>
      )}

      {/* 鼻子 */}
      <ellipse cx="120" cy="125" rx="5" ry="4" fill={stroke} />
      <circle cx="118" cy="123" r="1.2" fill="white" opacity="0.7" />

      {/* 嘴巴 */}
      {mood === 'happy' || mood === 'cheer' ? (
        <path
          d="M108 132 q12 10 24 0"
          fill="none"
          stroke={stroke}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      ) : mood === 'hug' ? (
        <path
          d="M112 132 q8 8 16 0"
          fill="none"
          stroke={stroke}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      ) : mood === 'sleep' ? (
        <path
          d="M114 134 q6 2 12 0"
          fill="none"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M110 133 q10 -2 20 0"
          fill="none"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}

      {/* 前爪（举起来的情况） */}
      {mood === 'cheer' && (
        <>
          <path
            d="M70 175 q-18 -20 -16 -50"
            fill="none"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="50" cy="115" r="10" fill={fur} stroke={stroke} strokeWidth="2" />
          <path
            d="M170 175 q18 -20 16 -50"
            fill="none"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="190" cy="115" r="10" fill={fur} stroke={stroke} strokeWidth="2" />
          {/* 小星星 */}
          <path d="M40 80 l3 8 l8 2 l-8 4 l-2 9 l-3 -9 l-8 -4 l8 -2 z" fill="#FFD98A" stroke={stroke} strokeWidth="1.2" />
          <path d="M200 75 l2.5 7 l7 1.5 l-7 3.5 l-1.5 8 l-1.5 -8 l-7 -3.5 l7 -1.5 z" fill="#FFD98A" stroke={stroke} strokeWidth="1.2" />
        </>
      )}

      {mood === 'hug' && (
        <>
          <path
            d="M78 180 q-4 -18 20 -22 q24 -4 24 18"
            fill="none"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M162 180 q4 -18 -20 -22 q-24 -4 -24 18"
            fill="none"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* 心形 */}
          <path
            d="M120 170 c -8 -10 -22 -6 -22 6 c 0 12 22 22 22 22 c 0 0 22 -10 22 -22 c 0 -12 -14 -16 -22 -6 z"
            fill="#FFC5CC"
            stroke={stroke}
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </>
      )}

      {/* 尾巴 */}
      <g
        className={wag ? 'animate-wag' : ''}
        style={{ transformOrigin: '170px 175px' }}
      >
        <path
          d="M170 175 q25 -5 30 -25 q4 15 -5 28 q-10 10 -25 3 z"
          fill={fur}
          stroke={stroke}
          strokeWidth="2"
        />
        <path
          d="M178 170 q10 -4 12 -12"
          fill="none"
          stroke={strokeThin}
          strokeWidth="1.2"
        />
      </g>

      {/* 名字标签 */}
      <text
        x="120"
        y="220"
        textAnchor="middle"
        fontFamily="'Gaegu', sans-serif"
        fontSize="14"
        fontWeight="700"
        fill="#8A7357"
      >
        Maltese
      </text>
    </svg>
  )
}
