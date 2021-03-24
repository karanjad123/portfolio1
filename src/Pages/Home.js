import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import karan from '../images/Capture1.PNG'
import Typed from 'react-typed'


function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
            <div className="NavBar1">
                <nav className="nav1">
                    <div className="profile1">
                        <img src={karan} alt=""/>
                    </div>
                </nav>
            </div>
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Karan Jadhav</span>
                </h1>
                <p className="h-sub-text">
                  Welcome to My space on the Internet. I am a Graduate student, a Research Assistant by Profession and an Entrepreneur at Heart. I love building new things like :
                </p>
                <p className="h-sub-text1">
                <Typed
                    className='typed'
                    strings={[" Machine Learning Projects."," Full Stack Eccomerce Website."," Personal Portfolio.", " Hand Gesture Detection System."]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                  />
                </p>
                <div className="icons">
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon yt"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;