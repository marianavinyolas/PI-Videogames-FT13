import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames } from '../../actions/actions'
import Card from '../Card/Card';
import { StyledDiv } from './style'; 

const Home = () => {
  const dispatch = useDispatch();
  const games = useSelector(state => state.videogames);
  const sorted = useSelector(state => state.sorted);

  useEffect( () => {
    dispatch(getAllVideogames())
  }, [dispatch]);

  return (
    <StyledDiv>
      {
      games && games.map(game => {
        return( 
          <Card
            img = {game.background_image}
            name = {game.name}
            id = {game.id}
            genres = {game.genres}
          />
      )})
      }
    </StyledDiv>
    
  )
}

export default Home;

