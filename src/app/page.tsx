import React from 'react'
import Stats from '@/src/components/home/stats'
import Visualizations from '@/src/components/home/visualization'

const Home: React.FC = () => {
  return (
    <section className='flex gap-5 flex-col mb-5'>
      <Stats />
      <Visualizations />
    </section>
  )
}

export default Home