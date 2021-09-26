import { useEffect, useState } from "react";

const Favorites = () => {
    const [allFavorites, setAllFavorites] = useState([])
    useEffect(() => {
    setAllFavorites(JSON.parse(localStorage.getItem('favorites')))
    }, [])

const displayFavorites = () => {
return allFavorites.map(favorite => {
    return (
    <div>
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
        <section className="activity-card">
        {displayFavorites()}
    </section>
    )
}

export default Favorites;