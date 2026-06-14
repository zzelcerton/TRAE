export type DogCard = {
  id: string
  title: string
  text: string
  mood: 'happy' | 'sleep' | 'cheer' | 'hug' | 'daze'
  dog: 'maltese' | 'retriever'
}

export const CARDS: DogCard[] = [
  {
    id: 'maltese-happy',
    title: '开心小白',
    text: '今天也很高兴见到你，尾巴摇得停不下来。',
    mood: 'happy',
    dog: 'maltese',
  },
  {
    id: 'retriever-cheer',
    title: '加油小金',
    text: '举着金色小爪子，为你拼命打气！汪汪！',
    mood: 'cheer',
    dog: 'retriever',
  },
  {
    id: 'maltese-sleep',
    title: '睡睡小白',
    text: '蜷成一团白色小棉花，正在做甜美的梦。',
    mood: 'sleep',
    dog: 'maltese',
  },
  {
    id: 'retriever-happy',
    title: '叼花小金',
    text: '叼着一朵小花，飞奔着向你跑来了！',
    mood: 'happy',
    dog: 'retriever',
  },
  {
    id: 'maltese-hug',
    title: '抱抱小白',
    text: '给你一个温柔的大拥抱，今天辛苦啦。',
    mood: 'hug',
    dog: 'maltese',
  },
]
