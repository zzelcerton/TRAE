import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import DogMaltese from '../components/DogMaltese'
import DogRetriever from '../components/DogRetriever'
import { QUOTES_MALTESE, QUOTES_RETRIEVER } from '../data/quotes'
import { storage, todayStr, MOOD_LABELS, MOOD_EMOJI } from '../utils/storage'

function pickByDate<T>(list: T[], date: string): T {
  const seed = date.split('-').reduce((acc, v) => acc + Number(v), 0)
  return list[seed % list.length]
}

export default function HomePage() {
  const today = todayStr()
  const todayMalteseQuote = useMemo(
    () => pickByDate(QUOTES_MALTESE, today),
    [today],
  )
  const todayRetrieverQuote = useMemo(
    () => pickByDate(QUOTES_RETRIEVER, today),
    [today],
  )

  const moods = storage.getMoods()
  const todayMood = moods.find((m) => m.date === today)
  const collected = storage.getCollected().length

  return (
    <div className="mx-auto max-w-xl px-4 pt-6 pb-28">
      {/* 问候 */}
      <header className="text-center">
        <p className="text-sm text-softBrown">
          {new Date().toLocaleDateString('zh-CN', {
            month: 'long',
            day: 'numeric',
            weekday: 'long',
          })}
        </p>
        <h1 className="mt-1 text-3xl font-cute font-bold text-lineBrown">
          今天也要被小狗治愈一下～
        </h1>
      </header>

      {/* 双小狗插画 Hero */}
      <section className="card-base mt-5 p-4 animate-fadeUp">
        <div className="flex items-center justify-between">
          <div className="flex-1 flex flex-col items-center">
            <div className="animate-float">
              <DogMaltese mood="happy" size={140} wag />
            </div>
          </div>
          <div className="flex flex-col items-center text-2xl font-cute text-lineBrown">💕</div>
          <div className="flex-1 flex flex-col items-center">
            <div
              className="animate-float"
              style={{ animationDelay: '0.4s' }}
            >
              <DogRetriever mood="cheer" size={140} wag />
            </div>
          </div>
        </div>
        <p className="mt-1 text-center text-sm text-lineBrown/80 font-cute">
          马尔济斯 &amp; 小金毛在等你呀 🐾
        </p>
      </section>

      {/* 今日心情入口 */}
      <section className="mt-6">
        <h2 className="font-cute text-lg font-bold text-lineBrown px-1">
          今日心情
        </h2>
        <div className="card-base mt-3 p-5">
          {todayMood ? (
            <div className="flex items-center gap-3">
              <div className="text-3xl">{MOOD_EMOJI[todayMood.mood]}</div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-lineBrown">
                  今天是「{MOOD_LABELS[todayMood.mood]}」的一天
                </div>
                {todayMood.text && (
                  <div className="mt-1 text-sm text-softBrown truncate">
                    {todayMood.text}
                  </div>
                )}
              </div>
              <Link to="/mood" className="btn-primary px-4 py-2">
                更新
              </Link>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="font-bold text-lineBrown">还没有记录今天的心情</div>
                <div className="mt-1 text-sm text-softBrown">
                  花 10 秒钟，告诉小狗你今天过得怎么样吧。
                </div>
              </div>
              <Link to="/mood" className="btn-primary whitespace-nowrap">
                记一笔
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 今日双语录 */}
      <section className="mt-6">
        <h2 className="font-cute text-lg font-bold text-lineBrown px-1">今天的一句话</h2>
        <div className="mt-3 space-y-3">
          <Link
            to="/quotes"
            className="card-base p-5 block hover:-translate-y-0.5 transition"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-milk flex items-center justify-center text-lg">
                🐶
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-lineBrown">马尔济斯说</div>
                <p className="mt-1 text-sm text-lineBrown/85 font-cute">
                  “{todayMalteseQuote}”
                </p>
              </div>
            </div>
          </Link>
          <Link
            to="/quotes"
            className="card-base p-5 block hover:-translate-y-0.5 transition"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFE4A8] flex items-center justify-center text-lg">
                🐕
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-lineBrown">小金毛说</div>
                <p className="mt-1 text-sm text-lineBrown/85 font-cute">
                  "{todayRetrieverQuote}"
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 快捷入口 */}
      <section className="mt-6 grid grid-cols-2 gap-3">
        <Link
          to="/cards"
          className="card-base p-4 flex items-center gap-3 hover:-translate-y-0.5 transition"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#FFE4A8] flex items-center justify-center text-xl">
            🎴
          </div>
          <div className="min-w-0">
            <div className="font-extrabold text-lineBrown">小狗卡片</div>
            <div className="text-xs text-softBrown">已收集 {collected} / 5</div>
          </div>
        </Link>
        <Link
          to="/quotes"
          className="card-base p-4 flex items-center gap-3 hover:-translate-y-0.5 transition"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#FFD9E0] flex items-center justify-center text-xl">
            💬
          </div>
          <div className="min-w-0">
            <div className="font-extrabold text-lineBrown">治愈语录</div>
            <div className="text-xs text-softBrown">
              已收藏 {storage.getFavQuotes().length} 条
            </div>
          </div>
        </Link>
      </section>

      {/* 小提示 */}
      <section className="mt-8 px-2 text-xs text-softBrown/80 text-center font-cute">
        <p>· 每天和两只小狗一起，慢慢生活吧～ ·</p>
      </section>
    </div>
  )
}
