import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Intro from './Intro'
import React, { useRef } from 'react';

function App() {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null)

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToExp = () => {
    experienceRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="mainBody">
    <Navbar scrollToContact={scrollToContact} scrollToAbout={scrollToAbout} scrollToExp={scrollToExp}/>
    <Intro contactRef={contactRef} experienceRef={experienceRef} aboutRef={aboutRef}/>
    </div>
  )
}

export default App;
