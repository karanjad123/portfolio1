import React from 'react'
import ContactItem from '../components/ContactItem';
import {Parallax} from 'react-parallax';
import Title from '../components/Title';
const im='https://images.hdqwalls.com/wallpapers/twitz-color-abstract-se.jpg'
function ContactPage() {
    return (
        <div className="back">
            <Parallax
                bgImage={im}
                strength={600}
                >
                
                
            <div className="title1">
                <Title title={'Contact Me'} span={'Contact Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.700327595181!2d-0.13858868403737226!3d50.836714467337785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585104ec1fe1b%3A0x28b5349b15ce0c4d!2sLondon%20Road%20(Brighton)%20Train%20Station%20-%20Southern%20Railway!5e0!3m2!1sen!2suk!4v1611468671158!5m2!1sen!2suk" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png'} text1={'+1 (706)-461-3710'}  title={'Phone'}/>
                    <ContactItem icon={'https://cdn0.iconfinder.com/data/icons/thin-communication-messaging/57/thin-012_mail_envelope_email_sent-512.png'} text1={'karan.jadhav@uga.edu'} text2={'karanjad123@gmail.com'} title={'Email'}/>
                    <ContactItem icon={'https://cdn3.iconfinder.com/data/icons/unicons-vector-icons-pack/32/location-512.png'} text1={'1000 Lakeside Drive, Athens GA'} text2={'United States'} title={'Address'}/>
                </div>
            </div>
            </Parallax>
        </div>
    )
}

export default ContactPage;