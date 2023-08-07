import React from 'react'

import JotForm from 'react-jotform';

export default function Registration() {
    return (
        <div>
            <div className='part1'>
                <h1 style={{ color: 'white' }}><u>Registration <span style={{ color: 'orange' }}>Form</span></u></h1>
            </div>
            <iframe
                title="JotForm Form"
                src="https://form.jotform.com/232186711395459" // Paste your JotForm iframe code here
                frameborder="0"
                style={{ width: '100%', height: '100vh' }} // Set the desired width and height for the form
                allowfullscreen
            ></iframe>

        </div>
    )
}
