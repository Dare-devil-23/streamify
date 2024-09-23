import React from 'react';
import Card from '@/src/components/common/card';
import RevenueDistribution from '@/src/components/home/visualization/revenueDistribution';
import UserGrowth from '@/src/components/home/visualization/userGrowth';
import TopFive from '@/src/components/home/visualization/topFive';
import AgeGroups from '@/src/components/home/ageGroups';
import StreamTable from '@/src/components/home/dataTable';

const Visualizations: React.FC = () => {
    return (
        <div className='grid grid-cols-12 gap-5'>
            <Card title='Revenue Distribution' className='col-span-12 lg:col-span-6 xl:col-span-3'>
                <RevenueDistribution />
            </Card>
            <Card title="User Growth" className='col-span-12 lg:col-span-6'>
                <UserGrowth />
            </Card>
            <Card title='Top 5 Songs' className='col-span-12 lg:col-span-6 xl:col-span-3'>
                <TopFive />
            </Card>
            <Card title="Age Groups" className="col-span-12 min-h-[450px] lg:col-span-6 xl:col-span-4">
                <AgeGroups />
            </Card>
            <Card title="Stream History" className="col-span-12 lg:col-span-12 xl:col-span-8">
                <StreamTable />
            </Card>
        </div>
    )
}

export default Visualizations