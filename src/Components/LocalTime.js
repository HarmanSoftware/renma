import React from 'react'
import { useState,useEffect } from 'react';

export default function LocalTime() {
    let time = new Date().toLocaleString("en-US", {    
        "hour": "2-digit",
        "minute": "2-digit",                
    });

    var [date,setDate] = useState(time);
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }    
    });

  return (
    <>{time}</>
  )
}
