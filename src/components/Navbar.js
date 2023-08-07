import React from 'react';
import upaac from '../images/upaac.jpg';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar  navbar-expand-lg navbar-dark bg-dark " >
                <div className="container-fluid" >
                    <Link className="navbar-brand" to="/"><img src={upaac} alt='upaac logo' style={{ height: '40px' }} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="AboutOrg">About Organisation</Link></li>
                                    <li><Link className="dropdown-item" to="/AboutMAV">About Mission And Vision</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/GalleryItem">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Registration">Registration</Link>
                            </li>
                            {/*
                            <li className="nav-item">
                                <Link className="nav-link" to="/Home">Events</Link>
    </li>*/}
                            <li className="nav-item">
                                <Link className="nav-link" to="/Download">Softwares</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Blog">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
