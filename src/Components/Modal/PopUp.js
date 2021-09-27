import React from 'react'
import './PopUp.css'
const PopUp = (props) => {
    return(props.trigger) ? (
        <div className="popup"> 
        <article className="popup-inner">
        <p> Hi there! Are you bored out of your mind? I was created to help you with just that. Wait, what's that? You're not bored? Well, I am here to give you a random activity to do alone or with friends, regardless.
            <br/>
            <br/>
        Step 1: Choose a category or go full random. You have 10 categories from which to choose (choose wisely or don't).
            <br/>
            <br/>
        Step 2: Now the fun part. Click the 'Generate Activity' button and BOOM! A random activity at your fingertips. I'm awesome, aren't I? 
            <br/>
            <br/>
        Step 3: Now, the most important step: GO OUT AND ENJOY THE ACTIVITY! I am just a bunch of 1s and 0s, so I can't join you, but do have all the fun!
            <br/>
        Oh almost forgot, you can favorite activity you most enjoyed! Woooah!
        </p>
        </article>
        <button className="start-btn" onClick={(e) => props.handleStartBtn(e)}> Lets get started </button>
        </div>
    ) : "";
}

export default PopUp;