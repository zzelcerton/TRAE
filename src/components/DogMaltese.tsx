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
 * 杰瑞鼠 —— 棕黄色小老鼠
 * 大圆耳朵、粉鼻子、小门牙、长尾巴
 */
export default function DogMaltese({
  mood = 'happy',
  size = 180,
  wag = false,
  className = '',
  style,
}: Props) {
  const STROKE = '#3A2A1F' // 深棕描边
  const FILL = '#C89670' // 主体棕黄
  const FILL_BELLY = '#E8C9A0' // 肚子浅米色
  const FILL_EAR = '#F5B8A0' // 耳朵内粉
  const SW = 3.5

  return (
    <svg
      width={size}
      viewBox="0 0 240 240"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* 身体 —— 圆滚滚小肚子 */}
      <path
        d="M75 205 q-5 -28 25 -33 q10 -3 20 -3 q15 0 30 5 q18 5 15 28 q-2 15 -15 18 q-20 5 -75 -15 z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 肚子浅色 */}
      <ellipse cx="120" cy="195" rx="28" ry="15" fill={FILL_BELLY} stroke={STROKE} strokeWidth="1.8" opacity="0.8" />

      {/* 小短腿（左） */}
      <ellipse cx="95" cy="218" rx="8" ry="6" fill={FILL} stroke={STROKE} strokeWidth={SW} />
      {/* 小短腿（右） */}
      <ellipse cx="150" cy="218" rx="8" ry="6" fill={FILL} stroke={STROKE} strokeWidth={SW} />

      {/* 尾巴 —— 长长的粉色尾巴，带摇摆 */}
      <g
        className={wag ? 'animate-wag' : ''}
        style={{ transformOrigin: '60px 195px' }}
      >
        <path
          d="M60 195 q-30 5 -35 -15 q-3 -15 15 -18 q18 -3 18 15 q0 10 -8 12 z"
          fill={FILL}
          stroke={STROKE}
          strokeWidth={SW}
          strokeLinejoin="round"
        />
      </g>

      {/* 左耳朵 —— 大大圆耳朵（杰瑞标志性） */}
      <ellipse cx="80" cy="75" rx="22" ry="26" fill={FILL} stroke={STROKE} strokeWidth={SW} />
      <ellipse cx="80" cy="80" rx="12" ry="16" fill={FILL_EAR} />

      {/* 右耳朵 */}
      <ellipse cx="160" cy="75" rx="22" ry="26" fill={FILL} stroke={STROKE} strokeWidth={SW} />
      <ellipse cx="160" cy="80" rx="12" ry="16" fill={FILL_EAR} />

      {/* 头 —— 大圆头 */}
      <ellipse cx="120" cy="115" rx="52" ry="50" fill={FILL} stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" />

      {/* 头顶小撮毛（可爱小尖角） */}
      <path d="M115 68 q2 -8 8 -3 q-3 5 -8 6 z" fill={FILL} stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" />
      <path d="M125 68 q3 -8 8 -3 q-3 5 -8 6 z" fill={FILL} stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" />

      {/* 腮红 —— 粉粉小圆 */}
      <ellipse cx="82" cy="135" rx="8" ry="6" fill="#FFB8C5" stroke={STROKE} strokeWidth="1.5" opacity="0.8" />
      <ellipse cx="158" cy="135" rx="8" ry="6" fill="#FFB8C5" stroke={STROKE} strokeWidth="1.5" opacity="0.8" />

      {/* 眼睛 —— 大大圆圆绿眼睛（杰瑞标志性的绿眼） */}
      {mood === 'sleep' ? (
        <>
          <path d="M88 115 q10 -6 20 0" fill="none" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
          <path d="M132 115 q10 -6 20 0" fill="none" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
        </>
      ) : mood === 'daze' ? (
        <>
          <circle cx="98" cy="118" r="5" fill={STROKE} />
          <circle cx="142" cy="118" r="5" fill={STROKE} />
          {/* 小螺旋迷糊眼 */}
          <path d="M93 115 l10 6 M93 121 l10 -6" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
          <path d="M137 115 l10 6 M137 121 l10 -6" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        </>
      ) : (
        <>
          {/* 左眼 —— 绿底+黑瞳+白高光 */}
          <ellipse cx="98" cy="118" rx="8" ry="9" fill="white" stroke={STROKE} strokeWidth="2" />
          <ellipse cx="98" cy="119" rx="5" ry="6" fill="#7FBF6E" /> {/* 绿色 */}
          <circle cx="99" cy="120" r="3.5" fill={STROKE} />
          <circle cx="100" cy="117" r="1.5" fill="white" />
          <circle cx="96" cy="122" r="1" fill="white" opacity="0.8" />

          {/* 右眼 */}
          <ellipse cx="142" cy="118" rx="8" ry="9" fill="white" stroke={STROKE} strokeWidth="2" />
          <ellipse cx="142" cy="119" rx="5" ry="6" fill="#7FBF6E" />
          <circle cx="143" cy="120" r="3.5" fill={STROKE} />
          <circle cx="144" cy="117" r="1.5" fill="white" />
          <circle cx="140" cy="122" r="1" fill="white" opacity="0.8" />
        </>
      )}

      {/* 鼻子 —— 粉色小鼻子（老鼠标志性！） */}
      <ellipse cx="120" cy="138" rx="8" ry="5" fill="#FF8FA3" stroke={STROKE} strokeWidth="2" />
      <circle cx="117" cy="136" r="1.5" fill="white" opacity="0.7" />

      {/* 嘴巴 —— 小微笑+门牙 */}
      {mood === 'happy' || mood === 'cheer' ? (
        <>
          <path d="M120 143 l0 4" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
          <path d="M105 150 q15 10 30 0" fill="none" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
          {/* 两颗小门牙 —— 老鼠标志性 */}
          <rect x="113" y="152" width="6" height="8" fill="white" stroke={STROKE} strokeWidth="1.5" rx="1" />
          <rect x="121" y="152" width="6" height="8" fill="white" stroke={STROKE} strokeWidth="1.5" rx="1" />
          {mood === 'cheer' && (
            <ellipse cx="120" cy="168" rx="5" ry="6" fill="#FFB8C5" stroke={STROKE} strokeWidth="1.8" />
          )}
        </>
      ) : mood === 'hug' ? (
        <>
          <path d="M120 143 l0 4" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
          <path d="M108 150 q12 7 24 0" fill="none" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
        </>
      ) : mood === 'sleep' ? (
        <path d="M112 150 q8 5 16 0" fill="none" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
      ) : (
        <path d="M112 150 q8 -3 16 0" fill="none" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
      )}

      {/* 小胡须 —— 老鼠的小胡须细节 */}
      <path d="M65 132 l-10 -2 M68 138 l-10 2" stroke={STROKE} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M175 132 l10 -2 M172 138 l10 2" stroke={STROKE} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />

      {/* 举起的小爪子（cheer状态） */}
      {mood === 'cheer' && (
        <>
          <ellipse cx="55" cy="150" rx="9" ry="11" fill={FILL} stroke={STROKE} strokeWidth={SW} />
          <path d="M52 152 l-2 3 M56 154 l0 4 M60 152 l2 3" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" />
        </>
      )}

      {/* 小爱心气泡 */}
      {mood === 'hug' && (
        <path d="M120 50 c-3 -4 -8 -2 -8 2 c0 4 8 8 8 8 c0 0 8 -4 8 -8 c0 -4 -5 -6 -8 -2 z" fill="#FFB8C5" stroke={STROKE} strokeWidth="2" strokeLinejoin="round" />
      )}
    </svg>
  )
}
