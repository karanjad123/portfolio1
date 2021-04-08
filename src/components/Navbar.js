import React from 'react'
import {NavLink} from 'react-router-dom';
import karan from '../images/Capture.PNG'
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Navbar() {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={karan} alt=""/>
                    <h2> Karan Jadhav</h2>
                    <p>karan.jadhav@uga.edu</p>
                 </div>

                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolios" exact activeClassName="active">
                            Portfolios
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                    <li className='icons'>
                        
                        <a href="https://www.facebook.com/" className='icon-holder1'>  
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" style={{width:'2rem' ,height:'2rem' ,marginLeft:'0.5rem', marginTop:'1rem'}}/>
                        </a>
                        <a href="https://github.com/karanjad123" className='icon-holder1'>
                        <FontAwesomeIcon icon={faGithub} className="icon gh" style={{width:'2rem' ,height:'2rem' ,marginLeft:'0.5rem', marginTop:'1rem'}} />
                        </a>
                        <a href="https://www.linkedin.com/in/karan-jadhav-0957ba194/" className='icon-holder1'>
                        <FontAwesomeIcon icon={faLinkedin} className="icon yt" style={{width:'2rem' ,height:'2rem' ,marginLeft:'0.5rem', marginTop:'1rem'}}/>
                        </a>
                        
                    </li>
                    
                </ul>

                <footer className="footer">
                    <p>
                        @2021 karan
                    </p>
                </footer>
            </nav>
            
        </div>
    )
}

export default Navbar;