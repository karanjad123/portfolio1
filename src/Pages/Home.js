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
            <div className='para2'>
            <header className="hero">
            
            
                
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
                    <a href="https://www.facebook.com/" className='icon-holder'>
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </a>
                    <a href="https://github.com/karanjad123" className='icon-holder'>
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href="https://www.linkedin.com/in/karan-jadhav-0957ba194/" className='icon-holder'>
                        <FontAwesomeIcon icon={faLinkedin} className="icon yt"/>
                    </a>
                </div>
                
            </header>
            </div>
        </div>
    )
}

export default HomePage;