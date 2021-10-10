import React from 'react'
import { Link } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className="error-container">
        <p className="error-string">
            404 ERROR. SERVER ERROR... PLEASE TRY AGAIN LATER
        </p>
        <Link to='/'>
        <button className="homee-btn">Home</button>
        </Link>
        </div>
        
    )
}

export default ErrorPage;