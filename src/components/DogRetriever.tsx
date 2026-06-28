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
 * 浅棕垂耳小狗（线条小狗风格）
 * 光滑描边 + 垂耳 + 蓝色领结 + 红色项圈 + 小圆点眼 + U形笑嘴
 */
export default function DogRetriever({
  mood = 'happy',
  size = 180,
  wag = false,
  className = '',
  style,
}: Props) {
  const STROKE = '#2A2A2A'
  const FILL = '#E8C89A' // 浅棕黄色
  const BLUE = '#A8D0F0' // 蓝色领结
  const RED = '#FF7A7A' // 红色项圈
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
      {/* 尾巴 —— 右侧小圆尾 */}
      <g
        className={wag ? 'animate-wag' : ''}
        style={{ transformOrigin: '190px 175px' }}
      >
        <path
          d="M190 180 q15 -5 12 -18 q-3 -12 -15 -10 q-5 1 -6 8"
          fill={FILL}
          stroke={STROKE}
          strokeWidth={SW}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* 尾巴小线条 */}
        <path d="M195 166 q3 -1 5 0" fill="none" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <path d="M196 172 q3 -1 5 0" fill="none" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      </g>

      {/* 身体 —— 圆角矩形身体（光滑边） */}
      <path
        d="M72 125
           q-12 0 -14 12 q-3 18 6 30 q5 10 16 10
           l52 0
           q12 0 16 -10 q9 -12 6 -30 q-2 -12 -14 -12
           l-70 0 z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 项圈（红色） */}
      <path
        d="M62 135 q8 -5 30 -5 q22 0 60 0 q22 0 30 5"
        fill="none"
        stroke={RED}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M62 135 q8 -5 30 -5 q22 0 60 0 q22 0 30 5"
        fill="none"
        stroke={STROKE}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />

      {/* 左小短腿 */}
      <ellipse cx="95" cy="215" rx="12" ry="8" fill={FILL} stroke={STROKE} strokeWidth={SW} />
      {/* 右小短腿 */}
      <ellipse cx="145" cy="215" rx="12" ry="8" fill={FILL} stroke={STROKE} strokeWidth={SW} />

      {/* 左手臂（前爪） */}
      <ellipse cx="75" cy="170" rx="9" ry="14" fill={FILL} stroke={STROKE} strokeWidth={SW} />
      {/* 右手臂 */}
      <ellipse cx="165" cy="170" rx="9" ry="14" fill={FILL} stroke={STROKE} strokeWidth={SW} />

      {/* 左耳朵 —— 垂耳（向下耷拉） */}
      <path
        d="M65 100
           q-8 -10 -5 -30 q3 -18 18 -20
           q10 -1 15 8
           q3 10 0 18
           q-4 10 -18 18
           q-8 4 -10 6 z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      {/* 耳朵内折线条 */}
      <path d="M68 85 q6 8 12 18" fill="none" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />

      {/* 右耳朵 —— 垂耳 */}
      <path
        d="M175 100
           q8 -10 5 -30 q-3 -18 -18 -20
           q-10 -1 -15 8
           q-3 10 0 18
           q4 10 18 18
           q8 4 10 6 z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      {/* 耳朵内折线条 */}
      <path d="M172 85 q-6 8 -12 18" fill="none" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />

      {/* 头 —— 大圆头（光滑边） */}
      <ellipse
        cx="120"
        cy="108"
        rx="55"
        ry="50"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />

      {/* 头顶平滑小凸起 */}
      <path
        d="M112 65 q5 -8 15 -6 q8 2 12 6"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />

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

      {/* 蓝色领结 */}
      <g transform="translate(120, 148)">
        {/* 左边结 */}
        <path d="M-2 0 q-20 -8 -22 -14 q-6 -8 2 -14 q10 -6 20 0 q-6 10 0 28 z" fill={BLUE} stroke={STROKE} strokeWidth={SW - 0.5} strokeLinejoin="round" />
        {/* 右边结 */}
        <path d="M2 0 q20 -8 22 -14 q6 -8 -2 -14 q-10 -6 -20 0 q6 10 0 28 z" fill={BLUE} stroke={STROKE} strokeWidth={SW - 0.5} strokeLinejoin="round" />
        {/* 中间扣 */}
        <ellipse cx="0" cy="-7" rx="5" ry="6" fill={BLUE} stroke={STROKE} strokeWidth={SW - 0.5} />
        <circle cx="0" cy="-8" r="1.5" fill="white" opacity="0.5" />
      </g>

      {/* 举起的小爪子（cheer） */}
      {mood === 'cheer' && (
        <>
          <ellipse cx="195" cy="145" rx="10" ry="12" fill={FILL} stroke={STROKE} strokeWidth={SW} />
          <path d="M192 147 l-2 4 M196 149 l0 5 M200 147 l2 4" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" />
        </>
      )}

      {/* 小爱心 */}
      {mood === 'hug' && (
        <path
          d="M120 40 c-3 -4 -8 -2 -8 2 c0 4 8 8 8 8 c0 0 8 -4 8 -8 c0 -4 -5 -6 -8 -2 z"
          fill="#FF7A8A"
          stroke={STROKE}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      )}
    </svg>
  )
}
