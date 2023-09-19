import React from 'react'
import darkAbout from '../images/image-about-dark.jpg';
import lightAbout from '../images/image-about-light.jpg';

const About = () => {
  return (
    <>
        <div className='grid grid-cols-1 lg:grid-cols-3 '>
            <div>
               <img src={darkAbout} alt="" className='w-full'/>  
            </div>

            <div className='p-8 lg:p-12'>
                <h2 className='text-slate-900 font-semibold uppercase text-2xl lg:text-3xl' style={{letterSpacing:'0.3rem'}}>About our furniture</h2>
                <p className='text-slate-600 opacity-75 mt-3'>  Our multifunctional collection blends design and function to suit your individual taste.
                     Make each room unique, or pick a cohesive theme that best express your interests and what
                     inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                     or anything in between. Product specialists are available to help you create your dream space.</p>
            </div>
            <div>
                <img src={lightAbout} alt='' className='w-full h-full'/>
            </div>
        </div>
    </>
  )
}

export default About