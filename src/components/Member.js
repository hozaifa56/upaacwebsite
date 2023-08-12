import React, { useState, useEffect } from 'react';
import '../components/Membercss.css';

export default function Member() {
    const [data, setData] = useState([]);
    const getData = () => {
        fetch('/member.json', {
            headers: {
                'content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response2) => {
            return response2.json()
        }).then((myresponse2) => {
            console.log(data)
            setData(myresponse2)
        })

    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <div className='part1'>
                <h1 style={{ color: 'white' }}><u>Lifetime Members of <span style={{ color: 'orange' }}>UPAAC</span></u></h1>
            </div>
            <div className='text-start my-5'>
                {data.map((item) => (
                    <div>
                        <div>
                            <ul>
                                <li>
                                    <p className='card-text'>UPAACid Number: {item.id} - {item.Name} Date Of Joining: {item.doj}</p></li>
                            </ul>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}
