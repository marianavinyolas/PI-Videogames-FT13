import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames, getVideogamesByGenre, getVideogamesName } from '../../actions/actions'
import Pagination from "../Pagination/Pagination";
import Card from '../Card/Card';
import { StyledDiv } from './style'; 

const Home = () => {
  const dispatch = useDispatch();
  const games = useSelector(state => state.videogames);
  // const byGenre = useSelector(state => state.videogameGenres);
  // const search = useSelector(state => state.videogameSearch);
  const sorted = useSelector(state => state.sorted);
  // const source = useSelector(state => state.videogameSource)

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(15)

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentGames = games.slice(indexOfFirstCard, indexOfLastCard);
  // const currentSearch = search.slice(indexOfFirstCard, indexOfLastCard); // testear antes de sacar


  useEffect( () => {
    dispatch(getAllVideogames())
  }, [dispatch]);

  // useEffect( () => {
  //   dispatch(getVideogamesByGenre())
  // }, [dispatch]);

//     useEffect(() => {
//     dispatch(getVideogamesName());
// }, [dispatch]);

  useEffect(() => {
    if(sorted !== 'ALL') {
      setCurrentPage(1)
    }
  }, [dispatch, sorted])

  useEffect(()=> {
    
  })

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <StyledDiv>
      <div className='pagination'>

      <Pagination 
      cardsPerPage={cardsPerPage} 
      // totalCards={games.length}
      paginate={paginate}
      />
      </div>
      <div className='containerCards'>

      {/* {currentSearch && currentSearch.length < currentGames.length
                ? currentSearch.map((game) => {
                  return( 
                    <Card
                    key = {games.id}
                    img = {game.background_image}
                    name = {game.name}
                    id = {game.id}
                    genres = {game.genres}
                    />
                )}) */}
                {/* : */}
                {
                  currentGames && currentGames.map((game,i) => {
                  return( 
                    <Card
                    key = {i}
                    img = {game.background_image}
                    name = {game.name}
                    id = {game.id}
                    genres = {game.genres}
                    />
                )})
        }
      </div>

    </StyledDiv>
    
  )
}

export default Home;

