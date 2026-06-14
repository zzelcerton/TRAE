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
 * Line Dog (boy) —— 线条小狗（右）
 * 纯黑色线条风格：圆圆脑袋、下垂金毛耳、豆豆眼、圆鼻子
 * 与 DogMaltese 组成情侣头像对
 * 参考：韩国线条小狗情侣头像风格
 */
export default function DogRetriever({
  mood = 'happy',
  size = 180,
  wag = false,
  className = '',
  style,
}: Props) {
  const stroke = '#2C2420'

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
      {/* 身体 —— 圆圆小身体，尾巴在左边 */}
      <path
        d="M155 190 q-20 -15 -35 -5 q-5 5 0 10 q10 8 35 5 z"
        fill="none"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 前腿 */}
      <path
        d="M150 200 l3 15 l-10 0"
        fill="none"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* 尾巴 —— 金毛蓬松软尾巴，带摇摆动画 */}
      <g
        className={wag ? 'animate-wag' : ''}
        style={{ transformOrigin: '95px 185px' }}
      >
        <path
          d="M105 185 q-15 -5 -20 -20 q3 12 15 20 z"
          fill="none"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* 尾巴上的一小撮毛毛线 */}
        <path
          d="M98 175 q-4 -5 -8 -3"
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>

      {/* 左耳朵 —— 金毛下垂耳（稍微圆一点） */}
      <path
        d="M72 102 q-15 20 -5 45 q4 12 18 5 q8 -5 6 -15 q-2 -15 -19 -35 z"
        fill="none"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 左耳内的毛毛 */}
      <path
        d="M80 115 q-10 15 -5 35"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* 右耳朵 —— 金毛下垂耳 */}
      <path
        d="M168 102 q15 20 5 45 q-4 12 -18 5 q-8 -5 -6 -15 q2 -15 19 -35 z"
        fill="none"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 右耳内的毛毛 */}
      <path
        d="M160 115 q10 15 5 35"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* 头 —— 圆圆脑袋 */}
      <ellipse
        cx="120"
        cy="110"
        rx="52"
        ry="48"
        fill="none"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* 头顶毛毛 —— 金毛蓬一点 */}
      <path
        d="M102 65 q4 -10 12 -5"
        fill="none"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M118 62 q5 -10 14 -5"
        fill="none"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M135 65 q5 -8 12 -2"
        fill="none"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* 腮红 —— 稍微偏红一点 */}
      <ellipse cx="88" cy="128" rx="7" ry="4" fill="#FFB8C5" opacity="0.5" />
      <ellipse cx="152" cy="128" rx="7" ry="4" fill="#FFB8C5" opacity="0.5" />

      {/* 眼睛 —— 稍微大一点，金毛大眼睛 */}
      {mood === 'sleep' ? (
        <>
          <path
            d="M86 108 q10 -5 18 0"
            fill="none"
            stroke={stroke}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M136 108 q10 -5 18 0"
            fill="none"
            stroke={stroke}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </>
      ) : mood === 'daze' ? (
        <>
          <circle cx="95" cy="110" r="4" fill={stroke} />
          <circle cx="145" cy="110" r="4" fill={stroke} />
          <path d="M90 124 l10 -4" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M140 120 l10 4" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        </>
      ) : (
        <>
          {/* 豆豆眼 */}
          <ellipse cx="95" cy="110" rx="5" ry="5.5" fill={stroke} />
          <circle cx="97" cy="108" r="1.5" fill="white" />
          <ellipse cx="145" cy="110" rx="5" ry="5.5" fill={stroke} />
          <circle cx="147" cy="108" r="1.5" fill="white" />
        </>
      )}

      {/* 鼻子 —— 略大的圆鼻子 */}
      <ellipse cx="120" cy="128" rx="6" ry="5" fill={stroke} />
      <circle cx="118" cy="126" r="1.5" fill="white" opacity="0.8" />

      {/* 嘴巴 */}
      {mood === 'happy' || mood === 'cheer' ? (
        <>
          <path d="M120 133 l0 6" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <path d="M108 142 q12 10 24 0" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
          {/* 吐舌头 */}
          {mood === 'cheer' && (
            <ellipse cx="120" cy="148" rx="4" ry="5" fill="#FFB8C5" stroke={stroke} strokeWidth="1.5" />
          )}
        </>
      ) : mood === 'hug' ? (
        <>
          <path d="M120 133 l0 4" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <path d="M112 140 q8 8 16 0" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
        </>
      ) : mood === 'sleep' ? (
        <path d="M114 142 q6 4 12 0" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
      ) : (
        <path d="M112 142 q8 -3 16 0" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
      )}

      {/* 举起的爪子 */}
      {mood === 'cheer' && (
        <>
          <ellipse cx="185" cy="140" rx="8" ry="10" fill="none" stroke={stroke} strokeWidth="2.5" />
          <path d="M181 143 l-2 3 M185 144 l0 4 M189 143 l2 3" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}

      {/* 小爱心气泡 */}
      {mood === 'hug' && (
        <path
          d="M120 55 c-3 -4 -8 -2 -8 2 c0 4 8 8 8 8 c0 0 8 -4 8 -8 c0 -4 -5 -6 -8 -2 z"
          fill="#FFB8C5"
          stroke={stroke}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      )}

      {/* 名字小标签 */}
      <text
        x="120"
        y="225"
        textAnchor="middle"
        fontFamily="'Gaegu', sans-serif"
        fontSize="14"
        fontWeight="700"
        fill={stroke}
        opacity="0.6"
      >
        他
      </text>
    </svg>
  )
}
