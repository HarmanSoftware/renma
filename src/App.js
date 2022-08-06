import React from 'react'
import '../src/Assets/App.css';
import '../src/Assets/DarkMode.css'
import {Routes, Route} from "react-router-dom";


import { createContext, useState,useEffect} from 'react'

import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Renma from './Pages/Renma';
import Contact from './Pages/Contact';
import BookAppointment from './Pages/BookAppointment';
import HeroHeader from './Components/HeroHeader';

export const ThemeContext = createContext(null);

function App() {  
  let [theme, setTheme] = useState("light");
  function toggleTheme() {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));       
  };
  
  let data;
  useEffect(()=>{
    localStorage.setItem('modes',theme); 
    data= localStorage.getItem('modes'); 
  },[data]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>    
    <div className="App" id={theme}>
      <HeroHeader/>      
      <NavBar themeprops={theme} toglleprops={toggleTheme}/>               
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