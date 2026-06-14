export type Rarity = '普通' | '稀有' | '珍贵'

export interface DogCard {
  id: string
  name: string
  description: string
  rarity: Rarity
  emotion: 'happy' | 'sleep' | 'cheer' | 'hug' | 'daze'
  weight: number
}

export const DOG_CARDS: DogCard[] = [
  {
    id: 'happy',
    name: '开心小狗',
    description: '摇着尾巴，笑得眼睛都弯了～',
    rarity: '普通',
    emotion: 'happy',
    weight: 40,
  },
  {
    id: 'daze',
    name: '发呆小狗',
    description: '望着窗外发呆，偶尔眨眨眼。',
    rarity: '普通',
    emotion: 'daze',
    weight: 35,
  },
  {
    id: 'sleep',
    name: '睡觉小狗',
    description: '蜷成一团，正在做甜美的梦。',
    rarity: '稀有',
    emotion: 'sleep',
    weight: 15,
  },
  {
    id: 'cheer',
    name: '加油小狗',
    description: '举着小爪子，为你拼命打气！',
    rarity: '稀有',
    emotion: 'cheer',
    weight: 7,
  },
  {
    id: 'hug',
    name: '抱抱小狗',
    description: '给你一个毛茸茸的大拥抱。',
    rarity: '珍贵',
    emotion: 'hug',
    weight: 3,
  },
]

export const RARITY_COLOR: Record<Rarity, string> = {
  普通: 'text-softBrown bg-milk',
  稀有: 'text-[#8a6ab0] bg-[#eee6ff]',
  珍贵: 'text-[#c4823f] bg-[#ffeec7]',
}
