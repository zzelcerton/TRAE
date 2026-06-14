import { useState } from 'react'
import { Link } from 'react-router-dom'
import { storage } from '../utils/storage'

export default function SettingsPage() {
  const [tip, setTip] = useState<string>('')

  function doClearMoods() {
    if (!confirm('确定要清空所有心情记录吗？')) return
    storage.clearMoods()
    setTip('心情记录已清空。')
    setTimeout(() => setTip(''), 1500)
  }
  function doClearFavQuotes() {
    if (!confirm('确定要清空所有语录收藏吗？')) return
    storage.clearFavQuotes()
    setTip('语录收藏已清空。')
    setTimeout(() => setTip(''), 1500)
  }
  function doClearDraws() {
    if (!confirm('确定要清空抽卡记录吗？')) return
    storage.clearDraws()
    setTip('抽卡记录已清空，明天可以重新抽卡。')
    setTimeout(() => setTip(''), 1500)
  }
  function doClearCollected() {
    if (!confirm('确定要清空卡片图鉴吗？')) return
    storage.clearCollected()
    setTip('卡片图鉴已清空。')
    setTimeout(() => setTip(''), 1500)
  }
  function doClearAll() {
    if (!confirm('这会清空所有本地数据，确定继续？')) return
    storage.clearAll()
    setTip('已清空所有本地数据。')
    setTimeout(() => setTip(''), 1800)
  }

  return (
    <div className="mx-auto max-w-xl px-4 pt-6 pb-28">
      <header className="flex items-center justify-between">
        <div>
          <Link to="/" className="text-sm text-softBrown">← 返回首页</Link>
          <h1 className="mt-1 text-2xl font-extrabold text-lineBrown">设置</h1>
        </div>
      </header>

      <p className="mt-4 px-1 text-sm text-softBrown">
        你的数据仅保存在本机浏览器中，清除后无法恢复。
      </p>

      {tip && (
        <div className="card-base mt-4 p-4 text-center text-sm text-lineBrown font-bold">
          {tip}
        </div>
      )}

      <section className="mt-5 space-y-2">
        <button onClick={doClearMoods} className="card-base w-full p-4 text-left hover:brightness-105 transition">
          <div className="font-extrabold text-lineBrown">清空心情记录</div>
          <div className="mt-1 text-xs text-softBrown">移除过去所有心情日记</div>
        </button>
        <button onClick={doClearFavQuotes} className="card-base w-full p-4 text-left hover:brightness-105 transition">
          <div className="font-extrabold text-lineBrown">清空语录收藏</div>
          <div className="mt-1 text-xs text-softBrown">取消所有已点赞的语录</div>
        </button>
        <button onClick={doClearCollected} className="card-base w-full p-4 text-left hover:brightness-105 transition">
          <div className="font-extrabold text-lineBrown">清空卡片图鉴</div>
          <div className="mt-1 text-xs text-softBrown">让所有卡片重新变成未知</div>
        </button>
        <button onClick={doClearDraws} className="card-base w-full p-4 text-left hover:brightness-105 transition">
          <div className="font-extrabold text-lineBrown">重置每日抽卡</div>
          <div className="mt-1 text-xs text-softBrown">今天可以再抽一张新卡片</div>
        </button>
        <button onClick={doClearAll} className="card-base w-full p-4 text-left hover:brightness-105 transition">
          <div className="font-extrabold text-[#a84a2b]">清空全部数据</div>
          <div className="mt-1 text-xs text-softBrown">心情、语录、卡片一次清空</div>
        </button>
      </section>

      <section className="mt-8 text-center text-xs text-softBrown leading-relaxed">
        <p>线条小狗 · 治愈小手账 v0.1.0</p>
        <p className="mt-1">每天对自己温柔一点点 🐾</p>
      </section>
    </div>
  )
}
