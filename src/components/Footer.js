import './Footercss.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
export default function Footer() {
    return (
        <div className="foot bg-dark" style={{ color: 'white', fontSize: 'medium' }}>

            <div className="data  container">
                <div className="newsletter my-5  text-wrap">
                    <h3><u>Our Aim</u></h3>
                    <p>The prime aim of this foundation is to expose the rural people and students to the mesmerizing world of astronomy,
                        who are poor in resources without which they could not explore even the basic & advance knowledge of Astronomy
                        and Astrophysics too.</p>
                </div>
                <div className="services  my-5 ">
                    <h3><u>Our Services</u></h3>
                    <ul className='container'>
                        <li>Astronomy</li>
                        <li>Astrophysics</li>
                        <li>Biodiversity</li>
                        <li>Outreach Events</li>
                        <li>Lectures</li>
                        <li>Seminars</li>
                        <li>Workshops</li>
                        <li><a target='_blank' style={{textDecoration:"none"}} href="https://www.youtube.com/@upaacandsfpc733">Youtube channel</a></li>

                    </ul>
                </div>

                <div className="git  my-5 ">
                    <h3><u>Get In Touch</u></h3>
                    <p>Address:Vigyan Bhavan, 9, Nabiullah Rd,</p>
                    <p>Surajkund park, Lucknow, Uttar Pradesh 226018</p>
                    <p>upastroclub@gmail.com<br />Sumit Kumar Shrivastava +91 80098 55777</p>
                </div>
            </div>
            <hr />
            <div className="cr">
                <h5 style={{ fontSize: 'smaller' }}>© Copyright 2023, All Rights Reserved, Uttar Pradesh Amateur Astronomers Club(UPAAC) Developed By: <a href='https://www.linkedin.com/in/hozaifa-shakeel56/'>Hozaifa Shakeel</a></h5>
            </div>

        </div>
    );
}