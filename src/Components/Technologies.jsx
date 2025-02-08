import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { IoLogoPython } from "react-icons/io5";

import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoJavascript } from "react-icons/bi";
import { FcLinux } from "react-icons/fc";
import "../Costumcss/animation.css"
const Technologies = () => {
    return (
        <div className=' border-neutral-800 pb-24'>
            <h2 className='my-10 text-center text-4xl'>Technologies</h2>
            <div className='wave-animation flex flex-wrap items-center justify-center gap-4'>
                <div className='rounded-2xl border-4 border-neutral-800 p-4 wave-animation1 size4 hover:animate-pulse'>
                    <img className='w-16 h-17' src="https://user-images.githubusercontent.com/11183158/43805223-f23c1250-9a6c-11e8-9677-a45e08df2d7c.png" alt="Logo" />
                </div>

                <div className='rounded-2xl border-4 border-neutral-800 p-4 wave-animation2 hover:animate-pulse'>
                    <IoLogoPython className='text-7xl text-yellow-400' />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4 wave-animation3 hover:animate-pulse'>
                    <FaHtml5 className='text-7xl text-orange-600' />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4 wave-animation4 hover:animate-pulse'>
                    <RiTailwindCssFill className='text-7xl text-blue-500' />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4 wave-animation5 hover:animate-pulse'>
                    <BiLogoJavascript className='text-7xl text-yellow-400' />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4 wave-animation1 hover:animate-pulse'>
                    <RiReactjsLine className='text-7xl text-cyan-700' />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4 wave-animation2 hover:animate-pulse'>
                    <FcLinux className='text-7xl text-yellow-400' />
                </div>

            </div>
        </div>



    )
}

export default Technologies