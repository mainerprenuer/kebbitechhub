import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'

const Home = () => {
  return (
    <div className='pt-8 bg-green-900'>
      <Hero />
      <About />
    </div>
  )
}

export default Home