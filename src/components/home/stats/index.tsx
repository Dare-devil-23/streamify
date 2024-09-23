import React from 'react';
import Card from '@/src/components/common/card';
import { keyMetrics } from '@/src/data';
import { formatCurrency, shortNumber } from '@/src/utils';

const Stats: React.FC = () => {
    return (
        <div>
            <div className='grid grid-cols-12 gap-3 md:gap-5'>
                <Card
                    title='Revenue'
                    bgImage="/images/revenue.svg"
                    className='col-span-6 lg:col-span-3'
                >
                    <Card.Item subTitle='Total'>
                        {formatCurrency(keyMetrics.revenue.total)}
                    </Card.Item>
                </Card>
                <Card
                    title='Top Artist'
                    bgImage="/images/sing.svg"
                    className='col-span-6 lg:col-span-3'
                >
                    <Card.Item subTitle={`${shortNumber(keyMetrics.topArtist.streamCount)} streams`}>
                        {keyMetrics.topArtist.name}
                    </Card.Item>
                </Card>
                <Card
                    title='Total Streams'
                    bgImage="/images/cd.svg"
                    className='col-span-6 lg:col-span-3'
                >
                    <Card.Item>
                        {shortNumber(keyMetrics.totalStreams)}
                    </Card.Item>
                </Card>
                <Card
                    title='Users'
                    bgImage="/images/user-group.svg"
                    className='col-span-6 lg:col-span-3'
                >
                    <div className='flex justify-between'>
                        <Card.Item subTitle="Total">
                            {shortNumber(keyMetrics.totalUsers)}
                        </Card.Item>
                        <Card.Item subTitle="Active">
                            {shortNumber(keyMetrics.activeUsers)}
                        </Card.Item>
                        <div /> {/* Spacer */}
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Stats