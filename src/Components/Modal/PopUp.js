import React from 'react'
import './PopUp.css'
const PopUp = (props) => {
    return(props.trigger) ? (
        <div className="popup"> 
        <article className="popup-inner">
        <p> here is gonna be intro and rules about application</p>
        </article>
        <button className="start-btn" onClick={(e) => props.handleStartBtn(e)}> Lets get started </button>
        </div>
    ) : "";
}

export default PopUp;