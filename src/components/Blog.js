import React, { useState, useEffect } from 'react';
import '../components/Blogcss.css';

export default function Blog() {
    const [data, setData] = useState([]);
    const getData = () => {
        fetch('/blogs.json', {
            headers: {
                'content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response1) => {
            return response1.json()
        }).then((myresponse1) => {
            console.log(data)
            setData(myresponse1)
        })

    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <div className='part1Gallery'>
                <h1 style={{ color: 'white' }}><u>Blogs and <span style={{color:"orange"}}>Literature</span></u></h1>
            </div>
            <div className='blogdiv'>
                {data.map((item) => (
                    <div id="blogid" className="card w-75">
                        <div className="card-body">

                            <h5 className="card-title bg-danger">{item.title}</h5>
                            <p className='card-text'>Blog Number: {item.id}</p>
                            <p className="card-text">{item.p1}</p>
                            <p className="card-text">{item.p2}</p>
                            <a target="_blank" href={item.url} className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
