import React from 'react';
import './AboutOrgcss.css';
import filler1 from '../images/filler1.png'

export default function AboutOrg() {
  return (
    <div>
      <div className='part1'>
        <h1 style={{ color: 'white' }}><u>About Organisation</u></h1>
      </div>
      <div className='part2 my-5 mx-5'>
        <h1>Know about UPAAC</h1>
        <div className='wrapper'>
          <div className='dataabout'>
            <p className=' container my-5 text-wrap'>
              UPAAC, Uttar Pradesh amateur astronomers club is an astronomy club established by amateur and professional
              astronomers under the guidance of scientists, professors, lecturers, teachers and research
              scholars from various prestigious collages.UPAAC is not just a club, it represents the passion
              towards astronomy and astrophysics. However we deal with other fields of science too such as
              renewable energy, scientific practical approach for concepts, mathematical concepts, outreach events and astronomy tourism.
            </p>
          </div>
          <div className='my-3'>
            <img id='moon' className='my-5' src={filler1} />
          </div>
        </div>
      </div>
    </div>
  )
}
