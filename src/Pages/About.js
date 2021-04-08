import React from 'react'
import Title from '../components/Title'
import Image from '../components/Image';
import Skill from '../components/Skill';
import Service from '../components/Service';
import {Parallax} from 'react-parallax';
import timelineElements from "../components/Timeline";
import { ReactComponent as WorkIcon } from "../images/work.svg";
import { ReactComponent as SchoolIcon } from "../images/school.svg";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const im='https://www.itl.cat/pngfile/big/287-2874810_wallpaper-fractal-circles-patterns-dark-effect-matematike-zagonetke.jpg';
const im2='https://www.itl.cat/pngfile/big/287-2874810_wallpaper-fractal-circles-patterns-dark-effect-matematike-zagonetke.jpg'
const im1='https://www.desktopbackground.org/download/o/2015/08/13/994770_abstract-android-wallpapers-hd-androidwalls-org_1080x1920_h.jpg'
const im3='https://www.desktopbackground.org/download/o/2015/08/13/994770_abstract-android-wallpapers-hd-androidwalls-org_1080x1920_h.jpg'
function AboutPage() {
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };
    return (
        
        <div className="AboutPage">
            
                <Parallax
                bgImage={im}
                strength={800}
                >
                <div className='para'>
                    <Title title={'About Me'} span={'About Me'} className="para" />
                    <Image />
                </div>
                </Parallax>
           
           

            <Parallax
            bgImage={im1}
            strength={800}
            >
            <div className='para'>
            <Title title={'My Skills'} span={'My Skills'} className="para" />
            <div className="skillsContainer">
                <Skill skill={'Python'} progress={'90%'} width={'90%'} />
                <Skill skill={'Java'} progress={'80%'} width={'80%'} />
                <Skill skill={'Java Script'} progress={'70%'} width={'70%'} />
                <Skill skill={'C'} progress={'50%'} width={'50%'} />
                <Skill skill={'Database'} progress={'75%'} width={'75%'} />
                <Skill skill={'SQL/NoSQL'} progress={'75%'} width={'75%'} />
                <Skill skill={'React JS'} progress={'80%'} width={'80%'} />
                <Skill skill={'Machine Learning'} progress={'70%'} width={'70%'} />
                <Skill skill={'UI/UX Design'} progress={'50%'} width={'50%'} />
                <Skill skill={'HTML/CSS'} progress={'60%'} width={'60%'} />
            </div>
            </div>
            </Parallax>
            <Parallax
                bgImage={im2}
                strength={600}
                >
            <div className='para'>
            <Title title={'More skills'} span={'More skills'} />
            <div className="servives-container">
                <Service  title={'Database tools'} 
                text={'Microsoft SQL Server, MySQL, No SQL, Firestrore, Firebase'}
                />
                <Service  title={'Web Design'} 
                text={'HTML5, CSS3, React.JS, JavaScript ES6, Node.js, REDUX'}
                />
                <Service  title={'Data Science Tools'} 
                text={'NumPy, Pandas, Keras, TensorFlow, PyTorch, scikit-learn'}
                />
            </div>
            <div className="servives-container">
                <Service  title={'Operating Systems'} 
                text={'Linux, Windows'}
                />
                <Service  title={'IDE'} 
                text={'Visual Studio, IntelliJ IDEA, Eclipse, Spyder, Jupyter Notebooks'}
                />
                <Service  title={'Other Software'} 
                text={'Google colab, Excel, Word, PowerPoint, GACRC sepelo2 server, Stripe payments'}
                />
            </div>
            </div>
            </Parallax>
            <Parallax
                bgImage={im3}
                strength={600}
                >
            <div className='para5'>
            <Title title={'Timeline'} span={'Timeline'} className="para" />
                <VerticalTimeline className='timeline'>
                    {timelineElements.map((element) => {
                    let isWorkIcon = element.icon === "work";
                    let showButton =
                        element.buttonText !== undefined &&
                        element.buttonText !== null &&
                        element.buttonText !== "";

                    return (
                        <VerticalTimelineElement
                        key={element.key}
                        date={element.date}
                        dateClassName="date"
                        
                        iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                        icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                        >
                        <h3 className="vertical-timeline-element-title">
                            {element.title}
                        </h3>
                        <h5 className="vertical-timeline-element-subtitle">
                            {element.location}
                        </h5>
                        <p id="description">{element.description}</p>
                        {showButton && (
                            <a
                            className={`button ${
                                isWorkIcon ? "workButton" : "schoolButton"
                            }`}
                            href="/"
                            >
                            {element.buttonText}
                            </a>
                        )}
                        </VerticalTimelineElement>
                    );
                    })}
                </VerticalTimeline>
            </div>
            </Parallax>
        </div>
        

    )
}

export default AboutPage;
