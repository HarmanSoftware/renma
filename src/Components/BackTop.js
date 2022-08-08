import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import React,{useState,useEffect} from 'react'
import rocketUp from './rocketUp.png';

export default function BackTop(props) {

    const [backTop,setBackTop]=useState(false);
    useEffect(()=>{
    window.addEventListener('scroll',()=>{
        if(window.scrollY>100){
            setBackTop(true)
        }else{
            setBackTop(false)
        }
    })
    },[]);

    const scrollUp=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
  return (
    <div>        
       {backTop &&
       <Tippy content="Back To Top">
       <button 
        onClick={scrollUp} className='fixed bottom-10 right-8 left-8 h-12 w-12 '>
            <img src={rocketUp} className='scale-125' alt='Back to top icon'/>
        </button>
        </Tippy>
        } 
    </div>
  )
}
