import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { getAllVideogames } from '../../actions/actions'
import Card from '../Card/Card';
import { StyledDiv } from './style'; 




const Home = () => {
  const dispatch = useDispatch();
  const games = useSelector(state => state.videogames);

  useEffect( () => {
    dispatch(getAllVideogames())
  }, [dispatch]);
  console.log(games)
  return (
    <StyledDiv>
      {
      games && games.map(game => {
        return( 
          <Card
          img = {game.background_image}
          
            name = {game.name}
            id ={game.id}
            genres = {game.genres}
          />
      )})
      }
    </StyledDiv>
    
  )
}

export default Home;

