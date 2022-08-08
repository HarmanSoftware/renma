import React from 'react'
import '../src/Assets/App.css';
import '../src/Assets/DarkMode.css';
import '../src/Assets/Global.css';
import { createContext, useState,useEffect} from 'react'
import {Routes, Route} from "react-router-dom";

import BackTop from './Components/BackTop';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Renma from './Pages/Renma';
import Contact from './Pages/Contact';
import BookAppointment from './Pages/BookAppointment';
import HeroHeader from './Components/HeroHeader';
import ScrollIndicator from './Components/ScrollIndicator';


export const ThemeContext = createContext(null);

function App() {  
  let [theme, setTheme] = useState("light");
  function toggleTheme() {    
    if(theme==='light'){
      setTheme('dark');
      localStorage.setItem('modes','dark');
    }else{
      setTheme(theme==='dark');
      setTheme('light');
      localStorage.setItem('modes','light');
    }
  }; 
  useEffect(()=>{    
    const theme=localStorage.getItem('modes');
    setTheme(theme);
  },[]);
  

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>    
    <div className="App" id={theme}>
      <HeroHeader/>      
      <NavBar themeprops={theme} toglleprops={toggleTheme}/>  
      <ScrollIndicator/>     
            <h1>My Heading</h1>
            <h1>My Heading</h1>
            <h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1>
            <h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1><h1>My Heading</h1>
    <BackTop themeprops={theme}/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="renma" element={<Renma />} />
        <Route path="contact" element={<Contact />} />
        <Route path="bookAppointment" element={<BookAppointment />} />
     </Routes>   
    </div>
     </ThemeContext.Provider>
  );
}
export default App;