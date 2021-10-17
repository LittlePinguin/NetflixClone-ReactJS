import React from 'react'
import '../components/Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">Fake<span>Flix</span></div>
            <div className="links">
                <ul>
                    <li>Categories</li>
                    <li>Watchlist</li>
                    <li>Account</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
