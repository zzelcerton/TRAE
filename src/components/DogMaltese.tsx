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
 * 白色卷毛小狗（站立波浪边版）
 * 全身波浪轮廓 + 大耳朵竖立 + U形笑嘴 + 小圆眼 + 小短尾
 */
export default function DogMaltese({
  mood = 'happy',
  size = 200,
  wag = false,
  className = '',
  style,
}: Props) {
  const STROKE = '#222222'
  const FILL = '#FFFFFF'
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

      {/* 尾巴 —— 左后方小卷尾 */}
      <g
        className={wag ? 'animate-wag' : ''}
        style={{ transformOrigin: '45px 200px' }}
      >
        <path
          d="M48 200 q-20 -3 -22 -12 q-2 -10 8 -13 q8 -2 12 4"
          fill={FILL}
          stroke={STROKE}
          strokeWidth={SW}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* 尾巴波浪 */}
        <path d="M40 182 q-3 -3 -2 -7" fill="none" stroke={STROKE} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      </g>

      {/* 身体 —— 站立波浪边身体 */}
      <path
        d="M68 120
           q-8 2 -10 12
           q-3 20 2 40
           q2 15 5 30
           q1 8 4 12
           q3 6 10 6
           l8 0
           q3 -8 8 -12
           q8 -6 18 -6
           q12 0 20 6
           q6 4 8 12
           l10 0
           q7 0 10 -6
           q3 -4 5 -12
           q3 -15 5 -30
           q5 -20 2 -40
           q-2 -10 -10 -12
           q-8 -2 -12 4
           q-4 5 -10 3
           q-8 -3 -16 0
           q-10 3 -18 0
           q-8 -3 -15 0
           q-6 3 -10 -4 z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 左手臂（前爪）—— 波浪边小爪 */}
      <path
        d="M75 175
           q-12 -2 -14 -12
           q-3 -14 10 -18
           q8 -2 14 4
           q5 5 5 14
           q0 10 -8 14
           q-4 2 -7 2 z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />

      {/* 左小短腿（波浪边） */}
      <path
        d="M85 240
           q-10 -2 -8 -15
           q1 -12 8 -12
           l10 0
           q3 0 4 8
           q2 15 -2 20
           q-3 4 -12 -1 z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      {/* 腿中间缝 */}
      <path d="M102 238 q3 -3 0 -8" fill="none" stroke={STROKE} strokeWidth={SW - 1} strokeLinecap="round" />

      {/* 右小短腿 */}
      <path
        d="M150 240
           q10 -2 8 -15
           q-1 -12 -8 -12
           l-10 0
           q-3 0 -4 8
           q-2 15 2 20
           q3 4 12 -1 z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      {/* 腿中间缝 */}
      <path d="M138 238 q-3 -3 0 -8" fill="none" stroke={STROKE} strokeWidth={SW - 1} strokeLinecap="round" />

      {/* 左手抱的爱心（cheer/hug状态显示） */}
      {(mood === 'hug' || mood === 'cheer') && (
        <g transform="translate(130, 160)">
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

      {/* 左耳朵 —— 大圆圆卷毛耳（竖立） */}
      <path
        d="M62 55
           q-18 -5 -20 -22
           q-2 -18 12 -24
           q14 -6 26 4
           q8 7 8 22
           q0 10 -4 16
           q-4 8 -12 10
           q-7 2 -10 -6 z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      {/* 耳朵内卷毛 */}
      <path d="M65 38 q-4 6 -2 14" fill="none" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />

      {/* 右耳朵 —— 大圆圆卷毛耳 */}
      <path
        d="M178 55
           q18 -5 20 -22
           q2 -18 -12 -24
           q-14 -6 -26 4
           q-8 7 -8 22
           q0 10 4 16
           q4 8 12 10
           q7 2 10 -6 z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      {/* 耳朵内卷毛 */}
      <path d="M175 38 q4 6 2 14" fill="none" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />

      {/* 头 —— 大圆头（波浪卷边） */}
      <path
        d="M58 85
           q-10 10 -10 28
           q0 22 12 35
           q8 8 20 10
           q12 3 22 0
           q12 -3 20 0
           q10 3 20 0
           q12 -2 20 -10
           q12 -13 12 -35
           q0 -18 -10 -28
           q-8 -8 -15 -10
           q-8 -2 -10 4
           q-2 4 -10 4
           q-10 0 -18 -2
           q-12 -3 -20 0
           q-10 2 -16 -2
           q-8 -4 -17 0 z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 头顶两撮小毛毛 */}
      <path d="M95 55 q4 -10 12 -6 q-3 6 -12 8 z" fill={FILL} stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" />
      <path d="M133 55 q-4 -10 -12 -6 q3 6 12 8 z" fill={FILL} stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" />
      {/* 中间一撮 */}
      <path d="M115 52 q5 -10 10 -5 q-2 6 -10 7 z" fill={FILL} stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" />

      {/* 腮红（淡淡粉） */}
      <ellipse cx="72" cy="120" rx="8" ry="6" fill={PINK} opacity="0.7" />
      <ellipse cx="168" cy="120" rx="8" ry="6" fill={PINK} opacity="0.7" />

      {/* 眼睛 —— 小黑圆点 */}
      {mood === 'sleep' ? (
        <>
          <path d="M88 108 q8 -4 16 0" fill="none" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
          <path d="M136 108 q8 -4 16 0" fill="none" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
        </>
      ) : mood === 'daze' ? (
        <>
          <circle cx="96" cy="110" r="3.5" fill={STROKE} />
          <circle cx="144" cy="110" r="3.5" fill={STROKE} />
        </>
      ) : (
        <>
          <circle cx="96" cy="110" r="4" fill={STROKE} />
          <circle cx="97" cy="109" r="1.2" fill="white" />
          <circle cx="144" cy="110" r="4" fill={STROKE} />
          <circle cx="145" cy="109" r="1.2" fill="white" />
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
