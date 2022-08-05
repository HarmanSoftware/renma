import React from 'react'
import { Oval } from  'react-loader-spinner'

export default function LoadSpiner() {
  return (
    <div  className="flex items-center justify-center bg-lightmauve"> 
    <Oval 
    height = "45"
    width = "45"
    radius = "9"
    color = 'white'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass/>
     </div>
  )
}
