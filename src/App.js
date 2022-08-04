import React from 'react'
import '../src/Assets/App.css';
import {Routes, Route} from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Renma from './Pages/Renma';
import Contact from './Pages/Contact';
import BookAppointment from './Pages/BookAppointment';
import HeroHeader from './Components/HeroHeader';

function App() {  
  return (
    <>    
      <HeroHeader/>
      <NavBar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="renma" element={<Renma />} />
        <Route path="contact" element={<Contact />} />
        <Route path="bookAppointment" element={<BookAppointment />} />
     </Routes>
    </>
  );
}
export default App;