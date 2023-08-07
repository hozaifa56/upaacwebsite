import React from 'react';
import './homecss.css';

export default function Home() {
    return (
        <div className='bg-dark text-wrap'>
            <div className='part1-home'>
                <div className='align-middle'>
                    <p className="p-2 fs-1 bd-highlight align-middle">Astronomy: Beyond The Earth </p>
                    <p className="p-2 fs-5 bd-highlight align-middle">◦Space ◦Gravity ◦Dark Matter ◦Black Holes</p>
                </div>
            </div>
            <p className='partition' style={{ width: '100%', height: '0.5vh', backgroundColor: 'orange' }}></p>
            <h1 className="my-5" style={{ color: 'white' }}><u>About <span style={{ color: 'orange' }}>UPAAC</span></u></h1>
            <div className='part2 d-flex justify-content-between'>
                <div className='text-wrap text-start mx-5 my-5' ><p style={{ color: 'white' }}>Welcome to the Uttar Pradesh Amateur Astronomers Club! Founded in the year 2007,<br />
                    our club is dedicated to igniting a passion for astronomy among enthusiasts across
                    Uttar Pradesh, India. We bring together individuals who share a common love for
                    the cosmos and strive to explore the wonders of the universe. Whether you're an
                    experienced astronomer or a curious beginner, our club offers a supportive and
                    engaging platform to indulge in stargazing, celestial events, and astronomical
                    discussions. Join us on this awe-inspiring journey as we unravel the mysteries
                    of the night sky and delve deeper into the vastness of space. Together, let's
                    discover the marvels that lie beyond the Earth!</p></div>
                <div className='video container'>
                    <iframe src="https://www.youtube.com/embed/P6OxEb1pKfo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <p className='partition' style={{ width: '100%', height: '0.5vh', backgroundColor: 'orange', marginBottom: '0' }}></p>
            <div className='part3' style={{ color: 'white' }}>
                <h1 className="my-5 " style={{ color: 'white' }}><u>Why <span style={{ color: 'orange' }}>Choose UPAAC?</span></u></h1>
                <div className='question mx-5 text-wrap'>
                    The prime aim of this foundation is to expose the rural people and
                    students to the mesmerizing world of astronomy, who are poor in resources without which they could not
                    explore even the basic & advance knowledge of Astronomy and Astrophysics too.
                </div>
                <div className='reasons container fs-2 my-4 ' >
                    <div className='row container my-4' >
                        <span  id="pin" className='badge text-wrap   col-2'>Expert Astronomers</span>

                        <span id="pin" className='badge  text-wrap  col-2'>Govt Funded Astro club</span>
                    </div>
                    <div className='row container my-4'>
                        <span id="pin" className='badge text-wrap   col-2'>24x7, 365 Days Availability</span>
                        
                    </div>
                    <div className='row container my-4'>
                        <span id='pin' className='badge text-wrap col-2'>Plethora of Telescopes and equipments</span>
                        <span id="pin" className='badge text-wrap   col-2'>Trusted by many</span>
                    </div>
                    <div className='row container my-4'>
                    <span id="pin" className='badge text-wrap  col-2'>Provides opportunity to meet like minded people</span>
                    </div>
                </div>
            </div><br />
            <p className='partition' style={{ width: '100%', height: '0.5vh', backgroundColor: 'orange', marginBottom: '0' }}></p>
        </div>
    )
}
