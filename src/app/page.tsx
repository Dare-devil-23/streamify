import React from 'react'
import Stats from '@/components/home/stats'
import Visualizations from '@/components/home/visualization'

const Home: React.FC = () => {
  return (
    <section className='flex gap-5 flex-col mb-5'>
      <Stats />
      <Visualizations />
    </section>
  )
}

export default Home