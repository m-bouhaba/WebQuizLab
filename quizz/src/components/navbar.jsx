import React from 'react'
import { Link } from 'react-router'

export default function Navbar() {

    return (
        <div className='navbarContainer'>
            <p>TechEdu</p>
            <ul className="nav-links">
                <li><Link to="/home">Accueil</Link></li>
                <li><Link to="/quiz">Quiz</Link></li>
                <li><Link to="/result">Result</Link></li>
            </ul>
        </div>
    )
}
