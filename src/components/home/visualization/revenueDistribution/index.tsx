'use client'
import CustomTooltip from '@/components/common/customTooltip';
import Loader from '@/components/common/loader';
import { revenueDistribution } from '@/data';
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, ResponsiveContainer, Tooltip, Legend, Cell } from 'recharts';

const RevenueDistribution: React.FC = () => {
    const colors = ['#d946ef90', '#8b5cf690'];
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div className='w-full h-[360px]'>
            {loading ? (
                <Loader />
            ) : (
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
                            {revenueDistribution.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
                        <Legend iconSize={10} wrapperStyle={{ fontSize: "12px" }} />
                    </PieChart>
                </ResponsiveContainer>
            )}
        </div>
    );
};

export default RevenueDistribution;
