import { useMemo, useState } from 'react'
import DogMaltese from '../components/DogMaltese'
import DogRetriever from '../components/DogRetriever'
import { QUOTES_MALTESE, QUOTES_RETRIEVER } from '../data/quotes'
import { storage, todayStr } from '../utils/storage'

function shuffle<T>(list: T[], seed: string): T[] {
  const s = seed.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
  let r = s
  const rand = () => {
    r = (r * 9301 + 49297) % 233280
    return r / 233280
  }
  return [...list].sort(() => rand() - 0.5)
}

type QuoteItem = { text: string; dog: 'maltese' | 'retriever' }

export default function QuotesPage() {
  const today = todayStr()
  const allItems = useMemo<QuoteItem[]>(() => {
    const m: QuoteItem[] = shuffle(QUOTES_MALTESE, today).map((q) => ({
      text: q,
      dog: 'maltese',
    }))
    const r: QuoteItem[] = shuffle(QUOTES_RETRIEVER, today + 'r').map((q) => ({
      text: q,
      dog: 'retriever',
    }))
    const merged: QuoteItem[] = []
    const n = Math.max(m.length, r.length)
    for (let i = 0; i < n; i++) {
      if (i < m.length) merged.push(m[i])
      if (i < r.length) merged.push(r[i])
    }
    return merged
  }, [today])

  const [tab, setTab] = useState<'all' | 'fav'>('all')
  const favKeys = storage.getFavQuotes()
  const favItems = allItems.filter((q) => favKeys.includes(`${q.dog}:${q.text}`))

  const show = tab === 'all' ? allItems : favItems

  function toggleFav(item: QuoteItem) {
    const key = `${item.dog}:${item.text}`
    if (favKeys.includes(key)) storage.removeFavQuote(key)
    else storage.addFavQuote(key)
  }

  return (
    <div className="mx-auto max-w-xl px-4 pt-8 pb-32">
      <header className="text-center">
        <h1 className="text-2xl font-cute font-bold text-deepBrown">
          小狗的悄悄话
        </h1>
        <p className="mt-1 text-sm text-grayBrown">偶尔来看看，它们有话要说～</p>
      </header>

      {/* 双小狗 */}
      <section className="mt-6 flex items-center justify-center gap-3">
        <DogMaltese mood="hug" size={90} />
        <span className="text-softPink font-cute text-2xl font-bold">♡</span>
        <DogRetriever mood="happy" size={90} wag />
      </section>

      {/* Tab */}
      <section className="mt-8">
        <div className="flex items-center gap-2 bg-white rounded-full p-1 border border-deepBrown/10">
          <button
            type="button"
            className={`flex-1 py-2 rounded-full font-bold transition ${
              tab === 'all' ? 'bg-deepBrown text-white' : 'text-grayBrown'
            }`}
            onClick={() => setTab('all')}
          >
            全部
          </button>
          <button
            type="button"
            className={`flex-1 py-2 rounded-full font-bold transition ${
              tab === 'fav' ? 'bg-deepBrown text-white' : 'text-grayBrown'
            }`}
            onClick={() => setTab('fav')}
          >
            我的收藏 ({favKeys.length})
          </button>
        </div>
      </section>

      {/* 列表 */}
      <section className="mt-6 space-y-3">
        {show.map((item, idx) => {
          const key = `${item.dog}:${item.text}`
          const fav = favKeys.includes(key)
          const Dog = item.dog === 'maltese' ? DogMaltese : DogRetriever
          return (
            <div key={idx} className="quote-card">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 flex-shrink-0">
                  <Dog mood="happy" size={48} />
                </div>
                <div className="flex-1 min-w-0 pt-1">
                  <p className="text-base leading-relaxed text-deepBrown font-cute">
                    “{item.text}”
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => toggleFav(item)}
                  className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-white border border-deepBrown/10 text-softPink transition active:scale-90"
                  aria-label="收藏"
                >
                  {fav ? '♥' : '♡'}
                </button>
              </div>
            </div>
          )
        })}
        {show.length === 0 && (
          <div className="text-center py-12 text-grayBrown text-sm">
            {tab === 'fav' ? '还没有收藏呢～' : '加载中...'}
          </div>
        )}
      </section>
    </div>
  )
}
