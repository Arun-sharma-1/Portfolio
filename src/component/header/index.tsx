'use client'
import React from 'react'
import CommonButton from '../button'
import { Lamp, Menu } from 'lucide-react'
import useTheme from '@/hooks/useTheme'

const HeaderRootComponent = () => {
    const [currentTheme, setCurrentTheme] = useTheme();
    console.log('currentTheme in header',currentTheme)
    return (
        <div className='fixed top-0 pt-[35px]  md:pt-5 flex justify-evenly md:justify-between items-center w-full  z-100 gap-20'>
            <div className='text-1xl font-semibold leading-1.5 md:ml-[200px]'>ARUN</div>
            <div className='flex gap-[15px] md:hidden cursor-pointer'>
                <Lamp onClick={()=>setCurrentTheme((prev)=>(prev === 'light' ? 'dark' : 'light'))}/>
                <Menu />
            </div>
            <div className='hidden md:flex flex-row gap-6 items-center  font-semibold text-[13px] mr-[280px]'>

                <div className='cursor-pointer'>PROJECTS</div>
                <div className='cursor-pointer'>CONTACT</div>
                <div className='cursor-pointer'>SKILLS</div>
                <CommonButton />
                <div className='cursor-pointer'>
                <Lamp onClick={()=>setCurrentTheme((prev)=>(prev === 'light' ? 'dark' : 'light'))}/>
                </div>


            </div>

        </div>
    )
}

export default HeaderRootComponent