import { ApiData } from '../API/AppiCalls';
import { useState } from 'react'
import './Activity.css'

const Activity = () => {
    const [optionValue, setOptionValue] = useState('Select Category');
    const [activity, setActivity] = useState(null);
    const [disabled, setDisabled] = useState(true)

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
    {activity && <section className="activity-card">
    <div>🤍</div>
    <ul>
        <li>Activity:{activity.activity}</li>
        <li>Category:{activity.type}</li>
        <li>Accessibility:{activity.accessibility}</li>
        <li>Price:{activity.price}</li>
        <li>Participants:{activity.participants}</li>
    </ul>
    </section>}
    <div className="Btn-container">
    <button className="generate-btn" disabled={disabled} onClick={(e) => handleButtonClick(e)}> Generate Activity</button>
    </div>
    <div>
        <button className="home-btn">Home</button>
    </div>
    </article>
    </section>
    )
}

export default Activity;