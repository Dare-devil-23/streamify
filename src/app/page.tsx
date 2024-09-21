import React from 'react'
import Stats from '@/components/home/stats'
import Visualizations from '@/components/home/visualization'
import StreamTable from '@/components/home/dataTable'

const Home: React.FC = () => {
  return (
    <section className='flex gap-8 flex-col mb-5'>
        <Stats />
        <Visualizations />
        <StreamTable />
    </section>
  )
}

export default Home