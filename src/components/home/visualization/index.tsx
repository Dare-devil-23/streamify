import React from 'react';
import Card from '@/components/common/card';
import RevenueDistribution from '@/components/home/visualization/revenueDistribution';
import UserGrowth from '@/components/home/visualization/userGrowth';
import TopFive from '@/components/home/visualization/topFive';

const Visualizations: React.FC = () => {
    return (
        <div className='grid grid-cols-12 gap-3 md:gap-5'>
            <Card title='Revenue Distribution' className='col-span-12 lg:col-span-6 xl:col-span-3'>
                <RevenueDistribution />
            </Card>
            <Card title="User Growth" className='col-span-12 lg:col-span-6'>
                <UserGrowth />
            </Card>
            <Card title='Top 5 Songs' className='col-span-12 xl:col-span-3'>
                <TopFive />
            </Card>
        </div>
    )
}

export default Visualizations