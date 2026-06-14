import type { CSSProperties } from 'react'

type Mood = 'happy' | 'sleep' | 'cheer' | 'hug' | 'daze' | 'default'

interface Props {
  mood?: Mood
  size?: number
  className?: string
  style?: CSSProperties
  wag?: boolean
}

/**
 * 原创简笔线条小狗（SVG）
 * - 黑色/深棕色线条
 * - 圆圆的头、小耳朵、简单表情
 * - 支持多种状态：happy / sleep / cheer / hug / daze / default
 */
export default function DogIllustration({
  mood = 'default',
  size = 200,
  className = '',
  style,
  wag = false,
}: Props) {
  const stroke = '#3E2E22'
  const strokeLg = 3.2
  const strokeSm = 2.4

  const eyes = renderEyes(mood)
  const mouth = renderMouth(mood)
  const extra = renderExtra(mood)
  const blushOpacity = mood === 'happy' || mood === 'hug' ? 0.55 : 0.25

  return (
    <svg
      viewBox="0 0 240 240"
      width={size}
      height={size}
      className={className}
      style={style}
      aria-label="线条小狗"
    >
      {/* 地面阴影 */}
      <ellipse cx="120" cy="215" rx="70" ry="7" fill="#000" opacity="0.06" />

      {/* 尾巴（带抖动动画） */}
      <g
        style={{
          transformOrigin: '70px 160px',
          animation: wag ? 'wag 1.4s ease-in-out infinite' : undefined,
        }}
      >
        <path
          d="M70 160 C 40 150, 28 125, 48 110"
          fill="none"
          stroke={stroke}
          strokeWidth={strokeLg}
          strokeLinecap="round"
        />
        <circle cx="48" cy="108" r="4" fill={stroke} />
      </g>

      {/* 身体 */}
      <path
        d="M80 180 C 70 150, 85 130, 110 128 L 170 128 C 195 130, 205 150, 195 180 C 190 200, 165 208, 140 206 L 115 206 C 95 208, 85 200, 80 180 Z"
        fill="#FFF4D6"
        stroke={stroke}
        strokeWidth={strokeLg}
        strokeLinejoin="round"
      />

      {/* 前脚 */}
      <path
        d="M108 200 L 108 218"
        stroke={stroke}
        strokeWidth={strokeLg}
        strokeLinecap="round"
      />
      <path
        d="M168 200 L 168 218"
        stroke={stroke}
        strokeWidth={strokeLg}
        strokeLinecap="round"
      />

      {/* 头 */}
      <g>
        {/* 左耳（下垂） */}
        <path
          d="M86 98 C 74 96, 70 118, 82 132 C 90 140, 102 136, 102 126 C 100 112, 94 100, 86 98 Z"
          fill="#F6DCB0"
          stroke={stroke}
          strokeWidth={strokeLg}
          strokeLinejoin="round"
        />
        {/* 右耳 */}
        <path
          d="M190 98 C 202 96, 208 118, 196 132 C 188 140, 176 136, 176 126 C 178 112, 184 100, 190 98 Z"
          fill="#F6DCB0"
          stroke={stroke}
          strokeWidth={strokeLg}
          strokeLinejoin="round"
        />
        {/* 脸 */}
        <circle
          cx="138"
          cy="110"
          r="54"
          fill="#FFF6DC"
          stroke={stroke}
          strokeWidth={strokeLg}
        />
        {/* 腮红 */}
        <ellipse cx="108" cy="124" rx="8" ry="5" fill="#FFB8C0" opacity={blushOpacity} />
        <ellipse cx="168" cy="124" rx="8" ry="5" fill="#FFB8C0" opacity={blushOpacity} />

        {/* 眼睛 */}
        {eyes}
        {/* 鼻子 */}
        <ellipse cx="138" cy="118" rx="5" ry="4" fill={stroke} />
        {/* 嘴巴 */}
        {mouth}
      </g>

      {/* 额外装饰（举爪子/抱抱/睡觉Z） */}
      {extra}

      {/* 顶部"呆毛" */}
      <path
        d="M128 58 q 4 -6 10 0"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeSm}
        strokeLinecap="round"
      />
    </svg>
  )

  function renderEyes(m: Mood) {
    if (m === 'sleep') {
      return (
        <>
          <path
            d="M110 104 q 10 6 20 0"
            fill="none"
            stroke={stroke}
            strokeWidth={strokeSm}
            strokeLinecap="round"
          />
          <path
            d="M148 104 q 10 6 20 0"
            fill="none"
            stroke={stroke}
            strokeWidth={strokeSm}
            strokeLinecap="round"
          />
        </>
      )
    }
    if (m === 'happy' || m === 'hug') {
      return (
        <>
          <path
            d="M110 106 q 10 -10 20 0"
            fill="none"
            stroke={stroke}
            strokeWidth={strokeSm}
            strokeLinecap="round"
          />
          <path
            d="M148 106 q 10 -10 20 0"
            fill="none"
            stroke={stroke}
            strokeWidth={strokeSm}
            strokeLinecap="round"
          />
        </>
      )
    }
    if (m === 'cheer') {
      return (
        <>
          <path
            d="M110 108 l 18 -6"
            stroke={stroke}
            strokeWidth={strokeSm}
            strokeLinecap="round"
          />
          <path
            d="M168 108 l -18 -6"
            stroke={stroke}
            strokeWidth={strokeSm}
            strokeLinecap="round"
          />
        </>
      )
    }
    if (m === 'daze') {
      return (
        <>
          <circle cx="120" cy="106" r="3.2" fill={stroke} />
          <circle cx="156" cy="106" r="3.2" fill={stroke} />
        </>
      )
    }
    // default
    return (
      <g style={{ transformOrigin: '138px 106px', animation: 'blink 4s ease-in-out infinite' }}>
        <ellipse cx="120" cy="106" rx="3.2" ry="4" fill={stroke} />
        <ellipse cx="156" cy="106" rx="3.2" ry="4" fill={stroke} />
        <circle cx="121" cy="105" r="1" fill="#fff" />
        <circle cx="157" cy="105" r="1" fill="#fff" />
      </g>
    )
  }

  function renderMouth(m: Mood) {
    if (m === 'happy' || m === 'cheer' || m === 'hug') {
      return (
        <path
          d="M128 126 q 10 10 20 0"
          fill="none"
          stroke={stroke}
          strokeWidth={strokeSm}
          strokeLinecap="round"
        />
      )
    }
    if (m === 'sleep' || m === 'daze') {
      return (
        <path
          d="M130 126 q 8 4 16 0"
          fill="none"
          stroke={stroke}
          strokeWidth={strokeSm}
          strokeLinecap="round"
        />
      )
    }
    return (
      <>
        <path
          d="M138 122 l 0 6"
          stroke={stroke}
          strokeWidth={strokeSm}
          strokeLinecap="round"
        />
        <path
          d="M128 128 q 10 8 20 0"
          fill="none"
          stroke={stroke}
          strokeWidth={strokeSm}
          strokeLinecap="round"
        />
      </>
    )
  }

  function renderExtra(m: Mood) {
    if (m === 'sleep') {
      return (
        <g fill="none" stroke={stroke} strokeWidth={strokeSm} strokeLinecap="round">
          <path d="M180 70 l 0 -10 l 8 0" />
          <path d="M196 58 l 0 -10 l 8 0" />
          <path d="M212 46 l 0 -10 l 8 0" />
        </g>
      )
    }
    if (m === 'cheer') {
      return (
        <g>
          {/* 举起的右爪 */}
          <path
            d="M195 140 q 18 -30 40 -28"
            fill="none"
            stroke={stroke}
            strokeWidth={strokeLg}
            strokeLinecap="round"
          />
          <circle cx="234" cy="110" r="10" fill="#FFF4D6" stroke={stroke} strokeWidth={strokeLg} />
          {/* 小星星 */}
          <g fill="#FFBE5B">
            <path d="M220 80 l 2 6 l 6 2 l -6 2 l -2 6 l -2 -6 l -6 -2 l 6 -2 z" />
            <path d="M250 95 l 1.5 4.5 l 4.5 1.5 l -4.5 1.5 l -1.5 4.5 l -1.5 -4.5 l -4.5 -1.5 l 4.5 -1.5 z" />
          </g>
        </g>
      )
    }
    if (m === 'hug') {
      return (
        <g fill="none" stroke={stroke} strokeWidth={strokeLg} strokeLinecap="round">
          {/* 环抱的前爪 */}
          <path d="M108 180 q 10 -20 30 -20 q 20 0 30 20" />
          {/* 心形 */}
          <path
            d="M156 170 c -4 -6 -14 -4 -14 3 c 0 6 14 14 14 14 c 0 0 14 -8 14 -14 c 0 -7 -10 -9 -14 -3 z"
            fill="#FFB8C0"
            stroke={stroke}
            strokeWidth={strokeSm}
            strokeLinejoin="round"
          />
        </g>
      )
    }
    return null
  }
}
