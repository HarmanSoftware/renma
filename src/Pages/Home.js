import React from 'react'
import { Link } from 'react-router-dom'
import ReactCarousel from '../Components/ReactCarousel'

export default function Home() {
  return (
    <>
     <div className='container mx-auto grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 m-8'>       
       <div className='bg-lightpurple lg:rounded-l-lg'>
            <div className='p-5 m-0 lg:text-4xl md:text-3xl font-medium' id='slider-heading'>Have you got any body ache?</div>
            <div className='px-6 mt-2 lg:text-xl  md:text-lg font-medium text-slate-800' id='slider-text'>Book an appointment with one of our expert physiotherapists today and begin the journey to a pain free life.
       </div>
       <div className='text-center p-6 m-0 font-medium'>
        <Link to='/bookAppointment'>
            <button type='text' className='lg:text-2xl md:text-xl sm:text-2xl px-5 py-3 mt-4 bg-soft-purple text-white rounded-lg'>Book Appointment</button>
        </Link>
       </div>
       </div>
       <div>
         <ReactCarousel></ReactCarousel>
       </div>
    </div>
    </>
  )
}
