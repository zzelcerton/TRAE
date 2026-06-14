import { useState } from 'react'
import { Link } from 'react-router-dom'
import DogIllustration from '../components/DogIllustration'
import {
  storage,
  todayStr,
  MOOD_LABELS,
  MOOD_EMOJI,
  MOOD_MESSAGES,
  type MoodKey,
} from '../utils/storage'

const MOOD_ORDER: MoodKey[] = ['happy', 'normal', 'tired', 'anxious', 'sad']

export default function MoodPage() {
  const today = todayStr()
  const existing = storage
    .getMoods()
    .find((m) => m.date === today)

  const [selected, setSelected] = useState<MoodKey>(existing?.mood ?? 'normal')
  const [text, setText] = useState<string>(existing?.text ?? '')
  const [savedTip, setSavedTip] = useState<string>('')

  const history = storage.getMoods().slice(0, 30)

  function handleSave() {
    storage.addMood({
      date: today,
      mood: selected,
      text: text.trim(),
      createdAt: Date.now(),
    })
    setSavedTip('小狗已替你记下啦～')
    setTimeout(() => setSavedTip(''), 1800)
  }

  return (
    <div className="mx-auto max-w-xl px-4 pt-6 pb-28">
      <header className="flex items-center justify-between">
        <div>
          <Link to="/" className="text-sm text-softBrown">← 返回首页</Link>
          <h1 className="mt-1 text-2xl font-extrabold text-lineBrown">今天的心情</h1>
        </div>
      </header>

      {/* 今日小狗插画 */}
      <section className="card-base mt-5 p-6 flex flex-col items-center">
        <DogIllustration mood={selected === 'happy' || selected === 'normal' ? 'happy' : selected === 'tired' ? 'sleep' : 'daze'} size={180} wag={selected === 'happy'} />
        <p className="mt-2 text-sm text-lineBrown/80">{MOOD_MESSAGES[selected][0]}</p>
      </section>

      {/* 选择心情 */}
      <section className="mt-5">
        <h2 className="text-lg font-extrabold text-lineBrown px-1">此刻的你是？</h2>
        <div className="mt-3 grid grid-cols-5 gap-2">
          {MOOD_ORDER.map((m) => (
            <button
              key={m}
              onClick={() => setSelected(m)}
              className={`mood-chip ${selected === m ? 'mood-chip-active' : ''}`}
            >
              <span className="text-2xl">{MOOD_EMOJI[m]}</span>
              <span className="text-xs font-bold text-lineBrown">{MOOD_LABELS[m]}</span>
            </button>
          ))}
        </div>
      </section>

      {/* 留言 */}
      <section className="mt-5">
        <h2 className="text-lg font-extrabold text-lineBrown px-1">想对自己说点什么？（可选）</h2>
        <div className="card-base mt-3 p-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="例如：今天有点累，但至少喝到了一杯好喝的奶茶。"
            className="w-full h-24 resize-none bg-transparent text-lineBrown outline-none text-sm leading-relaxed"
            maxLength={200}
          />
          <div className="mt-2 flex items-center justify-between">
            <span className="text-xs text-softBrown">
              {savedTip || `${text.length}/200`}
            </span>
            <button onClick={handleSave} className="btn-primary">
              记一笔
            </button>
          </div>
        </div>
      </section>

      {/* 历史记录 */}
      <section className="mt-5">
        <h2 className="text-lg font-extrabold text-lineBrown px-1">最近的你</h2>
        <div className="mt-3 space-y-2">
          {history.length === 0 && (
            <div className="card-base p-5 text-center text-sm text-softBrown">
              还没有任何记录，今天是第一次呀～
            </div>
          )}
          {history.map((m) => (
            <div key={m.date} className="card-base p-4 flex items-start gap-3">
              <div className="text-2xl leading-none pt-0.5">{MOOD_EMOJI[m.mood]}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lineBrown">{MOOD_LABELS[m.mood]}</span>
                  <span className="text-xs text-softBrown">{m.date}</span>
                </div>
                {m.text && (
                  <p className="mt-1 text-sm text-lineBrown/85 leading-relaxed break-words">
                    {m.text}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
