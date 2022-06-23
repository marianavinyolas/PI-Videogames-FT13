import { Link } from "react-router-dom";

export const CardDetail = ({ game }) => {
  return (
    <>
      <div className="contImg">
        <div>
          <img src={game.background_image} alt={game.name} />
          <h1>{game.name}</h1>
          <h4>Genres</h4>
          <ul>
            {game.genres &&
              game.genres.map((g, i) => {
                return <li key={i}>{g.name}</li>;
              })}
          </ul>
          <div>
            <p>Rating: {game.rating}</p>
            <p>Released: {game.released}</p>
            <h4>Platforms</h4>
            <ul>
              {game.platforms &&
                game.platforms.map((g, i) => {
                  return <li key={i}>{g.platform.name}</li>;
                })}
            </ul>
          </div>
        </div>
        <div>
          <h3> Description:</h3>
          {game.description}
        </div>
        <Link to="/home">
          <button className="btn">Back</button>
        </Link>
      </div>
    </>
  );
};

export default CardDetail;
