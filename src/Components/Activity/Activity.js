import { ApiData } from '../API/AppiCalls';
import { useState } from 'react'
import './Activity.css'
import { useEffect } from 'react/cjs/react.development';

const Activity = () => {
    const [optionValue, setOptionValue] = useState('Select Category');
    const [activity, setActivity] = useState({});
    const [disabled, setDisabled] = useState(true)

    // I need to use useEffect method to update state, after 
    // button generate activity has been clicked and set fetched object
    // to local host, and on page refresh to stay on DOM

const handleCategory = (e) => {
    setOptionValue(e.target.value);
    setDisabled(false)
}

const handleButtonClick = (e) => {
    e.preventDefault()
    if(optionValue === 'all') {
        ApiData.fetchAll()
        .then(data => setActivity(data))
        setOptionValue('Select Category')
    }else {
        ApiData.fetchType(optionValue)
        .then(data => setActivity(data))
        setOptionValue('Select Category')
    }

}
    return (
    // <div className="Activity">
    <section className="randomizer-container container">
    <div className="dropdown-container">
    <select className="drop-down" id="dropDown" value={optionValue} onChange={handleCategory}>
    <option value=""> {optionValue}</option>
    <option value="all">All</option>
    <option value="education">Education</option>
    <option value="recreational">Recreational</option>
    <option value="social">Social</option>
    <option value="diy">DIY</option>
    <option value="busywork">Busywork</option>
    <option value="music">Music</option>
    <option value="charity">Charity</option>
    <option value="cooking">Cooking</option>
    <option value="relaxation">Relaxation</option>
    </select>
    </div>
    <article className="activity-container">
    <p>
        Place for activity randomized
    </p>
    <div className="Btn-container">
    <button className="generate-btn" disabled={disabled} onClick={(e) => handleButtonClick(e)}> Generate Activity</button>
    </div>
    <div>
        <button className="home-btn">Home</button>
    </div>
    </article>
    </section>
    // </div>
    )
}

export default Activity;