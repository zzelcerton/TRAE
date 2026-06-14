import { useMemo, useState } from 'react'
import DogMaltese from '../components/DogMaltese'
import DogRetriever from '../components/DogRetriever'
import { QUOTES_MALTESE, QUOTES_RETRIEVER } from '../data/quotes'
import { storage } from '../utils/storage'

type Filter = 'all' | 'maltese' | 'retriever' | 'fav'

export default function QuotesPage() {
  const [filter, setFilter] = useState<Filter>('all')
  const [tick, setTick] = useState(0)
  const favList = storage.getFavQuotes()

  const shownList = useMemo(() => {
    type Item = { text: string; dog: 'maltese' | 'retriever' }
    let items: Item[]
    if (filter === 'maltese') {
      items = QUOTES_MALTESE.map((q): Item => ({ text: q, dog: 'maltese' }))
    } else if (filter === 'retriever') {
      items = QUOTES_RETRIEVER.map((q): Item => ({ text: q, dog: 'retriever' }))
    } else {
      const mal: Item[] = QUOTES_MALTESE.map((q) => ({ text: q, dog: 'maltese' as const }))
      const ret: Item[] = QUOTES_RETRIEVER.map((q) => ({ text: q, dog: 'retriever' as const }))
      const merged: Item[] = []
      for (let i = 0; i < Math.max(mal.length, ret.length); i++) {
        if (mal[i]) merged.push(mal[i])
        if (ret[i]) merged.push(ret[i])
      }
      items = merged
    }
    if (filter === 'fav') {
      items = items.filter((it) => favList.includes(it.text))
    }
    return items
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, tick])

  function toggle(quote: string) {
    storage.toggleFavQuote(quote)
    setTick((v) => v + 1)
  }

  return (
    <div className="mx-auto max-w-xl px-4 pt-6 pb-28">
      <header className="text-center">
        <h1 className="text-3xl font-cute font-bold text-lineBrown">治愈语录</h1>
        <p className="mt-1 text-sm text-softBrown">挑一句戳到你的，点爱心收藏起来～</p>
      </header>

      {/* Tab 切换 */}
      <section className="mt-5">
        <div className="grid grid-cols-4 gap-2">
          {([
            { key: 'all', label: '全部' },
            { key: 'maltese', label: '马尔济斯' },
            { key: 'retriever', label: '小金毛' },
            { key: 'fav', label: '收藏' },
          ] as { key: Filter; label: string }[]).map((item) => (
            <button
              key={item.key}
              onClick={() => setFilter(item.key)}
              className={`py-2 px-3 rounded-full text-xs font-bold transition ${
                filter === item.key
                  ? 'bg-retrieverGold text-lineBrown shadow-soft'
                  : 'bg-white text-softBrown border border-milk'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      {/* 语录列表 */}
      <section className="mt-5 space-y-3">
        {shownList.length === 0 && (
          <div className="card-base p-8 text-center">
            <div className="mx-auto mb-3">
              {filter === 'fav' ? (
                <DogMaltese mood="daze" size={100} />
              ) : (
                <DogRetriever mood="sleep" size={100} />
              )}
            </div>
            <p className="text-sm text-softBrown font-cute">
              {filter === 'fav' ? '还没有收藏过任何语录哦。' : '这里空空的，小狗去休息了。'}
            </p>
          </div>
        )}
        {shownList.map((q) => {
          const fav = storage.isFavQuote(q.text)
          return (
            <article key={q.text} className="card-base p-5">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  {q.dog === 'maltese' ? (
                    <DogMaltese mood="happy" size={56} />
                  ) : (
                    <DogRetriever mood="cheer" size={56} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-softBrown">
                    {q.dog === 'maltese' ? '马尔济斯说' : '小金毛说'}
                  </div>
                  <p className="mt-1 text-base leading-relaxed text-lineBrown font-cute">
                    “{q.text}”
                  </p>
                </div>
              </div>
              <div className="mt-3 flex justify-end">
                <button
                  onClick={() => toggle(q.text)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition ${
                    fav
                      ? 'bg-[#FFD9E0] text-[#c4823f]'
                      : 'bg-white text-softBrown border border-milk hover:brightness-105'
                  }`}
                >
                  {fav ? '已收藏 ♥' : '收藏 ♡'}
                </button>
              </div>
            </article>
          )
        })}
      </section>
    </div>
  )
}
