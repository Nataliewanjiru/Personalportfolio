import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Intro from './Intro'
import React, { useRef } from 'react';

function App() {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null)
  const serviceRef = useRef(null)
  const homeRef = useRef(null)
  const portfolioRef =useRef(null)

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToExp = () => {
    experienceRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToService = () => {
    serviceRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="mainBody">
    <Navbar scrollToContact={scrollToContact} scrollToAbout={scrollToAbout} scrollToExp={scrollToExp} scrollToService={scrollToService} scrollToHome={scrollToHome} scrollToPortfolio={scrollToPortfolio}/>
    <Intro  homeRef={homeRef} portfolioRef={portfolioRef} contactRef={contactRef} experienceRef={experienceRef} aboutRef={aboutRef} serviceRef={serviceRef}/>
    </div>
  )
}

export default App;
