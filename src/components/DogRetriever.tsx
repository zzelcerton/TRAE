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
 * Retriever 小金毛 —— 金色蓬松毛发、温柔微笑、热情活泼
 */
export default function DogRetriever({
  mood = 'happy',
  size = 180,
  wag = false,
  className = '',
  style,
}: Props) {
  const stroke = '#4A3B2A'
  const strokeThin = '#B8966B'
  const fur = '#FFE4A8'
  const furDeep = '#FFD98A'
  const furDark = '#E8B86A'
  const earInside = '#FFC58A'
  const blush = '#FFB5A8'

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
      {/* 背景圆 */}
      <circle cx="120" cy="120" r="110" fill="#FFF4E0" />

      {/* 蓬松毛发外圈 —— 金毛更蓬松 */}
      <g>
        <circle cx="65" cy="65" r="32" fill={fur} stroke={strokeThin} strokeWidth="1.5" />
        <circle cx="175" cy="65" r="32" fill={fur} stroke={strokeThin} strokeWidth="1.5" />
        <circle cx="48" cy="118" r="28" fill={fur} stroke={strokeThin} strokeWidth="1.5" />
        <circle cx="192" cy="118" r="28" fill={fur} stroke={strokeThin} strokeWidth="1.5" />
        <circle cx="72" cy="178" r="30" fill={fur} stroke={strokeThin} strokeWidth="1.5" />
        <circle cx="168" cy="178" r="30" fill={fur} stroke={strokeThin} strokeWidth="1.5" />
        <circle cx="120" cy="192" r="26" fill={fur} stroke={strokeThin} strokeWidth="1.5" />
      </g>

      {/* 身体 */}
      <ellipse cx="120" cy="158" rx="58" ry="52" fill={fur} stroke={stroke} strokeWidth="2" />
      <ellipse cx="120" cy="162" rx="42" ry="34" fill={furDeep} />

      {/* 头 */}
      <circle cx="120" cy="112" r="54" fill={fur} stroke={stroke} strokeWidth="2.2" />
      {/* 毛发纹理 */}
      <path d="M72 100 q10 -12 22 -8" fill="none" stroke={strokeThin} strokeWidth="1.3" />
      <path d="M146 92 q10 -8 22 -2" fill="none" stroke={strokeThin} strokeWidth="1.3" />
      <path d="M65 122 q-8 12 -2 26" fill="none" stroke={strokeThin} strokeWidth="1.3" />
      <path d="M175 122 q8 12 2 26" fill="none" stroke={strokeThin} strokeWidth="1.3" />

      {/* 耳朵 —— 金毛的下垂耳，深色 */}
      <path
        d="M74 92 q-26 14 -18 60 q0 24 18 24 q16 -4 16 -24 q0 -32 -16 -60 z"
        fill={furDark}
        stroke={stroke}
        strokeWidth="2"
      />
      <path
        d="M74 98 q-20 10 -14 44"
        fill="none"
        stroke={strokeThin}
        strokeWidth="1.2"
      />
      <path
        d="M166 92 q26 14 18 60 q0 24 -18 24 q-16 -4 -16 -24 q0 -32 16 -60 z"
        fill={furDark}
        stroke={stroke}
        strokeWidth="2"
      />
      <path
        d="M166 98 q20 10 14 44"
        fill="none"
        stroke={strokeThin}
        strokeWidth="1.2"
      />
      {/* 耳朵内侧 */}
      <ellipse cx="70" cy="132" rx="10" ry="20" fill={earInside} opacity="0.7" />
      <ellipse cx="170" cy="132" rx="10" ry="20" fill={earInside} opacity="0.7" />

      {/* 腮红 —— 小金毛更粉嫩 */}
      <circle cx="88" cy="132" r="9" fill={blush} opacity="0.6" />
      <circle cx="152" cy="132" r="9" fill={blush} opacity="0.6" />

      {/* 眼睛 —— 金毛的眼睛稍大更温柔 */}
      {mood === 'sleep' ? (
        <>
          <path d="M90 108 q10 -8 20 0" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M130 108 q10 -8 20 0" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
        </>
      ) : mood === 'daze' ? (
        <>
          <circle cx="100" cy="112" r="6" fill={stroke} />
          <circle cx="140" cy="112" r="6" fill={stroke} />
          <path d="M92 122 l16 -8 M132 114 l16 8" fill="none" stroke={strokeThin} strokeWidth="1.2" strokeLinecap="round" />
        </>
      ) : (
        <>
          <g className="animate-blink" style={{ transformOrigin: '100px 112px' }}>
            <ellipse cx="100" cy="112" rx="7" ry="8" fill={stroke} />
            <circle cx="103" cy="109" r="2.2" fill="white" />
          </g>
          <g className="animate-blink" style={{ transformOrigin: '140px 112px' }}>
            <ellipse cx="140" cy="112" rx="7" ry="8" fill={stroke} />
            <circle cx="143" cy="109" r="2.2" fill="white" />
          </g>
        </>
      )}

      {/* 鼻子 */}
      <ellipse cx="120" cy="128" rx="6" ry="5" fill={stroke} />
      <circle cx="117" cy="126" r="1.5" fill="white" opacity="0.7" />

      {/* 嘴巴 —— 金毛经典微笑 */}
      {mood === 'happy' || mood === 'cheer' ? (
        <>
          <path
            d="M120 135 l0 6"
            fill="none"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M104 142 q16 12 32 0"
            fill="none"
            stroke={stroke}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </>
      ) : mood === 'hug' ? (
        <path
          d="M110 138 q10 10 20 0"
          fill="none"
          stroke={stroke}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      ) : mood === 'sleep' ? (
        <path
          d="M112 140 q8 4 16 0"
          fill="none"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M108 138 q12 -4 24 0"
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
            d="M68 178 q-20 -22 -18 -55"
            fill="none"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="48" cy="115" r="12" fill={fur} stroke={stroke} strokeWidth="2" />
          <path
            d="M172 178 q20 -22 18 -55"
            fill="none"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="192" cy="115" r="12" fill={fur} stroke={stroke} strokeWidth="2" />
          {/* 金色小星星 */}
          <path d="M38 80 l3 9 l9 2 l-9 5 l-3 10 l-4 -10 l-10 -5 l9 -2 z" fill="#FFC56B" stroke={stroke} strokeWidth="1.3" />
          <path d="M202 75 l2.5 8 l8 1.5 l-8 4 l-2 9 l-3 -9 l-9 -4 l9 -1.5 z" fill="#FFC56B" stroke={stroke} strokeWidth="1.3" />
        </>
      )}

      {mood === 'hug' && (
        <>
          <path
            d="M80 185 q-5 -22 20 -28 q24 -6 26 22"
            fill="none"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M160 185 q5 -22 -20 -28 q-24 -6 -26 22"
            fill="none"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* 心形 —— 更大 */}
          <path
            d="M120 170 c -10 -12 -28 -6 -28 8 c 0 16 28 28 28 28 c 0 0 28 -12 28 -28 c 0 -14 -18 -20 -28 -8 z"
            fill="#FFB5A8"
            stroke={stroke}
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </>
      )}

      {/* 尾巴 —— 金毛大尾巴 */}
      <g
        className={wag ? 'animate-wag' : ''}
        style={{ transformOrigin: '175px 178px' }}
      >
        <path
          d="M175 178 q30 -8 35 -32 q4 18 -5 34 q-12 14 -30 -2 z"
          fill={furDark}
          stroke={stroke}
          strokeWidth="2"
        />
        <path
          d="M185 172 q12 -6 16 -20"
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
        Retriever
      </text>
    </svg>
  )
}
