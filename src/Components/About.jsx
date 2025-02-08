import React from 'react';
import aboutImg from "../assets/swaroopstage.jpeg";


const About = () => {
    return (
        <div className=' border-neutral-900 pb-4'>
            <h2 className='my-5 text-center text-4xl'>About
                <span className='text-neutral-500 pl-2'>Me</span>
            </h2>
            <div className='flex flex-wrap justify-center'>
                <div className='w-full lg:w-1/2 flex justify-center '>
                    <img className="rounded-2xl" src={aboutImg} alt="aboutimage" />
                </div>
                <div className='w-full lg:w-1/2 pr-5 text-center py-40'>
                    <p>ubiuytvuyyu</p>
                </div>
            </div>
        </div>
    );
};

export default About;
