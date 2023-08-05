import React, { useState, useEffect } from 'react'
import './GalleryItemcss.css';


export default function GalleryItem() {
    const [data, setData] = useState([]);
    const getData = () => {
        fetch('/sampleoutput.json', {
            headers: {
                'content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response) => {
            return response.json()
        }).then((myjson) => {
            console.log(data)
            setData(myjson)
        })

    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <div className='part1Gallery'>
                <h1 style={{ color: 'white' }}><u>Achievements of UPAAC members and their works</u></h1>
            </div>
            <div className="my-4 gallery-container">
                <div className="row">
                    {data.map((item) => (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={item.id}>
                            <div className="card bg-dark text-white">
                                <img src={item.src} className="card-image" alt="..." />
                                <div className="card-info">
                                    <h5 className="card-text">{item.title}</h5>
                                    <p className="card-text">{item.p1}</p>
                                    <p className="card-text">{item.p2}</p>
                                    <p className="card-text">{item.p3}</p>
                                    {/* Add any other properties from the JSON data you want to display */}
                                    <p className="card-text"></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
