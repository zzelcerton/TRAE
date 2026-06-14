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
 * 奶黄小狗 —— 治愈系圆滚滚小短腿
 * 纯粗线条 + 圆眼睛 + 粉腮红 + 圆鼻子
 */
export default function DogMaltese({
  mood = 'happy',
  size = 180,
  wag = false,
  className = '',
  style,
}: Props) {
  const STROKE = '#4A3A2E' // 深棕描边（比纯黑更柔和）
  const FILL = '#FFF1DD' // 奶黄/米白色
  const FILL_BODY = '#FFE8D0' // 身体稍深一点的奶黄
  const SW = 3.5

  return (
    <svg
      width={size}
      viewBox="0 0 240 240"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* 身体 —— 更大更圆的身体（Q版大头短腿） */}
      <path
        d="M65 200 q-5 -30 30 -35 q10 -3 25 -3 q15 0 30 5 q20 5 25 25 q3 15 -10 25 q-15 10 -50 8 z"
        fill={FILL_BODY}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 左前腿（短腿） */}
      <ellipse cx="95" cy="215" rx="10" ry="8" fill={FILL_BODY} stroke={STROKE} strokeWidth={SW} />
      {/* 右前腿 */}
      <ellipse cx="150" cy="215" rx="10" ry="8" fill={FILL_BODY} stroke={STROKE} strokeWidth={SW} />

      {/* 尾巴 —— 圆尾巴，带摇摆 */}
      <g
        className={wag ? 'animate-wag' : ''}
        style={{ transformOrigin: '58px 180px' }}
      >
        <ellipse cx="55" cy="188" rx="10" ry="12" fill={FILL_BODY} stroke={STROKE} strokeWidth={SW} />
        <path d="M50 180 q-3 3 -2 8" fill="none" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
      </g>

      {/* 左耳朵 —— 下垂的松软大耳朵（马尔济斯） */}
      <path
        d="M75 85 q-18 25 -10 50 q5 12 18 8 q10 -5 8 -15 q-2 -20 -8 -35 q-2 -5 -8 -8 z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      {/* 耳朵内侧毛毛 */}
      <path d="M82 100 q-8 18 -2 38" fill="none" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />

      {/* 右耳朵 */}
      <path
        d="M165 85 q18 25 10 50 q-5 12 -18 8 q-10 -5 -8 -15 q2 -20 8 -35 q2 -5 8 -8 z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      {/* 耳朵内侧毛毛 */}
      <path d="M158 100 q8 18 2 38" fill="none" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />

      {/* 头 —— 超大圆圆头（头比身体大，更Q） */}
      <ellipse
        cx="120"
        cy="105"
        rx="55"
        ry="52"
        fill={FILL}
        stroke={STROKE}
        strokeLinejoin="round"
        strokeWidth={SW}
      />

      {/* 头顶毛毛 —— 头顶一撮毛毛（治愈感） */}
      <path
        d="M108 58 q3 -8 8 -3"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path
        d="M120 55 q3 -8 8 -2"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path
        d="M133 58 q4 -8 8 -2"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />

      {/* 腮红 —— 粉粉大圆（更明显） */}
      <ellipse cx="82" cy="130" rx="9" ry="7" fill="#FFB8C5" stroke={STROKE} strokeWidth="1.5" />
      <ellipse cx="158" cy="130" rx="9" ry="7" fill="#FFB8C5" stroke={STROKE} strokeWidth="1.5" />

      {/* 眼睛 —— 大大圆圆大眼睛（带眼白+黑瞳孔+小白高光，治愈系标配） */}
      {mood === 'sleep' ? (
        <>
          <path
            d="M88 112 q10 -6 20 0"
            fill="none"
            stroke={STROKE}
            strokeWidth={SW}
            strokeLinecap="round"
          />
          <path
            d="M132 112 q10 -6 20 0"
            fill="none"
            stroke={STROKE}
            strokeWidth={SW}
            strokeLinecap="round"
          />
        </>
      ) : mood === 'daze' ? (
        <>
          <circle cx="98" cy="115" r="4" fill={STROKE} />
          <circle cx="142" cy="115" r="4" fill={STROKE} />
        </>
      ) : (
        <>
          {/* 左眼白 */}
          <ellipse cx="98" cy="115" rx="7" ry="7" fill="white" stroke={STROKE} strokeWidth="2" />
          {/* 黑瞳孔（稍微偏上一点） */}
          <circle cx="99" cy="114" r="4.5" fill={STROKE} />
          {/* 高光 */}
          <circle cx="100" cy="112" r="1.8" fill="white" />

          <ellipse cx="142" cy="115" rx="7" ry="7" fill="white" stroke={STROKE} strokeWidth="2" />
          <circle cx="143" cy="114" r="4.5" fill={STROKE} />
          <circle cx="144" cy="112" r="1.8" fill="white" />
        </>
      )}

      {/* 鼻子 —— 圆鼻子（更圆） */}
      <ellipse cx="120" cy="132" rx="7" ry="5" fill={STROKE} />
      {/* 鼻子高光 */}
      <circle cx="118" cy="130" r="1.5" fill="white" opacity="0.7" />

      {/* 嘴巴 —— 可爱W形嘴巴 */}
      {mood === 'happy' || mood === 'cheer' ? (
        <>
          <path
            d="M120 137 l0 5"
            stroke={STROKE}
            strokeWidth={SW - 0.5}
            strokeLinecap="round"
          />
          <path
            d="M108 145 q12 10 24 0"
            fill="none"
            stroke={STROKE}
            strokeWidth={SW - 0.5}
            strokeLinecap="round"
          />
          {mood === 'cheer' && (
            <ellipse cx="120" cy="152" rx="5" ry="6" fill="#FFB8C5" stroke={STROKE} strokeWidth="1.8" />
          )}
        </>
      ) : mood === 'hug' ? (
        <>
          <path
            d="M120 137 l0 4"
            stroke={STROKE}
            strokeWidth={SW - 0.5}
            strokeLinecap="round"
          />
          <path
            d="M110 145 q10 8 20 0"
            fill="none"
            stroke={STROKE}
            strokeWidth={SW - 0.5}
            strokeLinecap="round"
          />
        </>
      ) : mood === 'sleep' ? (
        <path
          d="M112 145 q8 5 16 0"
          fill="none"
          stroke={STROKE}
          strokeWidth={SW - 0.5}
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M112 145 q8 -3 16 0"
          fill="none"
          stroke={STROKE}
          strokeWidth={SW - 0.5}
          strokeLinecap="round"
        />
      )}

      {/* 举起的小爪子 */}
      {mood === 'cheer' && (
        <>
          <ellipse cx="55" cy="150" rx="10" ry="12" fill={FILL} stroke={STROKE} strokeWidth={SW} />
          <path d="M52 152 l-2 4 M56 154 l0 5 M60 152 l2 4" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" />
        </>
      )}

      {/* 小爱心气泡 */}
      {mood === 'hug' && (
        <path
          d="M120 50 c-3 -4 -8 -2 -8 2 c0 4 8 8 8 8 c0 0 8 -4 8 -8 c0 -4 -5 -6 -8 -2 z"
          fill="#FFB8C5"
          stroke={STROKE}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      )}
    </svg>
  )
}
