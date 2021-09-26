import React from 'react'
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <div className="error-container">
        <p>
            404 ERROR. SERVER ERROR... PLEASE TRY AGAIN LATER
        </p>
        <Link to='/'>
        <button className="home-btn">Home</button>
        </Link>
        </div>
        
    )
}

export default ErrorPage;