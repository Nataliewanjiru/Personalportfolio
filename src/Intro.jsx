import About from "./About"
import './Intro.css'
import Contact from "./Contact";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Home from "./Home";



function Intro ({ homeRef,portfolioRef,contactRef,aboutRef,experienceRef,serviceRef }){
    
    return(
        <div className="contentSection">
        <div ref={homeRef}><Home/></div>
        <div ref={aboutRef}><About/></div>
        <div ref={experienceRef}><Experience/></div>
        <div ref={portfolioRef}><Portfolio/></div>
        <div ref={serviceRef}><Services/></div>
        <div ref={contactRef}><Contact /></div>
        </div>
    )
}

export default Intro;