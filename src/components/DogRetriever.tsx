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
 * 小金毛 —— 治愈系圆滚滚小短腿
 * 奶黄小狗的哥哥版本（稍深一点的金色）
 */
export default function DogRetriever({
  mood = 'happy',
  size = 180,
  wag = false,
  className = '',
  style,
}: Props) {
  const STROKE = '#4A3A2E'
  const FILL = '#FFE0B8' // 金色（比奶黄更深一点）
  const FILL_BODY = '#FFD4A0'
  const FILL_EAR = '#FFC480' // 耳朵最深
  const SW = 3.5

  return (
    <svg
      width={size}
      viewBox="0 0 240 240"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* 身体 */}
      <path
        d="M65 200 q-5 -30 30 -35 q10 -3 25 -3 q15 0 30 5 q20 5 25 25 q3 15 -10 25 q-15 10 -50 8 z"
        fill={FILL_BODY}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 短腿 */}
      <ellipse cx="95" cy="215" rx="10" ry="8" fill={FILL_BODY} stroke={STROKE} strokeWidth={SW} />
      <ellipse cx="150" cy="215" rx="10" ry="8" fill={FILL_BODY} stroke={STROKE} strokeWidth={SW} />

      {/* 尾巴（反方向摇摆 —— 金毛尾巴在右边 */}
      <g
        className={wag ? 'animate-wag' : ''}
        style={{ transformOrigin: '185px 180px' }}
      >
          <ellipse cx="188" cy="188" rx="10" ry="12" fill={FILL_BODY} stroke={STROKE} strokeWidth={SW} />
          <path d="M192 180 q3 3 2 8" fill="none" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
      </g>

      {/* 左耳朵 —— 金毛垂耳 */}
      <ellipse cx="78" cy="120" rx="15" ry="28" fill={FILL_EAR} stroke={STROKE} strokeWidth={SW} transform="rotate(-25 78 120)" />
      <path d="M75 105 q-8 18 -3 35" fill="none" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />

      {/* 右耳朵 */}
      <ellipse cx="162" cy="120" rx="15" ry="28" fill={FILL_EAR} stroke={STROKE} strokeWidth={SW} transform="rotate(25 162 120)" />
      <path d="M165 105 q8 18 3 35" fill="none" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />

      {/* 头 —— 大头 */}
      <ellipse cx="120" cy="105" rx="55" ry="52" fill={FILL} stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" />

      {/* 头顶毛毛（金毛三撮更蓬松） */}
      <path d="M105 60 q3 -9 8 -2" fill={FILL} stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" />
      <path d="M118 55 q3 -10 8 -3" fill={FILL} stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" />
      <path d="M133 58 q4 -9 8 -2" fill={FILL} stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" />

      {/* 腮红 */}
      <ellipse cx="82" cy="130" rx="9" ry="7" fill="#FFB8C5" stroke={STROKE} strokeWidth="1.5" />
      <ellipse cx="158" cy="130" rx="9" ry="7" fill="#FFB8C5" stroke={STROKE} strokeWidth="1.5" />

      {/* 眼睛 —— 大圆眼 */}
      {mood === 'sleep' ? (
        <>
          <path d="M88 112 q10 -6 20 0" fill="none" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
          <path d="M132 112 q10 -6 20 0" fill="none" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
        </>
      ) : mood === 'daze' ? (
        <>
          <circle cx="98" cy="115" r="4" fill={STROKE} />
          <circle cx="142" cy="115" r="4" fill={STROKE} />
        </>
      ) : (
        <>
          <ellipse cx="98" cy="115" rx="7" ry="7" fill="white" stroke={STROKE} strokeWidth="2" />
          <circle cx="99" cy="114" r="4.5" fill={STROKE} />
          <circle cx="100" cy="112" r="1.8" fill="white" />
          <ellipse cx="142" cy="115" rx="7" ry="7" fill="white" stroke={STROKE} strokeWidth="2" />
          <circle cx="143" cy="114" r="4.5" fill={STROKE} />
          <circle cx="144" cy="112" r="1.8" fill="white" />
        </>
      )}

      {/* 鼻子 */}
      <ellipse cx="120" cy="132" rx="7" ry="5" fill={STROKE} />
      <circle cx="118" cy="130" r="1.5" fill="white" opacity="0.7" />

      {/* 嘴巴 */}
      {mood === 'happy' || mood === 'cheer' ? (
        <>
          <path d="M120 137 l0 5" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
          <path d="M108 145 q12 10 24 0" fill="none" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
          {mood === 'cheer' && (
            <ellipse cx="120" cy="152" rx="5" ry="6" fill="#FFB8C5" stroke={STROKE} strokeWidth="1.8" />
          )}
        </>
      ) : mood === 'hug' ? (
        <>
          <path d="M120 137 l0 4" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
          <path d="M110 145 q10 8 20 0" fill="none" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
        </>
      ) : mood === 'sleep' ? (
        <path d="M112 145 q8 5 16 0" fill="none" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
      ) : (
        <path d="M112 145 q8 -3 16 0" fill="none" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
      )}

      {/* 举起的小爪子（Cheer状态 */}
      {mood === 'cheer' && (
        <>
          <ellipse cx="185" cy="150" rx="10" ry="12" fill={FILL} stroke={STROKE} strokeWidth={SW} />
          <path d="M182 152 l-2 4 M186 154 l0 5 M190 152 l2 4" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" />
        </>
      )}

      {/* 小爱心气泡 */}
      {mood === 'hug' && (
        <path d="M120 50 c-3 -4 -8 -2 -8 2 c0 4 8 8 8 8 c0 0 8 -4 8 -8 c0 -4 -5 -6 -8 -2 z" fill="#FFB8C5" stroke={STROKE} strokeWidth="2" strokeLinejoin="round" />
      )}
    </svg>
  )
}
