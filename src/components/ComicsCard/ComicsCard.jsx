import './ComicsCard.css'

function ComicsCard({ comics }) {
    return (
        <>
            {comics.map((comic) => (
                <div key={comic.id} className="comic-card">
                    <img src={comic.thumb} alt={comic.title} className="comic-card-image" />
                    <h3 className="comic-card-title">{comic.series}</h3>
                </div>
            ))}
        </>
    );
}


export default ComicsCard