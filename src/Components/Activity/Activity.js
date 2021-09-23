import './Activity.css'

const Activity = () => {
    return (
    <section className="randomizer-container">
    <div className="dropdown-container">
    <select name="drop-down" id="dropDown">
    <option value="">--Please choose an option--</option>
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
    <p>
        Place for activity catgory
    </p>
    <p>
        Place for activity participants
    </p>
    <p>
        Place for activity price
    </p>
    <p>
        Place for activity assecibility
    </p>
    <div className="Btn-container">
    <button className="generate-btn"> Generate Activity</button>
    </div>
    <div>
        <button className="home-btn">Home</button>
    </div>
    </article>
    </section>
    )
}

export default Activity;