import React from 'react'
import ProfilePic from "../assets/swarooppic.jpg"

const Hero = () => {
    return (
        <div className='border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className="w-full lg:w-1/2">
                    <div className='flex flex-col items-center lg:item-start'>

                        <h1 className='pb-5 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>
                            Swaroop Wayadande
                        </h1>
                        <div class="overflow-hidden h-16 text-center pt-1">
    <div class="space-y-2">
        <div></div>
        <div></div>
        <span class="typing-effect span-1 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
            Front-End Developer
        </span>
        <div></div>
        <span class="typing-effect span-2 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
            Software Engineer
        </span>
        <div></div>
        <span class="typing-effect span-3 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
            Web Designer
        </span>
    </div>
</div>

                        <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                            yubgyu
                        </p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8 pl-5'>
                    <div className="flex justify-center h-30">
                        {/* Adjusted image size */}
                        <img
                            src={ProfilePic}
                            alt="Profilepic"
                            className="w-100 h-100 lg:w-100 lg:h-100 object-fill rounded-2xl "
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
