import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h1>404 - Not Found!</h1>
            <h1>What page you are searching  this is not available</h1>
            <div>
                <Link to="/">
                    <h2>Go Home</h2>
                </Link>
            </div>
        </div>
    )
}

export default NotFound;
