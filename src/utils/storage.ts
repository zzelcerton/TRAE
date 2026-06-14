export type MoodKey = 'happy' | 'normal' | 'sad' | 'anxious' | 'tired'

export interface MoodRecord {
  date: string
  mood: MoodKey
  text: string
  createdAt: number
}

export interface DrawRecord {
  date: string
  cardId: string
}

const KEYS = {
  MOODS: 'linedog.moods',
  FAV_QUOTES: 'linedog.favQuotes',
  DRAWS: 'linedog.draws',
  COLLECTED: 'linedog.collected',
  LAST_DRAW_DATE: 'linedog.lastDrawDate',
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
  addMood(record: MoodRecord) {
    const list = storage.getMoods()
    const filtered = list.filter((r) => r.date !== record.date)
    filtered.push(record)
    filtered.sort((a, b) => b.createdAt - a.createdAt)
    safeSet(KEYS.MOODS, filtered.slice(0, 90))
  },
  clearMoods() {
    safeSet(KEYS.MOODS, [])
  },

  // 收藏语录
  getFavQuotes(): string[] {
    return safeGet<string[]>(KEYS.FAV_QUOTES, [])
  },
  toggleFavQuote(quote: string): string[] {
    const list = storage.getFavQuotes()
    const idx = list.indexOf(quote)
    if (idx >= 0) list.splice(idx, 1)
    else list.unshift(quote)
    safeSet(KEYS.FAV_QUOTES, list.slice(0, 100))
    return list
  },
  isFavQuote(quote: string): boolean {
    return storage.getFavQuotes().includes(quote)
  },
  clearFavQuotes() {
    safeSet(KEYS.FAV_QUOTES, [])
  },

  // 卡片收藏
  getCollected(): string[] {
    return safeGet<string[]>(KEYS.COLLECTED, [])
  },
  addCollected(cardId: string): string[] {
    const list = storage.getCollected()
    if (!list.includes(cardId)) list.push(cardId)
    safeSet(KEYS.COLLECTED, list)
    return list
  },
  clearCollected() {
    safeSet(KEYS.COLLECTED, [])
  },

  // 每日抽卡
  getLastDrawDate(): string | null {
    return safeGet<string | null>(KEYS.LAST_DRAW_DATE, null)
  },
  setLastDrawDate(date: string) {
    safeSet(KEYS.LAST_DRAW_DATE, date)
  },
  getDraws(): DrawRecord[] {
    return safeGet<DrawRecord[]>(KEYS.DRAWS, [])
  },
  addDraw(record: DrawRecord) {
    const list = storage.getDraws()
    list.unshift(record)
    safeSet(KEYS.DRAWS, list.slice(0, 120))
  },
  clearDraws() {
    safeSet(KEYS.DRAWS, [])
    safeSet(KEYS.LAST_DRAW_DATE, null)
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

export const MOOD_LABELS: Record<MoodKey, string> = {
  happy: '开心',
  normal: '一般',
  sad: '难过',
  anxious: '焦虑',
  tired: '疲惫',
}

export const MOOD_EMOJI: Record<MoodKey, string> = {
  happy: '😊',
  normal: '🙂',
  sad: '🥺',
  anxious: '😰',
  tired: '😮‍💨',
}

export const MOOD_MESSAGES: Record<MoodKey, string[]> = {
  happy: [
    '今天也要被小狗治愈一下！',
    '你的笑容也让小狗很开心～',
    '保持今天的好心情呀！',
  ],
  normal: [
    '平平淡淡也很好呀。',
    '今天和小狗一起，慢慢走。',
    '普通的一天，也是珍贵的一天。',
  ],
  sad: [
    '没关系，小狗陪你慢慢来。',
    '想哭就哭一会儿，小狗陪着你。',
    '你已经做得很好了。',
  ],
  anxious: [
    '深呼吸一下，和小狗一起。',
    '不用急，一件一件来做。',
    '世界很吵，但你可以慢一点。',
  ],
  tired: [
    '今天辛苦啦，摸摸头。',
    '停下来，休息一下也没关系。',
    '累了就靠在小狗身上睡一会儿。',
  ],
}
