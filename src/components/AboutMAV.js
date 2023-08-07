import React from 'react';
import './AboutMAVcss.css';
import fillerplanet from '../images/filler2.gif'
export default function AboutMAV() {
    return (
        <div>
            <div className='part1'>
                <h1 style={{ color: 'white' }}><u>About Mission And Vision</u></h1>
            </div>
            <div className='part2 my-5 mx-5'>
                <div className='wrapper'>
                    <div className='d-flex flex-column aim'>
                        <p className=' container text-wrap'>
                            <b>Aim:</b> The prime aim of this foundation is to expose the rural people and
                            students to the mesmerizing world of astronomy, who are poor in resources
                            without which they could not explore even the basic & advance knowledge of Astronomy and Astrophysics too.
                        </p>
                        <img src={fillerplanet} className='container' id='filler2' alt='upaac logo' />
                    </div>
                    <div>
                        <p className=' container text-wrap'>
                            <b>Vision:</b> Astronomy is part of our lives since stone age. The night sky has managed to
                            grab the attention of people as mysterious fire balls, which full the dark night UPAAC with
                            glaze.India has a golden astronomical past, well-known for ancient and modern Indian astronomers
                            and scientists. This fact fails to attract the eyeballs, especially in rural India because everyone
                            is fighting for their daily food, clothes, shelter and primary needs. In this routine they can’t even
                            think about to follow the astronomical events, everything about astronomy is enigmatic science for them.
                            They don’t have resources, proper guidance for exploring this infinite universe. There are many
                            superstitions among the masses about the astronomy & it’s rare and frequent celestial events.
                            According to UPAAC this is also the fact with which the development of our country is being affected.
                            It is necessary to remove these fallacy & superstitions via scientific and reasoning approach.
                            This is why UPAAC is established. This is our mission and vision that everyone even a single person
                            or a student or a child, wherever he came from, whatever his background, can know about Astronomy.
                            We are committed to do this work. We believe that knowledge is in reach of everyone’s hand.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
