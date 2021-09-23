import './Activity.css'

const Activity = () => {
    return (
    <section className="randomizer-container">
    <div className="dropdown-container">
        <select className="selector">
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
    </article>
    <div>
    <button className="generate-btn"> Generate Activity</button>
    </div>
    <div>
        <button className="home-btn">Home</button>
    </div>
    </section>
    )
}

export default Activity;