import './Main.css';
import comics from '../../data/comics.js'
import Jumbotron from '../Jumbotron/Jumbotron.jsx';




function Main() {
    return (
        <main>
            <Jumbotron />
            <div className='main-container'>

                {comics.map((comic) => (
                    <div key={comic.id} className="comic-card">
                        <img src={comic.thumb} alt={comic.title} className="comic-card-image" />
                        <h3 className="comic-card-title">{comic.series}</h3>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Main;