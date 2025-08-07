import Hero from '@/sections/Hero'
import Services from '@/sections/Services'
import Welcome from '@/sections/Welcome'
import WhereWeSendEmployees from '@/sections/WhereWeSendEmployees'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <Services />
      <WhereWeSendEmployees />
    </div>
  )
}

export default Home
