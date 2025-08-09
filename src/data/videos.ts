export interface Video {
  id: string
  title: string
  channel: string
  thumbnail: string
}

export const videos: Video[] = [
  {
    id: 'video1',
    title: 'Understanding React',
    channel: 'Code Academy',
    thumbnail: 'https://img.youtube.com/vi/dGcsHMXbSOA/hqdefault.jpg',
  },
  {
    id: 'video2',
    title: 'Next.js Tutorial',
    channel: 'Dev Community',
    thumbnail: 'https://img.youtube.com/vi/TTAPF6BIsw4/hqdefault.jpg',
  },
  {
    id: 'video3',
    title: 'Tailwind CSS Crash Course',
    channel: 'DesignCode',
    thumbnail: 'https://img.youtube.com/vi/UBOj6rqRUME/hqdefault.jpg',
  },
]
