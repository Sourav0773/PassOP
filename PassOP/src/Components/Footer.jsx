// eslint-disable-next-line no-unused-vars
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center  w-full'>
            <div className="logo font-bold text-white text-2xl">
                <span className='text-red-500'> &lt;</span>

                <span>Pass</span><span className='text-red-500'>OP/&gt;</span>


            </div>
            <div className='flex justify-center items-center'> Created with <img className='w-7 mx-2' src="icons/heart.png" alt="" /> by SOURAV </div>
        </div>
    )
}

export default Footer