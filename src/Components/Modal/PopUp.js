import React from 'react'

const PopUp = (props) => {
    return(props.trigger) ? (
        <div className="popup"> 
        <article className="popup-inner">
        <p> here is gonna be intro and rules about application</p>
        </article>
        <button className="start-btn"> Lets get started </button>
        </div>
    ) : "";
}

export default PopUp;