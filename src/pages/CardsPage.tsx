import { useMemo, useState } from 'react'
import DogMaltese from '../components/DogMaltese'
import DogRetriever from '../components/DogRetriever'
import { DOG_CARDS, RARITY_COLORS, type DogCard } from '../data/cards'
import { storage, todayStr } from '../utils/storage'

function weightedPick(): DogCard {
  const total = DOG_CARDS.reduce((acc, c) => acc + c.weight, 0)
  let r = Math.random() * total
  for (const c of DOG_CARDS) {
    r -= c.weight
    if (r <= 0) return c
  }
  return DOG_CARDS[0]
}

export default function CardsPage() {
  const today = todayStr()
  const lastDate = storage.getLastDrawDate()
  const canDraw = lastDate !== today

  const [result, setResult] = useState<DogCard | null>(() => {
    // 如果今天已经抽过，展示今天抽到的那张
    if (!canDraw) {
      const last = storage.getDraws().find((d) => d.date === today)
      if (last) return DOG_CARDS.find((c) => c.id === last.cardId) ?? null
    }
    return null
  })
  const [drawing, setDrawing] = useState(false)

  const collectedIds = storage.getCollected()
  const draws = storage.getDraws().slice(0, 20)
  const cardMap = useMemo(() => Object.fromEntries(DOG_CARDS.map((c) => [c.id, c])), [])

  function handleDraw() {
    if (!canDraw || drawing) return
    setDrawing(true)
    setTimeout(() => {
      const card = weightedPick()
      storage.addCollected(card.id)
      storage.addDraw({ date: today, cardId: card.id })
      storage.setLastDrawDate(today)
      setResult(card)
      setDrawing(false)
    }, 900)
  }

  return (
    <div className="mx-auto max-w-xl px-4 pt-6 pb-28">
      <header className="text-center">
        <h1 className="text-3xl font-cute font-bold text-lineBrown">小狗卡片</h1>
        <p className="mt-1 text-sm text-softBrown">每天抽一张，慢慢收集整个小狗园～</p>
      </header>

      {/* 抽卡区 */}
      <section className="card-base mt-5 p-6">
        <div className="flex items-center justify-center">
          <div className="relative">
            {result && !drawing ? (
              <div className="flex flex-col items-center animate-popIn">
                {result.dog === 'maltese' ? (
                  <DogMaltese mood={result.emotion} size={170} wag={result.emotion === 'happy' || result.emotion === 'cheer'} />
                ) : (
                  <DogRetriever mood={result.emotion} size={170} wag={result.emotion === 'happy' || result.emotion === 'cheer'} />
                )}
                <div
                  className={`mt-3 tag-pill ${RARITY_COLORS[result.rarity].bg} ${RARITY_COLORS[result.rarity].text}`}
                >
                  【{result.rarity}】
                </div>
                <h2 className="mt-2 text-xl font-cute font-bold text-lineBrown">{result.name}</h2>
                <p className="mt-2 text-sm text-lineBrown/80 text-center max-w-xs leading-relaxed font-cute">
                  {result.description}
                </p>
              </div>
            ) : drawing ? (
              <div className="flex flex-col items-center">
                <div className="animate-wag">
                  <DogMaltese mood="cheer" size={150} wag />
                </div>
                <p className="mt-3 text-sm text-lineBrown/80 font-cute">小狗在帮你挑卡片...</p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <DogRetriever mood="sleep" size={150} />
                <p className="mt-3 text-sm text-lineBrown/80 font-cute">
                  {canDraw ? '点下面按钮抽一张～' : '今天抽过啦，明天再来吧！'}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          {canDraw ? (
            <button onClick={handleDraw} disabled={drawing} className="btn-primary px-8">
              {drawing ? '抽卡中...' : '抽一张今天的卡片'}
            </button>
          ) : (
            <span className="text-sm text-softBrown font-cute">已收集 {collectedIds.length} / {DOG_CARDS.length}</span>
          )}
        </div>
      </section>

      {/* 图鉴 */}
      <section className="mt-6">
        <h2 className="font-cute text-lg font-bold text-lineBrown px-1">
          小狗图鉴 <span className="text-sm text-softBrown font-normal">({collectedIds.length}/{DOG_CARDS.length})</span>
        </h2>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {DOG_CARDS.map((c) => {
            const got = collectedIds.includes(c.id)
            return (
              <div
                key={c.id}
                className={`card-base p-4 flex flex-col items-center text-center ${!got ? 'opacity-50 grayscale' : ''}`}
              >
                {c.dog === 'maltese' ? (
                  <DogMaltese mood={c.emotion} size={100} wag={got && (c.emotion === 'happy' || c.emotion === 'cheer')} />
                ) : (
                  <DogRetriever mood={c.emotion} size={100} wag={got && (c.emotion === 'happy' || c.emotion === 'cheer')} />
                )}
                <div className={`mt-2 text-xs font-bold ${RARITY_COLORS[c.rarity].text}`}>【{c.rarity}】</div>
                <div className="mt-1 font-extrabold text-lineBrown">{got ? c.name : '???'}</div>
                <p className="mt-1 text-xs text-softBrown leading-relaxed">
                  {got ? c.description : '还没有遇到这只小狗'}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* 最近抽卡记录 */}
      <section className="mt-6">
        <h2 className="font-cute text-lg font-bold text-lineBrown px-1">最近抽到</h2>
        <div className="mt-3 space-y-2">
          {draws.length === 0 && (
            <div className="card-base p-5 text-center text-sm text-softBrown font-cute">
              还没有抽卡记录。
            </div>
          )}
          {draws.map((d, idx) => {
            const c = cardMap[d.cardId]
            if (!c) return null
            return (
              <div key={idx} className="card-base p-4 flex items-center gap-3">
                <div className="text-2xl">🎴</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`font-bold ${RARITY_COLORS[c.rarity].text}`}>
                      【{c.rarity}】{c.name}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-softBrown">
                    {d.date} · {c.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
