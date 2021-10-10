import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import './Favorites.css'
import { IAppComponent } from "../Activity/Activity";

const Favorites = () => {
    const [allFavorites, setAllFavorites] = useState<[]>()
    useEffect(() => {
    return setAllFavorites(JSON.parse(localStorage.getItem('favorites') as string));
    }, [])

   // *******************************
        /* SET FAVORITES CARD*/ 
   // *******************************
const displayFavorites = () => {
    if(!allFavorites) {
    return (
        <section className="message-container">
        <p className="favorites-message"> You have not favorites yet .... </p>
        </section>
        
    )
    }else {
        return allFavorites.map((favorite: IAppComponent['activity']) => {
            return (
            <div className="favorites-card" key={uuidv4()}>
            <ul> Activity:
                <li>{favorite.activity}</li>
                <li>Category: {favorite.type}</li>
                <li>Accessibility: {favorite.accessibility}</li>
                <li>Participants: {favorite.participants}</li>
            </ul>
            </div>
            )
            })
    }

}

    return (
        <main>
        <nav className="favorites-nav">
        <Link to="/Activity">
        <button className="home-btn">Back to activities</button>
        </Link>
        </nav>
        <section className="favorites-section">
        {displayFavorites()}
        </section>
        </main>
    
    )
}

export default Favorites;