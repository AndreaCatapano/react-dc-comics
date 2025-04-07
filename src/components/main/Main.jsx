import './Main.css';
import comics from '../../data/comics.js'
import Jumbotron from '../Jumbotron/Jumbotron.jsx';


function Main() {
    return (
        <main>
            <Jumbotron />
            <div className='main-container'>
                <h1> Content goes here</h1>
            </div>
        </main>
    );
}

export default Main;