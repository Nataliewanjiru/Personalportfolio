import "./About.css"

function About(){
    return(
        <div className="aboutPage">
        <h1>About</h1>
        <div className="pageline"></div>
        <p className="firstStatement">I weave digital landscapes, crafting innovative online experiences that transcend boundaries. Proficient in various programming languages and design principles, I sculpt websites with precision and creativity. As a skilled web developer, I merge artistry with technology to shape the digital realm, one line of code at a time.</p>
        <div className="imagewordDiv">
            <img src="https://wallpapers.com/images/featured/flower-pictures-unpxbv1q9kxyqr1d.jpg"/>
        <div className="wordDiv">
        <h2>FullStack Developer</h2>
          <p className="secondStatement">I possess expertise in both front-end and back-end development, making me a versatile full-stack developer.</p>
          <div className="wordDivSection">
            <div className="wordSection1">
                <ul>
                    <li>Email: nataliewanjiru19@gmail.com</li>
                    <li>Phone: 0722540295</li>
                </ul>
            </div>
            <div className="wordSection2">
                <ul>
                    <li>City:Nairobi</li>
                    <li>Freelance:Available</li>
                </ul>
            </div>
            </div>
            <p className="lastStatement">Choices have their roots in labor and the hardships of duties, indeed. Anyone can achieve all and more. No one escapes the pain in official duties. And everything about it. Longing for the utmost duty is natural. Yet, there is resistance, precisely because of that. Something surely seeks desire. Both he and anyone repelling all are responsible for great and praise-worthy pain.</p>
            <button>Contact Me</button>
        </div>
        </div>
        </div>
    )
}

export default About;