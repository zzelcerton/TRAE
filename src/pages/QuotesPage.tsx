import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { QUOTES } from '../data/quotes'
import { storage } from '../utils/storage'

export default function QuotesPage() {
  const [tick, setTick] = useState(0)
  const favList = storage.getFavQuotes()
  const [onlyFav, setOnlyFav] = useState(false)

  const shownList = useMemo(() => {
    if (!onlyFav) return QUOTES
    return QUOTES.filter((q) => favList.includes(q))
  }, [onlyFav, tick])

  function toggle(quote: string) {
    storage.toggleFavQuote(quote)
    setTick((v) => v + 1)
  }

  return (
    <div className="mx-auto max-w-xl px-4 pt-6 pb-28">
      <header className="flex items-center justify-between">
        <div>
          <Link to="/" className="text-sm text-softBrown">← 返回首页</Link>
          <h1 className="mt-1 text-2xl font-extrabold text-lineBrown">治愈语录</h1>
        </div>
        <button
          onClick={() => setOnlyFav((v) => !v)}
          className={onlyFav ? 'btn-primary' : 'btn-ghost'}
        >
          只看收藏
        </button>
      </header>

      <p className="mt-4 px-1 text-sm text-softBrown">
        挑一句戳到你的，长按可以收藏起来。
      </p>

      <section className="mt-4 space-y-3">
        {shownList.length === 0 && (
          <div className="card-base p-6 text-center text-sm text-softBrown">
            还没有收藏过任何语录哦。
          </div>
        )}
        {shownList.map((q) => {
          const fav = storage.isFavQuote(q)
          return (
            <article key={q} className="card-base p-5">
              <p className="text-lg leading-relaxed text-lineBrown font-bold">“{q}”</p>
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="text-softBrown">— 小狗说</span>
                <button
                  onClick={() => toggle(q)}
                  className={`btn-ghost ${fav ? 'text-[#c4823f]' : ''}`}
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
