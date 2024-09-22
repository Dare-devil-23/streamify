'use client'
import CustomTooltip from '@/components/common/customTooltip';
import { revenueDistribution } from '@/data';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer, Tooltip, Legend, Cell } from 'recharts';

const RevenueDistribution: React.FC = () => {
    const [mounted, setMounted] = useState(false);

    const colors = ['#d946ef90', '#8b5cf690'];

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className='w-full h-[360px]'>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={revenueDistribution}
                        dataKey="value"
                        label
                        legendType='circle'
                        stroke='#27272a'
                        className='outline-none text-small'
                    >
                        {
                            revenueDistribution.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))
                        }
                    </Pie>
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={{ fill: "transparent" }}
                    />
                    <Legend iconSize={10} wrapperStyle={{ fontSize: "12px" }} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RevenueDistribution;
