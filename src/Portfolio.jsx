import "./App.css"
import { useState } from 'react';

const Portfolio =()=>{
    const [isHovered, setIsHovered] = useState(false);
     
    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

    return(
        <div className="portfolioPage">
        <h1>Portfolio</h1>
        <div className="projectsList">
            <div className="projectSection"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img className="projectImage" src="https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                {isHovered && (
                  <div className="projectLink">
                    <p>Link</p>
                  </div>
                   )}
            </div>
            <div className="projectSection"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img style={{height:'220px'}} className="projectImage" src="./TameRate.png"/>
               {isHovered && (
                 <div className="projectLink">
                   <p><a href="https://rcc-rate-card-669906458946.us-central1.run.app/">Rate Card</a></p>
                 </div>
                  )}
             </div>
             <div className="projectSection"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
             <img style={{height:'220px'}} className="projectImage" src="./Autotrackdev.png"/>
               {isHovered && (
                 <div className="projectLink">
                   <p><a href="https://autotrackorg.netlify.app/">Autotrack</a></p>
                 </div>
                  )}
         </div>
        </div>
        </div>
    )
}

export default Portfolio;