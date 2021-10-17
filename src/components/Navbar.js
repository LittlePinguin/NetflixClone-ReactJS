import React from 'react'
import '../components/Navbar.css'
import { FaUserAlt } from 'react-icons/fa'

function Navbar() {
    return (
        <nav className="navbar">
            <p className="logo">Fake<span>flix</span></p>
            <ul className="list">
                <li className="movie">Movies</li>
                <li>TV Shows</li>
                <li><FaUserAlt></FaUserAlt></li>
            </ul>
        </nav>
        // <div className="navbar">
        //     <p className="logo">Fake<span>Flix</span></p>
        //     <ul className="links">
        //             <li>Categories</li>
        //             <li>Watchlist</li>
        //             <li>Account</li>
        //         </ul>
        // </div>
    )
}

export default Navbar
