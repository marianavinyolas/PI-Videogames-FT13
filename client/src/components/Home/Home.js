import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames } from '../../actions/actions'
import Pagination from "../Pagination/Pagination";
import Card from '../Card/Card';
import { StyledDiv } from './style'; 

const Home = () => {
  const dispatch = useDispatch();
  const games = useSelector(state => state.videogames);
  const sorted = useSelector(state => state.sorted);


  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(15)
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentGames = games.slice(indexOfFirstCard, indexOfLastCard);



  useEffect( () => {
    dispatch(getAllVideogames())
  }, [dispatch]);

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
      paginate={paginate}
      />
      </div>
      <div className='containerCards'>

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

