'use client'
import React, { useEffect, useState } from 'react'
// import Song from '@/src/components/common/song'
import { topSongs } from '@/src/data'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import Loader from '@/src/components/common/loader'
import CustomTooltip from '@/src/components/common/customTooltip'

const GraphType: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <div className='w-full h-[360px]'>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <ResponsiveContainer>
                        <BarChart
                            margin={{
                                top: 5,
                                right: 5,
                                left: -15,
                                bottom: 5,
                            }}
                            className='text-small'
                            data={topSongs}
                        >
                            <Bar width={10} dataKey="streams" fill="#7b77c0" />
                            <XAxis dataKey="songName" />
                            <YAxis />
                            <Tooltip
                                content={<CustomTooltip disableColor />}
                                cursor={{ fill: "transparent" }}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                )
            }
        </div>
    )
}

// const CardType: React.FC = () => {
//     return (
//         <div className='flex flex-col gap-2'>
//             {
//                 topSongs.map((song, index) => (
//                     <Song
//                         key={index}
//                         songName={song.songName}
//                         artist={song.artist}
//                         streams={song.streams}
//                         coverPic={song.coverPic}
//                     />
//                 ))
//             }
//         </div>
//     )
// }

const TopFive: React.FC = () => {
    return (
        <>
            <GraphType />
            {/* <CardType /> */}
        </>
    )
}

export default TopFive