import React from 'react'
import ReactCarousel from '../Components/ReactCarousel'

export default function Home() {
  return (
    <>
     <div className='container mx-auto grid lg:grid-cols-2 sm:grid-cols-1'>
       <div className='bg-red-500 m-8'>
         <ReactCarousel></ReactCarousel>
       </div>
       <div className='bg-red-300 p-20 m-8'>

       </div>
    </div>
    </>
  )
}
