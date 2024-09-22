import React from 'react'
import Song from '@/components/common/song'
import { topSongs } from '@/data'

const TopFive: React.FC = () => {
    return (
        <div className='flex flex-col gap-2'>
            {
                topSongs.map((song, index) => (
                    <Song
                        key={index}
                        songName={song.songName}
                        artist={song.artist}
                        streams={song.streams}
                        coverPic={song.coverPic}
                    />
                ))
            }
        </div>
    )
}

export default TopFive