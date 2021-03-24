import React from 'react'
import {NavLink} from 'react-router-dom';
import karan from '../images/Capture.PNG'
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
                    <li className='img'>
                        
                        <NavLink to="/facebook" >
                            <img src='https://i.pinimg.com/originals/b7/63/69/b763699fd1fa3bfb374442593ae642e1.png'></img>
                        </NavLink>
                        <NavLink to="/linkedin" >
                            <img src='https://p.kindpng.com/picc/s/32-326233_linkedin-thompson-electric-company-linkedin-logo-bw-png.png'></img>
                        </NavLink>
                        <NavLink to="../github.com" >
                            <img src='http://pngimg.com/uploads/github/github_PNG40.png'></img>
                        </NavLink>
                        
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