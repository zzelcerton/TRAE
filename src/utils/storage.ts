export type Mood = 'happy' | 'sad' | 'tired' | 'love' | 'angry' | 'calm'

export interface MoodRecord {
  date: string
  mood: Mood
  text: string
  createdAt?: number
}

const KEYS = {
  MOODS: 'linedog.moods',
  FAV_QUOTES: 'linedog.favQuotes',
  DRAWS: 'linedog.draws',
  COLLECTED: 'linedog.collected',
  TODAY_DRAW: 'linedog.todayDraw',
} as const

function safeGet<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

function safeSet<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // ignore
  }
}

export const storage = {
  // 心情记录
  getMoods(): MoodRecord[] {
    return safeGet<MoodRecord[]>(KEYS.MOODS, [])
  },
  saveMood(record: MoodRecord) {
    const list = storage.getMoods()
    const filtered = list.filter((r) => r.date !== record.date)
    filtered.push({ ...record, createdAt: Date.now() })
    filtered.sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0))
    safeSet(KEYS.MOODS, filtered)
  },

  // 收藏语录
  getFavQuotes(): string[] {
    return safeGet<string[]>(KEYS.FAV_QUOTES, [])
  },
  addFavQuote(key: string) {
    const list = storage.getFavQuotes()
    if (!list.includes(key)) list.push(key)
    safeSet(KEYS.FAV_QUOTES, list)
  },
  removeFavQuote(key: string) {
    const list = storage.getFavQuotes().filter((k) => k !== key)
    safeSet(KEYS.FAV_QUOTES, list)
  },

  // 卡片收藏
  getCollected(): string[] {
    return safeGet<string[]>(KEYS.COLLECTED, [])
  },
  addCollected(cardId: string) {
    const list = storage.getCollected()
    if (!list.includes(cardId)) list.push(cardId)
    safeSet(KEYS.COLLECTED, list)
  },

  // 每日抽卡记录
  getTodayDraw(date: string): string | null {
    const map = safeGet<Record<string, string>>(KEYS.TODAY_DRAW, {})
    return map[date] ?? null
  },
  setTodayDraw(date: string, cardId: string) {
    const map = safeGet<Record<string, string>>(KEYS.TODAY_DRAW, {})
    map[date] = cardId
    safeSet(KEYS.TODAY_DRAW, map)
  },

  // 全部清空
  clearAll() {
    Object.values(KEYS).forEach((k) => localStorage.removeItem(k))
  },
}

export function todayStr(): string {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export const MOOD_LABELS: Record<Mood, string> = {
  happy: '开心',
  sad: '难过',
  tired: '有点累',
  love: '甜甜的',
  angry: '气气',
  calm: '平静',
}

export const MOOD_EMOJI: Record<Mood, string> = {
  happy: '🌸',
  sad: '🫧',
  tired: '🌙',
  love: '♡',
  angry: '🔥',
  calm: '🌿',
}
