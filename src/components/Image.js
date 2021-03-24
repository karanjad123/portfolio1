import React from 'react';


function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src='https://pyxis.nymag.com/v1/imgs/4a3/836/7b7102bdb0b3b043dad7f54facfb37c685-lap-desk-lede.jpg' alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Karan Jadhav</span></h4>
                <p className="about-text">
                    I am a Graduate Student at the University of Georgia studying Computer Science. I enjoy the most about programming and solving complex algorithmic problems. I mainly choose to code in Java , Python, JavaScript, SQL and C for coding. I enjoy web designing with react js and node js.
                </p>
                <p>
                    Futhermore, I am very interested in the areas of Software Engineering, Software Development, Machine Learning, Web Development and and Artificial Intelligence. I have worked on various projects in these domains. I have previously worked as a web development intern and and am currently working as Machine learning Research Assistant at UGA.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>University</p>
                        <p>Course</p>
                        <p>Major</p>
                        <p>Address</p>
                    </div>
                    <div className="right-section">
                        <p>: Karan Jadhav</p>
                        <p>: 24</p>
                        <p>: University of Georgia</p>
                        <p>: Master's of Science</p>
                        <p>: Computer Science</p>
                        <p>: 344K, 1000 Lakeside Drive, Athens, GA</p>
                    </div>
                </div>
                <div className="butt">
                <button className="btn" >Download Cv</button>
                </div>
            </div>
        </div>
    )
}

export default ImageSection;