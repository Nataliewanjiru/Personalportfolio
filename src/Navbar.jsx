import './Navbar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faTwitterSquare,faInstagram,faGithub } from '@fortawesome/free-brands-svg-icons';
import Contact from './Contact';

function Navbar({ scrollToContact ,scrollToAbout, scrollToExp}){
    return(
        <>
        <div className="sideSection">
            <image src="#" alt="User image"/>
            <h2>Natalie Wanjiru</h2>
            <div className='mediaLink'>
                <nav>
                    <ul className="social-icons">
                        <li> <FontAwesomeIcon icon={faTwitterSquare} size="2x" style={{ color: "#8e96a4" }} /></li>
                        <li><FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: "#8e96a4" }} /></li>
                        <li><FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: "#8e96a4" }}/></li>
                        <li><a href="https://github.com/Nataliewanjiru" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" style={{ color: "#8e96a4" }}/></a></li>
                    </ul>
                </nav>
            </div>
            <div className="navbarDiv">
                <nav>
                 <ul>
                   <li>Home</li>
                   <li onClick={scrollToAbout}>About</li>
                   <li onClick={scrollToExp}>Experience</li>
                   <li>Portfolio</li>
                   <li>Services</li>
                   <li onClick={scrollToContact}>Contact</li>
                 </ul>
                </nav>
            </div>
        </div>
        </>
    )
}

export default Navbar;