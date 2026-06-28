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
 * 浅棕小狗（站立光滑版）
 * 光滑描边 + 大耳朵竖立 + 红色项圈 + U形笑嘴 + 小圆眼 + 分节短尾
 */
export default function DogRetriever({
  mood = 'happy',
  size = 200,
  wag = false,
  className = '',
  style,
}: Props) {
  const STROKE = '#222222'
  const FILL = '#E8C99A' // 浅棕黄色
  const RED = '#FF7A7A' // 红色项圈
  const PINK = '#FFB0B8'
  const HEART = '#FF6B6B'
  const SW = 4

  return (
    <svg
      width={size}
      viewBox="0 0 240 280"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* 影子 */}
      <ellipse cx="120" cy="265" rx="55" ry="8" fill="#CCCCCC" opacity="0.35" />

      {/* 尾巴 —— 右后方分节短尾 */}
      <g
        className={wag ? 'animate-wag' : ''}
        style={{ transformOrigin: '200px 200px' }}
      >
        <path
          d="M195 200
             q15 -3 20 -10
             q6 -8 2 -15
             q-3 -6 -10 -4
             q-6 2 -8 8"
          fill={FILL}
          stroke={STROKE}
          strokeWidth={SW}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* 尾巴分节线 */}
        <path d="M202 185 q6 -2 8 3" fill="none" stroke={STROKE} strokeWidth="2" strokeLinecap="round" />
        <path d="M200 193 q8 0 10 5" fill="none" stroke={STROKE} strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* 身体 —— 站立光滑边身体 */}
      <path
        d="M70 125
           q-12 -2 -14 10
           q-3 22 2 45
           q2 15 4 30
           q1 10 6 15
           q5 5 14 5
           l16 0
           q4 -8 10 -12
           q10 -5 20 -5
           q12 0 20 5
           q6 4 10 12
           l16 0
           q9 0 14 -5
           q5 -5 6 -15
           q2 -15 4 -30
           q5 -23 2 -45
           q-2 -12 -14 -10
           l-96 0 z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 红色项圈 */}
      <path
        d="M56 138
           q12 -8 32 -8
           q24 0 64 0
           q20 0 32 8"
        fill="none"
        stroke={RED}
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* 左手臂（前爪）—— 光滑小爪 */}
      <ellipse
        cx="75"
        cy="175"
        rx="10"
        ry="15"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
      />

      {/* 左手抱的爱心（cheer/hug状态显示） */}
      {(mood === 'hug' || mood === 'cheer') && (
        <g transform="translate(30, 160)">
          <path
            d="M0 15
               c-20 -25 -50 -15 -50 10
               c0 25 50 45 50 45
               s50 -20 50 -45
               c0 -25 -30 -35 -50 -10 z"
            fill={HEART}
            stroke={STROKE}
            strokeWidth={SW}
            strokeLinejoin="round"
          />
          {/* 爱心高光 */}
          <ellipse cx="-20" cy="5" rx="8" ry="5" fill="white" opacity="0.3" />
        </g>
      )}

      {/* 左小短腿（光滑） */}
      <path
        d="M88 240
           q-8 -2 -6 -18
           q1 -12 8 -12
           l14 0
           q5 0 5 12
           q0 16 -4 20
           q-3 4 -17 -2 z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />

      {/* 右小短腿 */}
      <path
        d="M152 240
           q8 -2 6 -18
           q-1 -12 -8 -12
           l-14 0
           q-5 0 -5 12
           q0 16 4 20
           q3 4 17 -2 z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />

      {/* 左耳朵 —— 大圆圆耳（竖立） */}
      <ellipse
        cx="72"
        cy="58"
        rx="22"
        ry="28"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        transform="rotate(-20 72 58)"
      />
      {/* 耳朵根部小弧线 */}
      <path
        d="M88 72 q-6 -2 -10 -10"
        fill="none"
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 右耳朵 —— 大圆圆耳 */}
      <ellipse
        cx="168"
        cy="58"
        rx="22"
        ry="28"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        transform="rotate(20 168 58)"
      />
      {/* 耳朵根部小弧线 */}
      <path
        d="M152 72 q6 -2 10 -10"
        fill="none"
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 头 —— 大圆头（光滑边） */}
      <ellipse
        cx="120"
        cy="110"
        rx="52"
        ry="48"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />

      {/* 头顶小凸起（光滑的小弧） */}
      <path
        d="M105 68 q8 -12 15 -8 q5 2 10 0 q7 -4 15 8"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />

      {/* 腮红（淡淡粉） */}
      <ellipse cx="75" cy="120" rx="8" ry="6" fill={PINK} opacity="0.7" />
      <ellipse cx="165" cy="120" rx="8" ry="6" fill={PINK} opacity="0.7" />

      {/* 眼睛 —— 小黑圆点 */}
      {mood === 'sleep' ? (
        <>
          <path d="M90 108 q8 -4 16 0" fill="none" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
          <path d="M134 108 q8 -4 16 0" fill="none" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
        </>
      ) : mood === 'daze' ? (
        <>
          <circle cx="98" cy="110" r="3.5" fill={STROKE} />
          <circle cx="142" cy="110" r="3.5" fill={STROKE} />
        </>
      ) : (
        <>
          <circle cx="98" cy="110" r="4" fill={STROKE} />
          <circle cx="99" cy="109" r="1.2" fill="white" />
          <circle cx="142" cy="110" r="4" fill={STROKE} />
          <circle cx="143" cy="109" r="1.2" fill="white" />
        </>
      )}

      {/* 鼻子 —— 小圆鼻 */}
      <ellipse cx="120" cy="125" rx="6" ry="4.5" fill={STROKE} />
      <circle cx="118" cy="124" r="1.2" fill="white" opacity="0.6" />

      {/* 嘴巴 —— U形笑嘴 */}
      {mood === 'happy' || mood === 'cheer' ? (
        <>
          <path d="M120 130 l0 4" stroke={STROKE} strokeWidth={SW - 1} strokeLinecap="round" />
          <path d="M108 138 q12 9 24 0" fill="none" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
        </>
      ) : mood === 'hug' ? (
        <>
          <path d="M120 130 l0 3" stroke={STROKE} strokeWidth={SW - 1} strokeLinecap="round" />
          <path d="M110 137 q10 7 20 0" fill="none" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
        </>
      ) : mood === 'sleep' ? (
        <path d="M112 137 q8 4 16 0" fill="none" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
      ) : (
        <path d="M112 137 q8 -3 16 0" fill="none" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
      )}
    </svg>
  )
}
