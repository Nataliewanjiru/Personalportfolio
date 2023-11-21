import "./Experience.css"
const Experience=()=>{
    return(
        <div className="experiencePageParent">
        <div className="experiencePage">
            <h1>Experience</h1>
            <p className="sectionA">As a seasoned web developer, I leverage diverse tools to engineer innovative solutions, elevating online experiences with expertise and finesse.</p>
            
            <div className="skillDiv">
            <div className="listDiv">
               <div className="section">
                 <div className="barLabel">
                   <p>HTML5</p> 
                   <p>95%</p>
                 </div>
                 <div className="progress-bar">
                   <div className="progress" style={{ width: '95%' }}></div>
                 </div>
               </div>
            </div>

            <div className="listDiv">
                <div className="section">
                  <div className="barLabel">
                    <p>CSS</p> 
                    <p>80%</p>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '80%' }}></div>
                  </div>
                </div>
             </div>

             <div className="listDiv">
                <div className="section">
                  <div className="barLabel">
                    <p>React</p> 
                    <p>75%</p>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '75%' }}></div>
                  </div>
                </div>
            </div>
            
         <div className="listDiv">
            <div className="section">
              <div className="barLabel">
                <p>Javascript</p> 
                <p>80%</p>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '80%' }}></div>
              </div>
            </div>
         </div>

         <div className="listDiv">
           <div className="section">
             <div className="barLabel">
               <p>Python</p> 
               <p>70%</p>
             </div>
             <div className="progress-bar">
               <div className="progress" style={{ width: '70%' }}></div>
             </div>
           </div>
        </div>

        <div className="listDiv">
          <div className="section">
            <div className="barLabel">
              <p>Flask</p> 
              <p>60%</p>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>

        <div className="listDiv">
          <div className="section">
            <div className="barLabel">
              <p>SQLAlchemy</p> 
              <p>65%</p>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '65%' }}></div>
            </div>
          </div>
      </div>
      </div>

        </div>
        </div>
    )
}
export default Experience;