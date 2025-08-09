import React from 'react'

interface VideoCardProps {
  title: string
  channel: string
  thumbnail: string
}

export default function VideoCard({ title, channel, thumbnail }: VideoCardProps) {
  return (
    <div className="w-64">
      <img src={thumbnail} alt={title} className="h-36 w-full rounded object-cover" />
      <h3 className="mt-2 font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{channel}</p>
    </div>
  )
}
