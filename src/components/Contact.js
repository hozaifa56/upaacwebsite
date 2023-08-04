import React from 'react'
import './Contactcss.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return (
        <div>
            <div className='part1-contact'>
                <h1 style={{ color: 'white' }}><u><span style={{ color: 'orange' }}>Contact </span>us</u></h1>
            </div>
            <div className='part2 container'>
                <div className='container'><h1>Get In Touch</h1></div>
                <div className='fillerdata d-flex flex-column container text-wrap'>
                    <p  >The prime aim of this foundation is to expose the rural people and students to the mesmerizing world
                        of astronomy, who are poor in resources without which they could not explore even the basic &
                        advance knowledge of Astronomy and Astrophysics too.
                    </p>
                </div>
                <div className='contactdata'>
                    <div className='phone'><div class="circle container"><FontAwesomeIcon icon={faPhone} /> </div><h5>Phone</h5><span>Sumit Kumar Shrivastava <br />+91 80098 55777</span>
                    </div>
                    <div className='email'> <div class="circle container"> <FontAwesomeIcon icon={faEnvelope} /> </div><h5>Email</h5><span>upastroclub@gmail.com</span>
                    </div>
                    <div className='address'> <div class="circle container"><FontAwesomeIcon icon={faMapMarkerAlt} /> </div><h5>Address</h5><span className='text-wrap'>Address:Vigyan Bhavan, 9, Nabiullah Rd, Surajkund park,<br /> Lucknow, Uttar Pradesh<br /> 226018</span>
                    </div>
                </div>
            </div>
            <div className='part3 container my-3'>
            <iframe id='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2127602390756!2d80.91873878115153!3d26.86498061653538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd939e3e43cd%3A0x108d0357c76ea4c5!2sIndira%20Gandhi%20Planetarium%2C%20Nabiullah%20Rd%2C%20Qaisar%20Bagh%2C%20Lucknow%2C%20Uttar%20Pradesh%20226018!5e0!3m2!1sen!2sin!4v1691013336134!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
            </div>
        </div>
    )
}
