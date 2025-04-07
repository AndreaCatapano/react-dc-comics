import './Jumbotron.css'
import jumbotronImage from '../../assets/img/jumbotron.jpg'

function Jumbotron() {
    return (
        <div className='jumbotron-container'>
            <img src={jumbotronImage} alt="Jumbotron" className='jumbotron-image' />
        </div>
    );
}

export default Jumbotron;   