import VideoCard from '@/components/VideoCard'
import SearchBar from '@/components/SearchBar'
import { videos } from '@/data/videos'

export default function Home() {
  return (
    <main className="p-6">
      <div className="mb-6 flex justify-center">
        <div className="w-full max-w-xl">
          <SearchBar />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {videos.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </main>
  )
}
