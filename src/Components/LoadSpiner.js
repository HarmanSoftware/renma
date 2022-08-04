import React from 'react'
import { Oval } from  'react-loader-spinner'

export default function LoadSpiner() {
  return (
    <div className='flex items-center justify-center'> 
    <Oval
    height = "45"
    width = "45"
    radius = "9"
    color = 'purple'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass/>
     </div>
  )
}
