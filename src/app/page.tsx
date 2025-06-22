import HeaderRootComponent from '@/component/header'
import HeroSection from '@/component/hero'
import SkillsSection from '@/component/skills'
import React from 'react'

const RootPage = () => {
  return (

    <div className='relative p-[15px]'>
      {/* header  */}
      <HeaderRootComponent />
      {/* hero section */}
      <section className="mt-10">
        <HeroSection />
      </section>
      {/* skills section  */}
      <section className='lg:mt-20'>
        <SkillsSection />
      </section>
    </div>

  )
}

export default RootPage