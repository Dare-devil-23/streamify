import { shortNumber } from '@/tils';
import React from 'react'

type Props = {
  songName: string,
  artist: string,
  streams: number,
  coverPic: string
}

const Song: React.FC<Props> = (props: Props) => {

  const { songName, artist, streams, coverPic } = props;

  return (
    <div className='flex gap-4 p-1 rounded-xl items-center border border-zinc-800'>
        <img
          src={coverPic}
          alt={songName}
          className='rounded-xl w-14'
        />
      <div className='grow truncate'>
        <div className='text-medium truncate'>
          {songName}
        </div>
        <div className='text-regular opacity-50 truncate'>
          {artist}
        </div>
      </div>
      <div className='rounded-xl p-4 bg-zinc-900'>
        <div className='text-lg'>
          {shortNumber(streams)}
        </div>
      </div>
    </div>
  )
}

export default Song