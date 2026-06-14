import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import DogMaltese from '../components/DogMaltese'
import DogRetriever from '../components/DogRetriever'
import { QUOTES_MALTESE, QUOTES_RETRIEVER } from '../data/quotes'
import { storage, todayStr, MOOD_LABELS, MOOD_EMOJI } from '../utils/storage'

function pickByDate<T>(list: T[], date: string, offset = 0): T {
  const seed = date.split('-').reduce((acc, v) => acc + Number(v), 0) + offset
  return list[seed % list.length]
}

export default function HomePage() {
  const today = todayStr()
  const todayMalteseQuote = useMemo(
    () => pickByDate(QUOTES_MALTESE, today),
    [today],
  )
  const todayRetrieverQuote = useMemo(
    () => pickByDate(QUOTES_RETRIEVER, today, 3),
    [today],
  )

  const moods = storage.getMoods()
  const todayMood = moods.find((m) => m.date === today)
  const collected = storage.getCollected().length

  return (
    <div className="mx-auto max-w-xl px-4 pt-8 pb-32">
      {/* 标题 */}
      <header className="text-center">
        <p className="text-sm text-grayBrown">
          {new Date().toLocaleDateString('zh-CN', {
            month: 'long',
            day: 'numeric',
            weekday: 'long',
          })}
        </p>
        <h1 className="mt-2 text-3xl font-cute font-bold text-deepBrown">
          今天也要好好的呀 ♡
        </h1>
      </header>

      {/* 双小狗情侣头 */}
      <section className="mt-8">
        <div className="flex items-center justify-center gap-2">
          <div className="animate-float">
            <DogMaltese mood="happy" size={150} wag />
          </div>
          <div className="flex flex-col items-center text-softPink pb-12">
            <span className="text-3xl font-cute font-bold">♡</span>
          </div>
          <div className="animate-float" style={{ animationDelay: '0.6s' }}>
            <DogRetriever mood="cheer" size={150} wag />
          </div>
        </div>
      </section>

      {/* 今日心情 */}
      <section className="mt-10">
        <h2 className="section-title">今日心情</h2>
        <div className="mt-3 line-card p-5">
          {todayMood ? (
            <div className="flex items-center gap-3">
              <span className="text-3xl">{MOOD_EMOJI[todayMood.mood]}</span>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-deepBrown">
                  今天是「{MOOD_LABELS[todayMood.mood]}」的一天
                </div>
                {todayMood.text && (
                  <div className="mt-1 text-sm text-grayBrown truncate">
                    {todayMood.text}
                  </div>
                )}
              </div>
              <Link to="/mood" className="btn-primary text-sm py-2">
                更新
              </Link>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="font-bold text-deepBrown">记一笔今天的心情吧</div>
                <div className="mt-1 text-sm text-grayBrown">
                  写下此刻想说的话，就当小狗在听～
                </div>
              </div>
              <Link to="/mood" className="btn-primary text-sm whitespace-nowrap">
                去记录
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 今日双语录 */}
      <section className="mt-10">
        <h2 className="section-title">今天的小狗说</h2>
        <div className="mt-3 space-y-3">
          <div className="line-card p-5">
            <div className="flex items-start gap-3">
              <div className="w-14 h-14 flex-shrink-0">
                <DogMaltese mood="happy" size={56} />
              </div>
              <div className="flex-1 min-w-0 pt-2">
                <p className="text-base leading-relaxed text-deepBrown font-cute">
                  “{todayMalteseQuote}”
                </p>
              </div>
            </div>
          </div>
          <div className="line-card p-5">
            <div className="flex items-start gap-3">
              <div className="w-14 h-14 flex-shrink-0">
                <DogRetriever mood="cheer" size={56} />
              </div>
              <div className="flex-1 min-w-0 pt-2">
                <p className="text-base leading-relaxed text-deepBrown font-cute">
                  “{todayRetrieverQuote}”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 快捷入口 */}
      <section className="mt-10 grid grid-cols-2 gap-3">
        <Link to="/cards" className="line-card p-5 hover:-translate-y-0.5 transition">
          <div className="flex items-center justify-center mb-2">
            <DogRetriever mood="happy" size={60} />
          </div>
          <div className="text-center">
            <div className="font-bold text-deepBrown">小狗卡片</div>
            <div className="text-xs text-grayBrown mt-1">
              已收集 {collected} / {5}
            </div>
          </div>
        </Link>
        <Link to="/quotes" className="line-card p-5 hover:-translate-y-0.5 transition">
          <div className="flex items-center justify-center mb-2">
            <DogMaltese mood="hug" size={60} />
          </div>
          <div className="text-center">
            <div className="font-bold text-deepBrown">治愈语录</div>
            <div className="text-xs text-grayBrown mt-1">
              已收藏 {storage.getFavQuotes().length} 条
            </div>
          </div>
        </Link>
      </section>

      {/* 底部小提示 */}
      <section className="mt-12 text-center">
        <div className="inline-block">
          <p className="font-cute text-grayBrown text-sm">
            · 慢慢走，小狗会等你的 ·
          </p>
        </div>
      </section>
    </div>
  )
}
