import { useMemo, useState } from 'react'
import DogMaltese from '../components/DogMaltese'
import DogRetriever from '../components/DogRetriever'
import { CARDS } from '../data/cards'
import { storage, todayStr } from '../utils/storage'

function pickIndex(date: string, total: number): number {
  const seed = date.split('-').reduce((a, v) => a + Number(v), 0)
  return seed % total
}

export default function CardsPage() {
  const today = todayStr()
  const total = CARDS.length
  const [drawn, setDrawn] = useState<string | null>(
    storage.getTodayDraw(today) ?? null,
  )

  const alreadyDrawnToday = !!drawn
  const todayCardIndex = useMemo(() => {
    if (drawn) return CARDS.findIndex((c) => c.id === drawn)
    return pickIndex(today, total)
  }, [today, drawn])

  const todayCard = CARDS[todayCardIndex] ?? CARDS[0]
  const collected = storage.getCollected()

  function handleDraw() {
    if (alreadyDrawnToday) return
    const card = CARDS[todayCardIndex]
    storage.addCollected(card.id)
    storage.setTodayDraw(today, card.id)
    setDrawn(card.id)
  }

  const Dog =
    todayCard.dog === 'retriever' ? DogRetriever : DogMaltese

  return (
    <div className="mx-auto max-w-xl px-4 pt-8 pb-32">
      <header className="text-center">
        <h1 className="text-2xl font-cute font-bold text-deepBrown">
          今日小狗卡片
        </h1>
        <p className="mt-1 text-sm text-grayBrown">
          {today} · 已收集 {collected.length}/{total}
        </p>
      </header>

      {/* 抽卡区 */}
      <section className="mt-8 flex items-center justify-center">
        <div className="relative">
          <div
            className={`line-card p-8 w-72 transition ${
              alreadyDrawnToday ? '' : 'hover:-translate-y-1'
            }`}
          >
            {alreadyDrawnToday ? (
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 flex items-center justify-center">
                  <Dog mood={todayCard.mood as any} size={160} wag />
                </div>
                <div className="mt-2 font-cute text-lg font-bold text-deepBrown">
                  {todayCard.title}
                </div>
                <div className="mt-2 text-sm text-grayBrown leading-relaxed">
                  {todayCard.text}
                </div>
                <div className="mt-4 inline-block rounded-full bg-softPink/30 px-3 py-1 text-xs font-bold text-deepBrown">
                  {todayCard.dog === 'maltese' ? '线条小狗' : '小金毛'}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 flex items-center justify-center animate-float">
                  <DogMaltese mood="hug" size={140} wag />
                </div>
                <div className="mt-4 font-cute text-lg font-bold text-deepBrown">
                  来抽一张今天的吧
                </div>
                <div className="mt-1 text-sm text-grayBrown">
                  点开看看今天哪只小狗陪着你
                </div>
                <button type="button" className="btn-primary mt-5" onClick={handleDraw}>
                  翻一张
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 收藏墙 */}
      <section className="mt-12">
        <h2 className="section-title">我的小狗们</h2>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {CARDS.map((c) => {
            const got = collected.includes(c.id)
            const DogC = c.dog === 'maltese' ? DogMaltese : DogRetriever
            return (
              <div
                key={c.id}
                className={`line-card aspect-square flex flex-col items-center justify-center p-3 ${
                  got ? '' : 'opacity-30'
                }`}
              >
                <div className="flex-1 flex items-center justify-center w-full">
                  <DogC mood={c.mood as any} size={68} />
                </div>
                <div className="text-xs font-bold text-deepBrown mt-1">
                  {got ? c.title : '???'}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 小提示 */}
      <section className="mt-12 text-center">
        <p className="font-cute text-grayBrown text-sm">
          · 每天一张，小狗陪你慢慢长大 ·
        </p>
      </section>
    </div>
  )
}
