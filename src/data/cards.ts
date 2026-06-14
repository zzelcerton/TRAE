export type Rarity = '普通' | '稀有' | '珍贵'
export type DogBreed = 'maltese' | 'retriever'

export interface DogCard {
  id: string
  name: string
  description: string
  rarity: Rarity
  emotion: 'happy' | 'sleep' | 'cheer' | 'hug' | 'daze'
  dog: DogBreed
  weight: number
}

export const DOG_CARDS: DogCard[] = [
  {
    id: 'maltese-happy',
    name: '开心马尔济斯',
    description: '摇着蓬松的大尾巴，笑得眼睛都弯了～',
    rarity: '普通',
    emotion: 'happy',
    dog: 'maltese',
    weight: 40,
  },
  {
    id: 'retriever-happy',
    name: '开心小金毛',
    description: '叼着一朵小花，飞奔着向你跑来！',
    rarity: '普通',
    emotion: 'happy',
    dog: 'retriever',
    weight: 35,
  },
  {
    id: 'maltese-sleep',
    name: '睡觉马尔济斯',
    description: '蜷成一团白色小棉花，正在做甜美的梦。',
    rarity: '稀有',
    emotion: 'sleep',
    dog: 'maltese',
    weight: 15,
  },
  {
    id: 'retriever-cheer',
    name: '加油小金毛',
    description: '举着金色小爪子，为你拼命打气！汪汪！',
    rarity: '稀有',
    emotion: 'cheer',
    dog: 'retriever',
    weight: 7,
  },
  {
    id: 'maltese-hug',
    name: '抱抱马尔济斯',
    description: '给你一个毛茸茸的温柔大拥抱。',
    rarity: '珍贵',
    emotion: 'hug',
    dog: 'maltese',
    weight: 3,
  },
]

export const RARITY_COLORS: Record<Rarity, { text: string; bg: string; ring: string }> = {
  '普通': { text: 'text-[#8A7357]', bg: 'bg-milk', ring: 'ring-[#E8D5B5]' },
  '稀有': { text: 'text-[#8a6ab0]', bg: 'bg-[#eee6ff]', ring: 'ring-[#d2c4f0]' },
  '珍贵': { text: 'text-[#c4823f]', bg: 'bg-[#ffeec7]', ring: 'ring-[#ffd98a]' },
}
