'use client'
import React, { useEffect, useState } from 'react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import CustomTooltip from '@/src/components/common/customTooltip';
import Loader from '@/src/components/common/loader';
import { userGrowth } from '@/src/data';

const UserGrowth: React.FC = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div className='w-full h-[360px]'>
            {
                loading ? (
                    <Loader />
                ) : (
                    <ResponsiveContainer >
                        <AreaChart
                            width={500}
                            height={300}
                            data={userGrowth}
                            margin={{
                                top: 5,
                                right: 5,
                                left: -15,
                                bottom: 5,
                            }}
                            className='text-small'
                        >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip
                                content={<CustomTooltip />}
                                cursor={{ fill: "transparent" }}
                            />
                            <Area type="monotone" dataKey="totalUsers" stroke="#8b5cf6" fill="#8b5cf620" />
                            <Area type="monotone" dataKey="activeUsers" stroke="#d946ef" fill="#d946ef20" />
                        </AreaChart>
                    </ResponsiveContainer>
                )
            }
        </div>
    )
}

export default UserGrowth