import { useState } from 'react'
import DogMaltese from '../components/DogMaltese'
import DogRetriever from '../components/DogRetriever'
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
  function doClearCollected() {
    if (!confirm('确定要清空卡片图鉴吗？')) return
    storage.clearCollected()
    setTip('卡片图鉴已清空。')
    setTimeout(() => setTip(''), 1500)
  }
  function doClearDraws() {
    if (!confirm('确定要重置抽卡记录吗？重置后今天可以再抽一张。')) return
    storage.clearDraws()
    setTip('抽卡记录已清空，今天可以再抽一张啦～')
    setTimeout(() => setTip(''), 1800)
  }
  function doClearAll() {
    if (!confirm('这会清空所有本地数据，确定继续？')) return
    storage.clearAll()
    setTip('已清空所有本地数据。')
    setTimeout(() => setTip(''), 1800)
  }

  return (
    <div className="mx-auto max-w-xl px-4 pt-6 pb-28">
      <header className="text-center">
        <h1 className="text-3xl font-cute font-bold text-lineBrown">设置</h1>
        <p className="mt-1 text-sm text-softBrown">
          你的数据只保存在本机浏览器中，清除后无法恢复。
        </p>
      </header>

      {/* 小狗装饰 */}
      <section className="card-base mt-5 p-4">
        <div className="flex items-center justify-around">
          <DogMaltese mood="sleep" size={100} />
          <DogRetriever mood="daze" size={100} />
        </div>
      </section>

      {tip && (
        <div className="card-base mt-4 p-4 text-center text-sm text-lineBrown font-bold font-cute">
          {tip}
        </div>
      )}

      <section className="mt-6 space-y-3">
        <button onClick={doClearMoods} className="card-base w-full p-4 text-left hover:-translate-y-0.5 transition">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFD9E0] flex items-center justify-center text-lg">
              📝
            </div>
            <div className="flex-1">
              <div className="font-extrabold text-lineBrown">清空心情记录</div>
              <div className="mt-0.5 text-xs text-softBrown">移除过去所有心情日记</div>
            </div>
          </div>
        </button>

        <button onClick={doClearFavQuotes} className="card-base w-full p-4 text-left hover:-translate-y-0.5 transition">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFE4A8] flex items-center justify-center text-lg">
              💬
            </div>
            <div className="flex-1">
              <div className="font-extrabold text-lineBrown">清空语录收藏</div>
              <div className="mt-0.5 text-xs text-softBrown">取消所有已点赞的语录</div>
            </div>
          </div>
        </button>

        <button onClick={doClearCollected} className="card-base w-full p-4 text-left hover:-translate-y-0.5 transition">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#E8D9F0] flex items-center justify-center text-lg">
              🎴
            </div>
            <div className="flex-1">
              <div className="font-extrabold text-lineBrown">清空卡片图鉴</div>
              <div className="mt-0.5 text-xs text-softBrown">让所有卡片重新变成未知</div>
            </div>
          </div>
        </button>

        <button onClick={doClearDraws} className="card-base w-full p-4 text-left hover:-translate-y-0.5 transition">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#C8E6D0] flex items-center justify-center text-lg">
              🎲
            </div>
            <div className="flex-1">
              <div className="font-extrabold text-lineBrown">重置每日抽卡</div>
              <div className="mt-0.5 text-xs text-softBrown">今天可以再抽一张新卡片</div>
            </div>
          </div>
        </button>

        <button onClick={doClearAll} className="card-base w-full p-4 text-left hover:-translate-y-0.5 transition">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFD5CC] flex items-center justify-center text-lg">
              🧹
            </div>
            <div className="flex-1">
              <div className="font-extrabold text-[#c4823f]">清空全部数据</div>
              <div className="mt-0.5 text-xs text-softBrown">心情、语录、卡片一次清空</div>
            </div>
          </div>
        </button>
      </section>

      <section className="mt-8 text-center text-xs text-softBrown leading-relaxed font-cute">
        <p>马尔济斯 & 小金毛 治愈手账 v0.1.0</p>
        <p className="mt-1">每天对自己温柔一点点 🐾</p>
      </section>
    </div>
  )
}
