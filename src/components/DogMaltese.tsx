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
 * 白色卷毛小狗（线条小狗风格）
 * 波浪卷毛边 + 大圆耳 + 粉色蝴蝶结 + 小圆点眼 + U形笑嘴
 */
export default function DogMaltese({
  mood = 'happy',
  size = 180,
  wag = false,
  className = '',
  style,
}: Props) {
  const STROKE = '#2A2A2A'
  const FILL = '#FFFFFF'
  const PINK = '#FFB8C5'
  const CHEEK = '#FFB8C5'
  const TONGUE = '#FF7A8A'
  const SW = 3.5

  return (
    <svg
      width={size}
      viewBox="0 0 240 240"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* 尾巴 —— 卷毛小圆尾 */}
      <g
        className={wag ? 'animate-wag' : ''}
        style={{ transformOrigin: '55px 175px' }}
      >
        <path
          d="M50 180 q-15 -5 -12 -18 q3 -12 15 -10 q5 1 6 8"
          fill="none"
          stroke={STROKE}
          strokeWidth={SW}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M42 162 q-2 -3 -1 -6"
          fill="none"
          stroke={STROKE}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* 身体 —— 圆角矩形身体（波浪形边缘） */}
      <path
        d="M70 125
           q-8 2 -10 12 q-3 18 5 30 q4 10 15 10
           l50 0
           q12 0 15 -10 q8 -12 5 -30 q-2 -10 -10 -12
           q-6 -2 -10 2"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 身体左边卷毛波浪 */}
      <path d="M60 145 q-4 3 -4 8 q0 5 3 8" fill="none" stroke={STROKE} strokeWidth="2" strokeLinecap="round" />
      <path d="M58 165 q-3 2 -3 6 q0 4 3 6" fill="none" stroke={STROKE} strokeWidth="2" strokeLinecap="round" />
      {/* 身体右边卷毛波浪 */}
      <path d="M180 145 q4 3 4 8 q0 5 -3 8" fill="none" stroke={STROKE} strokeWidth="2" strokeLinecap="round" />
      <path d="M182 165 q3 2 3 6 q0 4 -3 6" fill="none" stroke={STROKE} strokeWidth="2" strokeLinecap="round" />

      {/* 左小短腿 */}
      <ellipse cx="95" cy="215" rx="12" ry="8" fill={FILL} stroke={STROKE} strokeWidth={SW} />
      {/* 右小短腿 */}
      <ellipse cx="145" cy="215" rx="12" ry="8" fill={FILL} stroke={STROKE} strokeWidth={SW} />

      {/* 左手臂（前爪） */}
      <ellipse cx="75" cy="165" rx="9" ry="14" fill={FILL} stroke={STROKE} strokeWidth={SW} />
      {/* 右手臂 */}
      <ellipse cx="165" cy="165" rx="9" ry="14" fill={FILL} stroke={STROKE} strokeWidth={SW} />

      {/* 左耳朵 —— 大圆圆卷毛耳 */}
      <ellipse cx="78" cy="75" rx="20" ry="25" fill={FILL} stroke={STROKE} strokeWidth={SW} />
      {/* 左耳内卷毛 */}
      <path d="M72 70 q-3 8 0 16" fill="none" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
      <path d="M82 68 q-2 10 0 18" fill="none" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />

      {/* 右耳朵 */}
      <ellipse cx="162" cy="75" rx="20" ry="25" fill={FILL} stroke={STROKE} strokeWidth={SW} />
      {/* 右耳内卷毛 */}
      <path d="M168 70 q3 8 0 16" fill="none" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
      <path d="M158 68 q2 10 0 18" fill="none" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />

      {/* 头 —— 大圆头（卷毛波浪边） */}
      <path
        d="M55 110
           q-8 15 -5 30 q3 18 20 28 q12 6 30 5
           q18 -1 30 -5 q17 -10 20 -28 q3 -15 -5 -30
           q-8 -12 -20 -18
           q-6 -2 -10 0
           q-6 3 -10 0
           q-5 -3 -10 -2
           q-10 2 -15 5
           q-10 5 -17 10 z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 头顶卷毛装饰 */}
      <path d="M105 55 q3 -5 8 -2" fill={FILL} stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" />
      <path d="M120 53 q3 -6 8 -2" fill={FILL} stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" />
      <path d="M135 55 q4 -5 8 -2" fill={FILL} stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" />

      {/* 腮红 */}
      <ellipse cx="78" cy="120" rx="7" ry="5" fill={CHEEK} stroke={STROKE} strokeWidth="1.5" opacity="0.85" />
      <ellipse cx="162" cy="120" rx="7" ry="5" fill={CHEEK} stroke={STROKE} strokeWidth="1.5" opacity="0.85" />

      {/* 眼睛 —— 小圆点 */}
      {mood === 'sleep' ? (
        <>
          <path d="M88 108 q8 -4 16 0" fill="none" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
          <path d="M136 108 q8 -4 16 0" fill="none" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
        </>
      ) : mood === 'daze' ? (
        <>
          <circle cx="96" cy="110" r="4" fill={STROKE} />
          <circle cx="144" cy="110" r="4" fill={STROKE} />
        </>
      ) : (
        <>
          <circle cx="96" cy="110" r="4.5" fill={STROKE} />
          <circle cx="98" cy="108" r="1.5" fill="white" />
          <circle cx="144" cy="110" r="4.5" fill={STROKE} />
          <circle cx="146" cy="108" r="1.5" fill="white" />
        </>
      )}

      {/* 鼻子 —— 圆鼻子 */}
      <ellipse cx="120" cy="125" rx="6" ry="4.5" fill={STROKE} />
      <circle cx="118" cy="123" r="1.2" fill="white" opacity="0.7" />

      {/* 嘴巴 —— U形笑嘴 */}
      {mood === 'happy' || mood === 'cheer' ? (
        <>
          <path d="M120 130 l0 4" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
          <path d="M108 138 q12 10 24 0" fill="none" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
          {mood === 'cheer' && (
            <ellipse cx="120" cy="148" rx="5" ry="6" fill={TONGUE} stroke={STROKE} strokeWidth="1.5" />
          )}
        </>
      ) : mood === 'hug' ? (
        <>
          <path d="M120 130 l0 3" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
          <path d="M110 138 q10 7 20 0" fill="none" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
        </>
      ) : mood === 'sleep' ? (
        <path d="M112 138 q8 4 16 0" fill="none" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      ) : (
        <path d="M112 138 q8 -3 16 0" fill="none" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      )}

      {/* 胸前蝴蝶结 */}
      <g transform="translate(120, 148)">
        {/* 左边结 */}
        <path d="M-2 0 q-18 -8 -22 -12 q-8 -6 -2 -12 q8 -6 24 0 q-10 8 -0 24 z" fill={PINK} stroke={STROKE} strokeWidth={SW - 0.5} strokeLinejoin="round" />
        {/* 右边结 */}
        <path d="M2 0 q18 -8 22 -12 q8 -6 2 -12 q-8 -6 -24 0 q10 8 0 24 z" fill={PINK} stroke={STROKE} strokeWidth={SW - 0.5} strokeLinejoin="round" />
        {/* 中间扣 */}
        <circle cx="0" cy="-6" r="5" fill={PINK} stroke={STROKE} strokeWidth={SW - 0.5} />
        <circle cx="0" cy="-6" r="1.5" fill="white" opacity="0.5" />
      </g>

      {/* 举起的小爪子（cheer） */}
      {mood === 'cheer' && (
        <>
          <ellipse cx="45" cy="140" rx="10" ry="12" fill={FILL} stroke={STROKE} strokeWidth={SW} />
          <path d="M42 142 l-2 4 M46 144 l0 5 M50 142 l2 4" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" />
        </>
      )}

      {/* 小爱心 */}
      {mood === 'hug' && (
        <path
          d="M120 40 c-3 -4 -8 -2 -8 2 c0 4 8 8 8 8 c0 0 8 -4 8 -8 c0 -4 -5 -6 -8 -2 z"
          fill={PINK}
          stroke={STROKE}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      )}
    </svg>
  )
}
