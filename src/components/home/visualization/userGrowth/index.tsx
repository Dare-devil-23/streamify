'use client'
import CustomTooltip from '@/components/common/customTooltip';
import { userGrowth } from '@/data';
import React, { useEffect, useState } from 'react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const UserGrowth: React.FC = () => {

    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className='w-full h-[360px]'>
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
        </div>
    )
}

export default UserGrowth