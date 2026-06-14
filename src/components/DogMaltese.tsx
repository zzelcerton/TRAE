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
 * Line Dog —— 线条小狗（左）
 * 纯黑色线条风格：圆圆脑袋、耷拉耳朵、豆豆眼、圆鼻子
 * 参考：韩国线条小狗情侣头像风格
 */
export default function DogMaltese({
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
      {/* 身体 —— 圆圆的小身体 */}
      <path
        d="M85 190 q20 -15 35 -5 q5 5 0 10 q-10 8 -35 5 z"
        fill="none"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 前腿 */}
      <path
        d="M90 200 l-3 15 l10 0"
        fill="none"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* 尾巴 —— 带摇摆动画 */}
      <g
        className={wag ? 'animate-wag' : ''}
        style={{ transformOrigin: '145px 185px' }}
      >
        <path
          d="M135 185 q15 -5 20 -20 q-3 12 -15 20 z"
          fill="none"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* 左耳朵 —— 耷拉下来的长耳（马尔济斯） */}
      <path
        d="M70 95 q-18 25 -8 55 q6 15 20 8 q8 -6 4 -15 q-5 -18 -8 -40 z"
        fill="none"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 左耳内的线条 */}
      <path
        d="M75 110 q-8 18 0 40"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* 右耳朵 —— 耷拉的长耳 */}
      <path
        d="M170 95 q18 25 8 55 q-6 13 -20 5 q-10 -8 -5 -20 q3 -15 12 -40 z"
        fill="none"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 右耳内的线条 */}
      <path
        d="M165 110 q8 18 0 40"
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

      {/* 头顶一小撮毛 */}
      <path
        d="M108 68 q5 -8 12 -2"
        fill="none"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M125 66 q5 -8 12 -4"
        fill="none"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* 腮红 —— 淡粉色 */}
      <ellipse cx="88" cy="125" rx="8" ry="5" fill="#FFB8C5" opacity="0.5" />
      <ellipse cx="152" cy="125" rx="8" ry="5" fill="#FFB8C5" opacity="0.5" />

      {/* 眼睛 */}
      {mood === 'sleep' ? (
        <>
          <path
            d="M88 108 q8 -5 16 0"
            fill="none"
            stroke={stroke}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M136 108 q8 -5 16 0"
            fill="none"
            stroke={stroke}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </>
      ) : mood === 'daze' ? (
        <>
          <circle cx="96" cy="110" r="3.5" fill={stroke} />
          <circle cx="144" cy="110" r="3.5" fill={stroke} />
          <path d="M92 122 l8 -4" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M140 118 l8 4" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        </>
      ) : (
        <>
          {/* 豆豆眼 */}
          <ellipse cx="96" cy="110" rx="4.5" ry="5" fill={stroke} />
          <circle cx="98" cy="108" r="1.5" fill="white" />
          <ellipse cx="144" cy="110" rx="4.5" ry="5" fill={stroke} />
          <circle cx="146" cy="108" r="1.5" fill="white" />
        </>
      )}

      {/* 鼻子 —— 小圆鼻子 */}
      <ellipse cx="120" cy="128" rx="5" ry="4" fill={stroke} />

      {/* 嘴巴 */}
      {mood === 'happy' || mood === 'cheer' ? (
        <>
          <path
            d="M120 132 l0 6"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M108 140 q12 10 24 0"
            fill="none"
            stroke={stroke}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* 吐舌头 */}
          {mood === 'cheer' && (
            <ellipse cx="120" cy="146" rx="4" ry="5" fill="#FFB8C5" stroke={stroke} strokeWidth="1.5" />
          )}
        </>
      ) : mood === 'hug' ? (
        <>
          <path
            d="M120 132 l0 4"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M112 140 q8 6 16 0"
            fill="none"
            stroke={stroke}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </>
      ) : mood === 'sleep' ? (
        <path
          d="M114 142 q6 3 12 0"
          fill="none"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M112 142 q8 -3 16 0"
          fill="none"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      )}

      {/* 举起的爪子（cheer 状态） */}
      {mood === 'cheer' && (
        <>
          <ellipse cx="55" cy="140" rx="8" ry="10" fill="none" stroke={stroke} strokeWidth="2.5" />
          <path d="M51 143 l-2 3 M55 144 l0 4 M59 143 l2 3" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}

      {/* 拥抱状态：小小爱心 */}
      {mood === 'hug' && (
        <path
          d="M120 58 c-3 -4 -8 -2 -8 2 c0 4 8 8 8 8 c0 0 8 -4 8 -8 c0 -4 -5 -6 -8 -2 z"
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
        她
      </text>
    </svg>
  )
}
