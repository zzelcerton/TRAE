import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import DogIllustration from '../components/DogIllustration'
import { QUOTES } from '../data/quotes'
import { storage, todayStr, MOOD_LABELS, MOOD_EMOJI, MOOD_MESSAGES } from '../utils/storage'

function pickByDate<T>(list: T[], date: string): T {
  const seed = date.split('-').reduce((acc, v) => acc + Number(v), 0)
  return list[seed % list.length]
}

export default function HomePage() {
  const today = todayStr()
  const greeting = useMemo(() => '今天也要被小狗治愈一下～', [])
  const todayQuote = useMemo(() => pickByDate(QUOTES, today), [today])

  const moods = storage.getMoods()
  const todayMood = moods.find((m) => m.date === today)

  const collected = storage.getCollected().length

  return (
    <div className="mx-auto max-w-xl px-4 pt-6 pb-28">
      {/* 问候 */}
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm text-softBrown">
            {new Date().toLocaleDateString('zh-CN', {
              month: 'long',
              day: 'numeric',
              weekday: 'long',
            })}
          </p>
          <h1 className="mt-1 text-2xl font-extrabold text-lineBrown">{greeting}</h1>
        </div>
      </header>

      {/* 小狗插画 */}
      <section className="card-base mt-5 p-6 flex flex-col items-center animate-pop">
        <div className="animate-float">
          <DogIllustration mood="happy" size={200} wag />
        </div>
        <p className="mt-2 text-lineBrown/80 text-sm">摇尾巴的小狗在等你呀 🐾</p>
      </section>

      {/* 今日心情入口 */}
      <section className="mt-5">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-lg font-extrabold text-lineBrown">今日心情</h2>
          <Link to="/mood" className="text-sm text-softBrown underline underline-offset-4">
            查看记录 →
          </Link>
        </div>
        <div className="card-base mt-3 p-5">
          {todayMood ? (
            <div className="flex items-center gap-3">
              <div className="text-3xl">{MOOD_EMOJI[todayMood.mood]}</div>
              <div className="flex-1">
                <div className="font-bold text-lineBrown">
                  今天是「{MOOD_LABELS[todayMood.mood]}」的一天
                </div>
                <div className="mt-1 text-sm text-softBrown">{todayMood.text}</div>
              </div>
              <Link to="/mood" className="btn-ghost">
                更新
              </Link>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="font-bold text-lineBrown">还没有记录今天的心情</div>
                <div className="mt-1 text-sm text-softBrown">
                  花 10 秒钟，告诉小狗你今天过得怎么样吧。
                </div>
              </div>
              <Link to="/mood" className="btn-primary">
                记一笔
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 今日语录 */}
      <section className="mt-5">
        <h2 className="text-lg font-extrabold text-lineBrown px-1">今日语录</h2>
        <Link to="/quotes" className="block mt-3 card-base p-5 hover:brightness-105 transition">
          <p className="text-lg leading-relaxed text-lineBrown font-bold">“{todayQuote}”</p>
          <div className="mt-3 flex items-center justify-between text-sm text-softBrown">
            <span>— 小狗说</span>
            <span>换一条 →</span>
          </div>
        </Link>
      </section>

      {/* 快捷入口 */}
      <section className="mt-5 grid grid-cols-2 gap-3">
        <Link
          to="/cards"
          className="card-base p-4 flex items-center gap-3 hover:translate-y-[-2px] transition"
        >
          <div className="rounded-2xl bg-softYellow/60 w-12 h-12 flex items-center justify-center text-xl">
            🎴
          </div>
          <div>
            <div className="font-extrabold text-lineBrown">卡片收集</div>
            <div className="text-xs text-softBrown">已收集 {collected} / 5</div>
          </div>
        </Link>
        <Link
          to="/quotes"
          className="card-base p-4 flex items-center gap-3 hover:translate-y-[-2px] transition"
        >
          <div className="rounded-2xl bg-softPink/70 w-12 h-12 flex items-center justify-center text-xl">
            💬
          </div>
          <div>
            <div className="font-extrabold text-lineBrown">治愈语录</div>
            <div className="text-xs text-softBrown">
              已收藏 {storage.getFavQuotes().length} 条
            </div>
          </div>
        </Link>
      </section>

      {/* 小提示 */}
      <section className="mt-6 px-2 text-xs text-softBrown/80 leading-relaxed text-center">
        {(() => {
          const hint =
            MOOD_MESSAGES[todayMood?.mood ?? 'normal']?.[0] ?? '今天也要对自己温柔一点哦。'
          return <p>· {hint} ·</p>
        })()}
      </section>
    </div>
  )
}
