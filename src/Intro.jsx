import About from "./About"
import './Intro.css'
import Contact from "./Contact";
import Experience from "./Experience";
import Portfolio from "./Portfolio";



function Intro ({ contactRef,aboutRef,experienceRef }){
    
    return(
        <div className="contentSection">
        <h2>Hello</h2>
        <div ref={aboutRef}><About/></div>
        <div ref={experienceRef}><Experience/></div>
        <Portfolio/>
        <div ref={contactRef}><Contact /></div>
        </div>
    )
}

export default Intro;