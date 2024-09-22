import React from 'react'
import HoverBorderGradient from '@/components/common/hoverBoard';
import { shortNumber } from '@/utils';

type Props = {
  songName: string,
  artist: string,
  streams: number,
  coverPic: string
}

const Song: React.FC<Props> = (props: Props) => {

  const { songName, artist, streams, coverPic } = props;

  return (
    <div className='flex gap-4 hover:scale-105 transition-transform duration-500 p-1 rounded-xl items-center'>
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
      <HoverBorderGradient
        containerClassName="rounded-xl"
        className='bg-zinc-900'
        as="div"
      >
        <div className='text-lg'>
          {shortNumber(streams)}
        </div>
      </HoverBorderGradient>
    </div>
  )
}

export default Song