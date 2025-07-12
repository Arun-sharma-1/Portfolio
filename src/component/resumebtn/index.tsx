import React from 'react'
import { ArrowRight } from 'lucide-react';
const ResumeButton = ({text}:{text:string}) => {
    return (
        <div className='bg-[var(--primary-color)] flex gap-2 border-white border-2 py-2 px-6 rounded-full justify-center items-center cursor-pointer'>
            <div className='cursor-pointer text-black'>
                {text}
            </div>
            <div className='cursor-pointer text-black'>
                <ArrowRight />
            </div>
        </div>
    )
}

export default ResumeButton