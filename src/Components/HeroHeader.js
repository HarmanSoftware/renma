import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import LoadSpiner from './LoadSpiner';
import LocalTime from './LocalTime';

export default function HeroHeader() {
     
    const [weather, setWeather] = useState();   
    const [error,setError]=useState(); 

    useEffect(()=>{
      const weatherAPI=`https://api.weatherapi.com/v1/current.json?key=493460b7dcd54f3bb2f110359220208&q=erbil&api=no`;
     
      axios.get(weatherAPI)
      .then((result)=>{setWeather(result.data);
        })
      .catch((e)=>{setError(e)})
      .then(()=>{});
    },[weather]); 
  
    if (!weather) return (<LoadSpiner/>);      
    
  return (
    <>
     <div className='flex content-start justify-between bg-mauve'>
    <div className='flex items-center justify-center text-base font-medium px-1 h-12' tabIndex="1">  
       {weather && <LocalTime/>}
    </div>    
    <div className='flex items-center justify-center text-base font-medium'>
   {weather.location.name}
   {weather.location.country='Iraq'} {'|'}
   {weather.current.temp_c}°C{' | '}
   {weather.current.condition.text}
   <img src={weather.current.condition.icon} width="35px" alt='weather condition icon'/>
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