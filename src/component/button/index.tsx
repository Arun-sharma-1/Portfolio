import React from 'react'
import { ArrowRight } from 'lucide-react';
const CommonButton = () => {
    return (
        <div className='bg-[var(--primary-color)] flex gap-2 border-white border-2 py-2 px-6 rounded-full justify-center items-center cursor-pointer'>
            <div className='cursor-pointer text-black'>RESUME</div>
            <div className='cursor-pointer text-black'>
                <ArrowRight />
            </div>
        </div>
    )
}

export default CommonButton