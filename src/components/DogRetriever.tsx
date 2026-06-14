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
 * 汤姆猫 —— 蓝灰色小猫咪
 * 三角耳朵、白肚皮、白爪子、长胡须、粉色小鼻子
 */
export default function DogRetriever({
  mood = 'happy',
  size = 180,
  wag = false,
  className = '',
  style,
}: Props) {
  const STROKE = '#2A2A2A' // 近黑描边
  const FILL = '#7F8C8D' // 主蓝灰
  const FILL_DARK = '#5D6B6C' // 斑纹深一点
  const FILL_BELLY = '#F5E6D3' // 肚皮米白
  const SW = 3.5

  return (
    <svg
      width={size}
      viewBox="0 0 240 240"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* 身体 —— 圆胖肚子 */}
      <path
        d="M70 208 q-5 -30 25 -35 q10 -3 25 -3 q15 0 30 5 q18 5 20 25 q2 15 -10 22 q-15 8 -90 -14 z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 肚皮 */}
      <ellipse cx="120" cy="198" rx="30" ry="18" fill={FILL_BELLY} stroke={STROKE} strokeWidth="1.8" opacity="0.85" />

      {/* 白爪子（左） */}
      <ellipse cx="95" cy="218" rx="9" ry="7" fill={FILL_BELLY} stroke={STROKE} strokeWidth={SW} />
      {/* 白爪子（右） */}
      <ellipse cx="150" cy="218" rx="9" ry="7" fill={FILL_BELLY} stroke={STROKE} strokeWidth={SW} />

      {/* 尾巴 —— 长长的猫尾巴（右边） */}
      <g
        className={wag ? 'animate-wag' : ''}
        style={{ transformOrigin: '190px 200px' }}
      >
        <path
          d="M190 200 q25 -5 30 -25 q3 -20 -10 -25 q-12 -5 -18 5 q-5 15 -5 35 z"
          fill={FILL}
          stroke={STROKE}
          strokeWidth={SW}
          strokeLinejoin="round"
        />
        {/* 尾巴末端浅色 */}
        <ellipse cx="208" cy="160" rx="8" ry="6" fill={FILL_BELLY} stroke={STROKE} strokeWidth="1.8" opacity="0.8" />
      </g>

      {/* 左耳朵 —— 尖尖三角（猫耳！） */}
      <path
        d="M78 85 q-5 -35 25 -40 q10 -2 18 15 q-5 15 -30 20 z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      {/* 耳朵内部粉色 */}
      <path d="M88 78 q0 -15 15 -18 q-3 10 -10 20 z" fill="#F5B8A0" opacity="0.85" />

      {/* 右耳朵 —— 尖尖三角 */}
      <path
        d="M162 85 q5 -35 -25 -40 q-10 -2 -18 15 q5 15 30 20 z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      {/* 耳朵内部粉色 */}
      <path d="M152 78 q0 -15 -15 -18 q3 10 10 20 z" fill="#F5B8A0" opacity="0.85" />

      {/* 头 —— 大圆头 */}
      <ellipse
        cx="120"
        cy="115"
        rx="58"
        ry="52"
        fill={FILL}
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />

      {/* 额头斑纹 —— 汤姆的斑纹（几道条纹） */}
      <path d="M110 70 q3 8 0 16" fill="none" stroke={FILL_DARK} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M120 68 q3 8 0 18" fill="none" stroke={FILL_DARK} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M130 70 q3 8 0 16" fill="none" stroke={FILL_DARK} strokeWidth="2" strokeLinecap="round" opacity="0.6" />

      {/* 脸颊白色 —— 猫的口鼻区是白的 */}
      <ellipse cx="120" cy="142" rx="25" ry="18" fill={FILL_BELLY} opacity="0.95" stroke={STROKE} strokeWidth="1.5" />

      {/* 腮红 —— 粉粉小圆 */}
      <ellipse cx="78" cy="130" rx="9" ry="7" fill="#FFB8C5" stroke={STROKE} strokeWidth="1.5" opacity="0.8" />
      <ellipse cx="162" cy="130" rx="9" ry="7" fill="#FFB8C5" stroke={STROKE} strokeWidth="1.5" opacity="0.8" />

      {/* 眼睛 —— 大大圆圆绿眼睛（汤姆猫的亮绿色眼睛） */}
      {mood === 'sleep' ? (
        <>
          <path d="M88 112 q10 -7 22 0" fill="none" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
          <path d="M130 112 q10 -7 22 0" fill="none" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
        </>
      ) : mood === 'daze' ? (
        <>
          <circle cx="99" cy="115" r="6" fill={STROKE} />
          <circle cx="141" cy="115" r="6" fill={STROKE} />
          {/* 迷糊螺旋 */}
          <path d="M94 112 l10 6 M94 120 l10 -6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M136 112 l10 6 M136 120 l10 -6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </>
      ) : (
        <>
          {/* 左眼 */}
          <ellipse cx="99" cy="115" rx="10" ry="12" fill="white" stroke={STROKE} strokeWidth="2" />
          <ellipse cx="100" cy="117" rx="6" ry="8" fill="#8BC34A" /> {/* 亮绿 */}
          <circle cx="100" cy="119" r="5" fill={STROKE} />
          <circle cx="102" cy="115" r="2" fill="white" />
          <circle cx="98" cy="123" r="1.2" fill="white" opacity="0.8" />

          {/* 右眼 */}
          <ellipse cx="141" cy="115" rx="10" ry="12" fill="white" stroke={STROKE} strokeWidth="2" />
          <ellipse cx="142" cy="117" rx="6" ry="8" fill="#8BC34A" />
          <circle cx="142" cy="119" r="5" fill={STROKE} />
          <circle cx="144" cy="115" r="2" fill="white" />
          <circle cx="140" cy="123" r="1.2" fill="white" opacity="0.8" />
        </>
      )}

      {/* 鼻子 —— 粉色倒三角小鼻子（猫鼻！） */}
      <path d="M112 138 q8 -3 16 0 l-8 7 z" fill="#FF8FA3" stroke={STROKE} strokeWidth="2" strokeLinejoin="round" />

      {/* 嘴巴 —— 猫嘴小微笑 */}
      {mood === 'happy' || mood === 'cheer' ? (
        <>
          <path d="M120 145 l0 3" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
          <path d="M105 152 q15 10 30 0" fill="none" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
          {/* 一点点红色小舌头 */}
          {mood === 'cheer' && (
            <ellipse cx="120" cy="162" rx="5" ry="6" fill="#FF8FA3" stroke={STROKE} strokeWidth="1.5" />
          )}
        </>
      ) : mood === 'hug' ? (
        <>
          <path d="M120 145 l0 3" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
          <path d="M108 152 q12 7 24 0" fill="none" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
        </>
      ) : mood === 'sleep' ? (
        <path d="M112 152 q8 5 16 0" fill="none" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
      ) : (
        <path d="M112 152 q8 -3 16 0" fill="none" stroke={STROKE} strokeWidth={SW - 0.5} strokeLinecap="round" />
      )}

      {/* 胡须 —— 猫的长胡须 */}
      <path d="M55 130 l-25 -3 M55 138 l-28 0 M55 146 l-25 3" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M185 130 l25 -3 M185 138 l28 0 M185 146 l25 3" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />

      {/* 举起的小爪子 */}
      {mood === 'cheer' && (
        <>
          <ellipse cx="188" cy="148" rx="10" ry="12" fill={FILL_BELLY} stroke={STROKE} strokeWidth={SW} />
          <path d="M183 150 l-3 4 M188 152 l0 5 M193 150 l3 4" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" />
        </>
      )}

      {/* 小爱心气泡 */}
      {mood === 'hug' && (
        <path d="M120 55 c-3 -4 -8 -2 -8 2 c0 4 8 8 8 8 c0 0 8 -4 8 -8 c0 -4 -5 -6 -8 -2 z" fill="#FFB8C5" stroke={STROKE} strokeWidth="2" strokeLinejoin="round" />
      )}
    </svg>
  )
}
