import { ApiData } from '../API/AppiCalls';
import { useState } from 'react'
import { Link, useHistory} from 'react-router-dom';
import './Activity.css'


const Activity = () => {
    const [optionValue, setOptionValue] = useState('Select Category');
    const [activity, setActivity] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [favorite, setFavorite] = useState(false);
    const history = useHistory()

   // ***********************************************
        /*SELECT DROP DOWN OPTION VALUE FUNCTION*/ 
   // ***********************************************
const handleCategory = (e) => {
    setOptionValue(e.target.value);
    setDisabled(false)
}

   // *************************************************************
    /* GENERATE ACTIVITY BTN HELPER FUNCTION & FETCH INVOKE*/ 
   // *************************************************************
const handleButtonClick = (e) => {
    e.preventDefault()
    if(optionValue === 'all') {
        ApiData.fetchAll()
        .then(data => setActivity(data))
        .catch((err) => {
        history.push('/ErrorPage')
    })
        setOptionValue('Select Category')
    }else {
        ApiData.fetchType(optionValue)
        .then(data => setActivity(data))
        .catch((err) => {
            history.push('/ErrorPage')
        })
        setOptionValue('Select Category')
    }
}
    return (
    <div className="Activity-container">
    <nav className="nav-bar">
        <button>Favorites</button>
    </nav>
    <section className="randomizer-container">
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
    <div onClick={() => setFavorite(true)}>{!favorite ? '🤍' : '🧡'}</div>
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
    <Link to='/'>
    <button className="home-btn">Home</button>
    </Link>
    </div>
    </article>
    </section>
    </div>
    )
}

export default Activity;


// We need to set data fetched on butoon click to a localstorage and if page gets refreshed it has to grab
// set data from localstorage and display on DOM
// also uaer has to be able to favorite activity card
// upon click on favorite button it should take user into a new page and 
//show their favorited card
// also user has to be able get back to homepage 