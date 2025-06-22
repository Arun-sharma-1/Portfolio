import React from 'react'
const HeroSection = () => {
    return (
        <div className='w-full md:max-w-9/12 mx-auto flex justify-center items-center mt-22 flex-auto'>

            <div className="flex flex-col gap-5 justify-center items-center">

                <div className="flex flex-col gap-3">
                    <div className="w-40 h-40 rounded-full overflow-hidden landingimganimation">
                        <img
                            src='/arun-hero-img.png'
                            className="w-full h-full object-center "
                            alt="Avatar"
                        />
                    </div>
                    <p className='text-[24px]  leading-[36px] text-center'>Hi I'm Arun</p>
                </div>
                <p className='font-bold leading-[42px] md:leading-[58px] text-[32px] md:text-[48px] selection text-center'>Merging beautiful frontends <br /> with bulletproof backends.</p>

                <p className='leading-[24px] md:text-[16px] font-normal selection text-center'>Full stack developer with an eye for detail and a heart for clean architecture.</p>

                <button className='bg-black py-4 px-6 text-white hover:text-black border-2 rounded-full flow-btn relative z-10 cursor-pointer overflow-hidden'>CONNECT WITH ME</button>

                <div className='h-[1px] w-full bg-[#FBE6D0] mt-20 lg:mt-40'></div>

                {/* image animation section  */}
                <div>

                    <div className='flex gap-4 relative invisible'>
                        <img src={'/js-img.svg'} className='w-[50px] moving-js-img' />
                        <img src={'/docker-img.svg'} className='w-[50px] moving-doc-img' />
                        <img src={'/next-img.webp'} className='w-[50px] moving-next-img ' />
                    </div>

                </div>
            </div>


        </div>
    )
}

export default HeroSection