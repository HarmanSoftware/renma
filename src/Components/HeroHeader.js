import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function HeroHeader() {
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

    const [weather, setWeather] = useState();   
   
    useEffect(()=>{
      const weatherAPI=`https://api.weatherapi.com/v1/current.json?key=493460b7dcd54f3bb2f110359220208&q=erbil&api=no`;
     
      axios.get(weatherAPI)
      .then((result)=>{setWeather(result.data);
        })
      .catch(()=>{})
      .then(()=>{});
    },[weather]);   
  
    if (!weather) return <p> Loading ..</p>;   

  return (
    <>
     <div className='flex content-start justify-between bg-mauve'>
    <div className='flex items-center justify-center text-base font-medium px-1 h-12' tabIndex="1">  
    {time}
    </div>    
    <div className='flex items-center justify-center text-base font-medium'>
   {weather.location.name}
   {weather.current.temp_c}°C{' | '}
   {weather.current.condition.text}
   <img src={weather.current.condition.icon} width="30px" />
      </div>
    <div className='flex items-center justify-center'>
    <button type='button' className='bg-scampi w-5 h-4 mx-1'></button> 
    <button type='button' className='bg-blue-chill w-5 h-4' ></button> 
    <button type='button' className='bg-vivid w-5 h-4 mx-1 '></button> 
    </div>
    </div>
    </>
  )
}