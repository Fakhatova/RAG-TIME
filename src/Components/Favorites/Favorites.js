import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './Favorites.css'

const Favorites = () => {
    const [allFavorites, setAllFavorites] = useState([])
    useEffect(() => {
    setAllFavorites(JSON.parse(localStorage.getItem('favorites')))
    }, [])

const displayFavorites = () => {
return allFavorites.map(favorite => {
    return (
    <div className="favorites-card" key={uuidv4()}>
    <ul>
        <li>Activity:{favorite.activity}</li>
        <li>Category:{favorite.type}</li>
        <li>Accessibility:{favorite.accessibility}</li>
        <li>Participants:{favorite.participants}</li>
    </ul>
    </div>
    )
    })
}

    return (
    <section className="favorites-section">
        {displayFavorites()}
    </section>
    )
}

export default Favorites;