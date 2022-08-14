import React from 'react'
import AboutUs from '../Assets/Images/AboutUs.png'
export default function About() {
  return (
    <div>
      <div className='flex items-center content-center bg-mauve font-medium text-3xl px-2 w-ful h-12 text-black'>About Us</div>
      <img src={AboutUs} className='w-2/4 h-1/5 mx-auto' alt="about us img"/>
      <div className='container text-center mx-auto'>
      <p className='px-4 mb-3 font-normal text-lg text-justify'>   
      Our team of physiotherapists boast over 100 years of combined experienced. We provide an honest and ethical physiotherapy service to the residents of London and beyond.
      <br/><br/>
      Our clinic is based in the centre of London and is very easy to access for everyone. We offer a whole range of physiotherapy services no matter what injury, strain or pain you may have.    
      </p>      
      </div>
    </div>
  )
}
