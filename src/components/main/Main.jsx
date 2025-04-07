import './Main.css';
import comics from '../../data/comics.js'
import Jumbotron from '../Jumbotron/Jumbotron.jsx';
import ComicsCard from '../ComicsCard/ComicsCard.jsx';



function Main() {
    return (
        <main>
            <Jumbotron />
            <div className='main-container'>
                <ComicsCard comics={comics} />
                <div className="main-label">CURRENT SERIES</div>
            </div>
        </main>
    );
}

export default Main;