import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import DogIllustration from '../components/DogIllustration'
import { DOG_CARDS, RARITY_COLOR, type DogCard } from '../data/cards'
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

  const [result, setResult] = useState<DogCard | null>(null)
  const [shake, setShake] = useState(false)

  const collected = storage.getCollected()
  const draws = storage.getDraws().slice(0, 20)

  function handleDraw() {
    if (!canDraw) return
    setShake(true)
    setTimeout(() => {
      const card = weightedPick()
      storage.addCollected(card.id)
      storage.addDraw({ date: today, cardId: card.id })
      storage.setLastDrawDate(today)
      setResult(card)
      setShake(false)
    }, 700)
  }

  const cardMap = useMemo(
    () => Object.fromEntries(DOG_CARDS.map((c) => [c.id, c])),
    [],
  )

  return (
    <div className="mx-auto max-w-xl px-4 pt-6 pb-28">
      <header className="flex items-center justify-between">
        <div>
          <Link to="/" className="text-sm text-softBrown">← 返回首页</Link>
          <h1 className="mt-1 text-2xl font-extrabold text-lineBrown">小狗卡片</h1>
        </div>
      </header>

      {/* 每日抽卡 */}
      <section className="card-base mt-5 p-6 flex flex-col items-center">
        <div className={`relative ${shake ? 'animate-wag' : 'animate-float'}`}>
          <DogIllustration
            mood={result?.emotion ?? 'cheer'}
            size={180}
            wag={!result}
          />
        </div>
        {result ? (
          <div className="mt-4 text-center">
            <p className="text-sm text-softBrown">
              今天抽到了
              <span className={`mx-1 font-bold ${RARITY_COLOR[result.rarity]}`}>
                【{result.rarity}】
              </span>
            </p>
            <h2 className="mt-2 text-xl font-extrabold text-lineBrown">{result.name}</h2>
            <p className="mt-2 text-sm text-lineBrown/85 max-w-xs mx-auto leading-relaxed">
              {result.description}
            </p>
            <p className="mt-4 text-xs text-softBrown">明天再来抽下一张吧～</p>
          </div>
        ) : (
          <div className="mt-4 text-center">
            <p className="text-sm text-lineBrown/85">
              每天可以抽一张小狗卡片，已收集 {collected.length} / {DOG_CARDS.length}
            </p>
            <button
              onClick={handleDraw}
              disabled={!canDraw}
              className={`mt-4 ${canDraw ? 'btn-primary' : 'btn-ghost'} ${!canDraw ? 'opacity-60 cursor-not-allowed' : ''}`}
            >
              {canDraw ? '抽一张' : '今天已抽过'}
            </button>
          </div>
        )}
      </section>

      {/* 图鉴 */}
      <section className="mt-5">
        <h2 className="text-lg font-extrabold text-lineBrown px-1">图鉴</h2>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {DOG_CARDS.map((c) => {
            const got = collected.includes(c.id)
            return (
              <div
                key={c.id}
                className={`card-base p-4 flex flex-col items-center ${!got ? 'opacity-40 grayscale' : ''}`}
              >
                <DogIllustration mood={c.emotion} size={100} />
                <div className={`mt-2 text-xs font-bold ${RARITY_COLOR[c.rarity]}`}>
                  【{c.rarity}】
                </div>
                <div className="mt-1 font-extrabold text-lineBrown">{got ? c.name : '???'}</div>
                <p className="mt-1 text-xs text-softBrown text-center leading-relaxed">
                  {got ? c.description : '还没有遇到这只小狗'}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* 最近抽卡记录 */}
      <section className="mt-5">
        <h2 className="text-lg font-extrabold text-lineBrown px-1">最近抽到</h2>
        <div className="mt-3 space-y-2">
          {draws.length === 0 && (
            <div className="card-base p-5 text-center text-sm text-softBrown">
              还没有抽卡记录。
            </div>
          )}
          {draws.map((d, idx) => {
            const c = cardMap[d.cardId]
            if (!c) return null
            return (
              <div key={idx} className="card-base p-4 flex items-center gap-3">
                <div className="text-2xl">🎴</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`font-bold ${RARITY_COLOR[c.rarity]}`}>
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
