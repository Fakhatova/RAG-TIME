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