import { useState } from 'react'
import DogMaltese from '../components/DogMaltese'
import DogRetriever from '../components/DogRetriever'
import { storage, todayStr, MOOD_LABELS, MOOD_EMOJI } from '../utils/storage'
import type { Mood } from '../utils/storage'

const MOODS: { id: Mood; label: string; emoji: string }[] = [
  { id: 'happy', label: '开心', emoji: '🌸' },
  { id: 'sad', label: '难过', emoji: '🫧' },
  { id: 'tired', label: '有点累', emoji: '🌙' },
  { id: 'love', label: '甜甜的', emoji: '♡' },
  { id: 'angry', label: '气气', emoji: '🔥' },
  { id: 'calm', label: '平静', emoji: '🌿' },
]

export default function MoodPage() {
  const today = todayStr()
  const existing = storage.getMoods().find((m) => m.date === today)
  const [mood, setMood] = useState<Mood | null>(existing?.mood ?? null)
  const [text, setText] = useState(existing?.text ?? '')
  const [saved, setSaved] = useState(!!existing)

  function handleSave() {
    if (!mood) return
    storage.saveMood({ date: today, mood, text })
    setSaved(true)
    setTimeout(() => setSaved(false), 1500)
  }

  const dogMood: 'happy' | 'sleep' | 'cheer' | 'hug' | 'daze' =
    mood === 'sad' || mood === 'tired'
      ? 'hug'
      : mood === 'love'
        ? 'hug'
        : mood === 'angry'
          ? 'daze'
          : mood === 'calm'
            ? 'sleep'
            : 'cheer'

  return (
    <div className="mx-auto max-w-xl px-4 pt-8 pb-32">
      <header className="text-center">
        <p className="text-sm text-grayBrown">{today}</p>
        <h1 className="mt-2 text-2xl font-cute font-bold text-deepBrown">
          今天想告诉小狗什么呢？
        </h1>
      </header>

      {/* 双小狗 */}
      <section className="mt-6 flex items-end justify-center gap-4">
        <DogMaltese mood={dogMood} size={120} wag />
        <DogRetriever mood={dogMood} size={120} wag style={{ transform: 'translateY(-4px)' }} />
      </section>

      {/* 心情选择 */}
      <section className="mt-8">
        <h2 className="section-title">现在的心情</h2>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {MOODS.map((m) => {
            const active = mood === m.id
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setMood(m.id)}
                className={`mood-chip ${active ? 'mood-chip-active' : ''}`}
              >
                <span className="text-2xl">{m.emoji}</span>
                <span className="text-sm font-bold text-deepBrown">{m.label}</span>
              </button>
            )
          })}
        </div>
      </section>

      {/* 写点什么 */}
      <section className="mt-8">
        <h2 className="section-title">想说的话</h2>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="小狗在听呢，慢慢写～"
          className="mt-3 w-full h-32 resize-none rounded-3xl2 border border-deepBrown/10 bg-white p-4 text-base text-deepBrown placeholder:text-grayBrown/60 focus:outline-none focus:border-softPink transition-colors"
        />
      </section>

      {/* 保存 */}
      <section className="mt-8 flex justify-center">
        <button type="button" className="btn-primary text-base" onClick={handleSave} disabled={!mood}>
          {saved ? '已收藏 ♡' : '交给小狗保管'}
        </button>
      </section>

      {/* 历史记录 */}
      <section className="mt-12">
        <h2 className="section-title">最近的日子</h2>
        <div className="mt-3 space-y-2">
          {storage
            .getMoods()
            .slice()
            .reverse()
            .slice(0, 7)
            .map((m) => (
              <div key={m.date} className="line-card p-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{MOOD_EMOJI[m.mood]}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-grayBrown">{m.date}</div>
                    <div className="font-bold text-deepBrown">
                      {MOOD_LABELS[m.mood]}
                    </div>
                    {m.text && (
                      <div className="mt-1 text-sm text-deepBrown/80">
                        {m.text}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          {storage.getMoods().length === 0 && (
            <div className="text-center py-8 text-grayBrown text-sm">
              还没有记录哦，开始第一天吧～
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
