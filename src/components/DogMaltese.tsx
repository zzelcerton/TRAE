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
 * 小白（马尔济斯）—— 粗黑描边 + 实心填色 + 粉腮红 + 小圆点眼
 * 参考：国内线条小狗 / 马尔济斯情头风格
 */
export default function DogMaltese({
  mood = 'happy',
  size = 180,
  wag = false,
  className = '',
  style,
}: Props) {
  const STROKE = '#2B2A29'
  const SW = 3.5

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* 身体 —— 圆胖小身体（白色填充+粗描边） */}
      <path
        d="M78 195 q-3 -25 25 -32 q5 -1 10 -1 q15 0 30 12 q10 8 12 25 q-2 12 -15 16 q-20 6 -40 -2 z"
        fill="#FFFFFF"
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 左小腿 */}
      <path
        d="M102 215 q-1 8 5 12 q6 -3 4 -12"
        fill="#FFFFFF"
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      {/* 右小腿 */}
      <path
        d="M145 218 q-1 6 6 10 q6 -5 3 -12"
        fill="#FFFFFF"
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />

      {/* 尾巴 —— 短圆尾巴，带摇摆 */}
      <g
        className={wag ? 'animate-wag' : ''}
        style={{ transformOrigin: '168px 195px' }}
      >
        <ellipse
          cx="175"
          cy="188"
          rx="10"
          ry="12"
          fill="#FFFFFF"
          stroke={STROKE}
          strokeWidth={SW}
        />
      </g>

      {/* 左耳朵 —— 下垂大耳（马尔济斯标志性的长耳） */}
      <path
        d="M72 90 q-12 30 -5 58 q5 15 18 12 q12 -5 10 -18 q-3 -22 -10 -40 q-5 -8 -13 -12 z"
        fill="#FFFFFF"
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      {/* 耳朵内部的毛毛线 */}
      <path
        d="M80 115 q-5 15 0 38"
        fill="none"
        stroke={STROKE}
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* 右耳朵 */}
      <path
        d="M168 90 q12 30 5 58 q-5 15 -18 12 q-12 -5 -10 -18 q3 -22 10 -40 q5 -8 13 -12 z"
        fill="#FFFFFF"
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      {/* 耳朵内部的毛毛线 */}
      <path
        d="M160 115 q5 15 0 38"
        fill="none"
        stroke={STROKE}
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* 头 —— 圆圆大头 */}
      <ellipse
        cx="120"
        cy="108"
        rx="52"
        ry="50"
        fill="#FFFFFF"
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />

      {/* 头顶一小撮毛 */}
      <path
        d="M112 62 q2 -8 8 -6"
        fill="#FFFFFF"
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path
        d="M125 60 q3 -8 8 -4"
        fill="#FFFFFF"
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />

      {/* 腮红 —— 粉粉小圆 */}
      <ellipse cx="85" cy="125" rx="7" ry="6" fill="#FFB8C5" stroke={STROKE} strokeWidth="1.5" />
      <ellipse cx="155" cy="125" rx="7" ry="6" fill="#FFB8C5" stroke={STROKE} strokeWidth="1.5" />

      {/* 眼睛 —— 小圆点 */}
      {mood === 'sleep' ? (
        <>
          <path
            d="M88 110 q8 -5 16 0"
            fill="none"
            stroke={STROKE}
            strokeWidth={SW - 0.5}
            strokeLinecap="round"
          />
          <path
            d="M136 110 q8 -5 16 0"
            fill="none"
            stroke={STROKE}
            strokeWidth={SW - 0.5}
            strokeLinecap="round"
          />
        </>
      ) : mood === 'daze' ? (
        <>
          <circle cx="96" cy="112" r="4" fill={STROKE} />
          <circle cx="144" cy="112" r="4" fill={STROKE} />
        </>
      ) : (
        <>
          <circle cx="96" cy="112" r="5" fill={STROKE} />
          <circle cx="98" cy="110" r="1.5" fill="white" />
          <circle cx="144" cy="112" r="5" fill={STROKE} />
          <circle cx="146" cy="110" r="1.5" fill="white" />
        </>
      )}

      {/* 鼻子 —— 椭圆小鼻子 */}
      <ellipse cx="120" cy="128" rx="6" ry="4.5" fill={STROKE} />

      {/* 嘴巴 —— U型微笑 */}
      {mood === 'happy' || mood === 'cheer' ? (
        <>
          <path
            d="M120 133 l0 5"
            stroke={STROKE}
            strokeWidth={SW - 0.5}
            strokeLinecap="round"
          />
          <path
            d="M108 140 q12 12 24 0"
            fill="none"
            stroke={STROKE}
            strokeWidth={SW - 0.5}
            strokeLinecap="round"
          />
          {mood === 'cheer' && (
            <ellipse cx="120" cy="146" rx="5" ry="6" fill="#FFB8C5" stroke={STROKE} strokeWidth="1.8" />
          )}
        </>
      ) : mood === 'hug' ? (
        <>
          <path
            d="M120 133 l0 4"
            stroke={STROKE}
            strokeWidth={SW - 0.5}
            strokeLinecap="round"
          />
          <path
            d="M112 140 q8 7 16 0"
            fill="none"
            stroke={STROKE}
            strokeWidth={SW - 0.5}
            strokeLinecap="round"
          />
        </>
      ) : mood === 'sleep' ? (
        <path
          d="M112 140 q8 5 16 0"
          fill="none"
          stroke={STROKE}
          strokeWidth={SW - 0.5}
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M112 142 q8 -3 16 0"
          fill="none"
          stroke={STROKE}
          strokeWidth={SW - 0.5}
          strokeLinecap="round"
        />
      )}

      {/* 举起的小爪子 */}
      {mood === 'cheer' && (
        <>
          <ellipse cx="58" cy="145" rx="9" ry="11" fill="#FFFFFF" stroke={STROKE} strokeWidth={SW} />
          <path d="M54 148 l-2 3 M58 149 l0 5 M62 148 l2 3" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" />
        </>
      )}

      {/* 小爱心气泡 */}
      {mood === 'hug' && (
        <path
          d="M120 55 c-3 -4 -8 -2 -8 2 c0 4 8 8 8 8 c0 0 8 -4 8 -8 c0 -4 -5 -6 -8 -2 z"
          fill="#FFB8C5"
          stroke={STROKE}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      )}
    </svg>
  )
}
