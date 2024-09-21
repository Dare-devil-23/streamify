import React from 'react';
import Card from '@/components/common/card';
import { keyMetrics } from '@/data';

const Stats: React.FC = () => {
    return (
        <div>
            <div className='text-medium font-semibold mb-3 uppercase tracking-[2px] opacity-40'>
                Stats
            </div>
            <div className='grid grid-cols-12 gap-3 md:gap-5'>
                <Card title='Revinue' className='col-span-6 lg:col-span-3'>
                    <Card.Item>
                        {keyMetrics.revenue.total}
                    </Card.Item>
                </Card>
                <Card title='Top Artist' className='col-span-6 lg:col-span-3'>
                    <Card.Item subTitle={keyMetrics.topArtist.streamCount}>
                        {keyMetrics.topArtist.name}
                    </Card.Item>
                </Card>
                <Card title='Total Streams' className='col-span-6 lg:col-span-3'>
                    <Card.Item>
                        {keyMetrics.totalStreams}
                    </Card.Item>
                </Card>
                <Card title='Users' className='col-span-6 lg:col-span-3'>
                    <div className='flex justify-between'>
                        <Card.Item subTitle="Total">
                            {keyMetrics.totalUsers}
                        </Card.Item>
                        <Card.Item subTitle="Active">
                            {keyMetrics.activeUsers}
                        </Card.Item>
                        <div /> {/* Spacer */}
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Stats