import React from 'react'
import AboutUs from '../Assets/Images/AboutUs.png'
export default function About() {
  return (
    <div>
      <div className='container mx-auto text-center text-3xl font-medium bg-soft-purple rounded-lg p-6 mt-8 text-white'>About Renma</div>
      <div className='container text-center mx-auto bg-lightmauve m-6 rounded-lg scale-95 hover:scale-100 ease-in-out duration-500'>
      <img src={AboutUs} className='w-2/4 h-1/5 mx-auto' alt="about us img"/>
      <p className='p-4 mb-3 font-normal text-lg text-justify'>   
      Our team of physiotherapists boast over 100 years of combined experienced. We provide an honest and ethical physiotherapy service to the residents of London and beyond.
      Our clinic is based in the centre of London and is very easy to access for everyone. We offer a whole range of physiotherapy services no matter what injury, strain or pain you may have.    
      </p>      
      </div>
    </div>
  )
}
