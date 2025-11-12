import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav>
                <Link to="/">Acceuil</Link>
                <Link to="/quiz">Quiz</Link>
                <Link to="/result">Result</Link>

            </nav>
        </>
    )
}
