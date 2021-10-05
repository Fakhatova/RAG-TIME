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
        history.push('/Activity/ErrorPage')
    })
        setOptionValue('Select Category')
        setDisabled(true)
        setFavorite(false)
    }else {
        ApiData.fetchType(optionValue)
        .then(data => setActivity(data))
        .catch((err) => {
            history.push('/Activity/ErrorPage')
        })
        setOptionValue('Select Category')
        setDisabled(true)
        setFavorite(false)
    }
}

   // *******************************************************
        /* SET DATA TO LOCALSTORAGE ON FAVORITE BUTTON*/ 
   // *******************************************************

const toggleFavorites = (activity) => {
    if (!favorite) {
        let favoritesInStorage = JSON.parse(localStorage.getItem('favorites')) || []
        favoritesInStorage = [...favoritesInStorage, activity]
        localStorage.setItem('favorites', JSON.stringify(favoritesInStorage))  
    } else {
        let favoritesInStorage = JSON.parse(localStorage.getItem('favorites')) || []
        favoritesInStorage = favoritesInStorage.filter((f) => f.key !== activity.key)
        localStorage.setItem('favorites', JSON.stringify(favoritesInStorage))
    }
    setFavorite(!favorite)
}

    return (
    <div className="Activity-container">
    <nav className="nav-bar">
    <Link to='/Activity/Favorites'>
    <button className="favorites-btn">Favorites </button>
    </Link>
    </nav>
    <section className="randomizer-container">
        <div className="dropdown-container">
        <div className="select-container">
    <select className="drop-down" 
    id="dropDown" value={optionValue} 
    onChange={handleCategory}>
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
    <div className="Btn-container">
        <button className="generate-btn" 
        disabled={disabled} 
        onClick={(e) => handleButtonClick(e)}>
        Generate Activity
        </button>
    </div>
    <article className="activity-card-container">
    {activity && <section className="activity-card">
    <div className='favorite-btn' onClick={() => toggleFavorites(activity)}>{!favorite ? '🤍' : '🧡'}</div>
    <ul>
        <li>{activity.activity}!</li>
        <li>Category: {activity.type}</li>
        <li>Accessibility: {activity.accessibility}</li>
        <li>Participants: {activity.participants}</li>
    </ul>
    </section>}
    <Link to='/'>
    <button className="home-btn">Home</button>
    </Link>
    </article>
    </div>
    </section>
    </div>
    )
}

export default Activity;