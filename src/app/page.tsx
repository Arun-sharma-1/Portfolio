import HeaderRootComponent from '@/component/header'
import HeroSection from '@/component/Hero'
import React from 'react'

const RootPage = () => {
  return (

    <div className='relative p-[15px]'>
      {/* header  */}
      <HeaderRootComponent />
      {/* hero section */}
      <section className='mt-10'>
        <HeroSection />
      </section>

    </div>
    
  )
}

export default RootPage