import { useState } from 'react'
import DogMaltese from '../components/DogMaltese'
import DogRetriever from '../components/DogRetriever'
import { storage } from '../utils/storage'

export default function SettingsPage() {
  const [resetDone, setResetDone] = useState(false)
  const [confirm, setConfirm] = useState(false)

  function handleReset() {
    if (!confirm) {
      setConfirm(true)
      setTimeout(() => setConfirm(false), 4000)
      return
    }
    storage.clearAll()
    setResetDone(true)
    setConfirm(false)
    setTimeout(() => setResetDone(false), 2000)
  }

  const moodsCount = storage.getMoods().length
  const cardsCount = storage.getCollected().length
  const quotesCount = storage.getFavQuotes().length

  return (
    <div className="mx-auto max-w-xl px-4 pt-8 pb-32">
      <header className="text-center">
        <h1 className="text-2xl font-cute font-bold text-deepBrown">关于小狗</h1>
        <p className="mt-1 text-sm text-grayBrown">慢慢写，慢慢陪你走</p>
      </header>

      {/* 双小狗 */}
      <section className="mt-6 flex items-center justify-center gap-3">
        <DogMaltese mood="sleep" size={100} />
        <DogRetriever mood="happy" size={100} wag />
      </section>

      {/* 数据统计 */}
      <section className="mt-8">
        <h2 className="section-title">你的小狗</h2>
        <div className="mt-3 grid grid-cols-3 gap-3">
          <div className="line-card p-4 text-center">
            <div className="text-2xl font-cute font-bold text-deepBrown">
              {moodsCount}
            </div>
            <div className="text-xs text-grayBrown mt-1">心情日记</div>
          </div>
          <div className="line-card p-4 text-center">
            <div className="text-2xl font-cute font-bold text-deepBrown">
              {cardsCount}
            </div>
            <div className="text-xs text-grayBrown mt-1">收集卡片</div>
          </div>
          <div className="line-card p-4 text-center">
            <div className="text-2xl font-cute font-bold text-deepBrown">
              {quotesCount}
            </div>
            <div className="text-xs text-grayBrown mt-1">收藏语录</div>
          </div>
        </div>
      </section>

      {/* 说明 */}
      <section className="mt-10">
        <h2 className="section-title">设计灵感</h2>
        <div className="mt-3 line-card p-5">
          <p className="text-sm leading-relaxed text-deepBrown/80 font-cute">
            灵感来自韩国线条小狗情侣头像——圆圆脑袋、豆豆眼睛、
            软软的小耳朵。一只小白一只小金，并排坐着看你。
            所有数据仅保存在你自己的设备上，没有登录，没有追踪。
          </p>
        </div>
      </section>

      {/* 操作区 */}
      <section className="mt-10">
        <h2 className="section-title">管理数据</h2>
        <div className="mt-3 line-card p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="font-bold text-deepBrown">清空本地数据</div>
              <div className="mt-1 text-sm text-grayBrown">
                删除所有心情、卡片与语录收藏
              </div>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className={`px-4 py-2 rounded-full font-bold border transition ${
                confirm
                  ? 'bg-red-500 text-white border-red-500'
                  : 'bg-white text-deepBrown border-deepBrown/10'
              }`}
            >
              {resetDone ? '已清空' : confirm ? '确认？再点一次' : '清空'}
            </button>
          </div>
        </div>
      </section>

      {/* 底部 */}
      <section className="mt-12 text-center">
        <p className="font-cute text-grayBrown text-sm">
          · 今天也是被小狗治愈的一天 ·
        </p>
      </section>
    </div>
  )
}
