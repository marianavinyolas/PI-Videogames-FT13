import { useEffect} from 'react'
import { getGenres, getVideogamesBySource, getVideogamesByGenre,  resetAll } from '../../actions/actions'
import { useDispatch, useSelector} from 'react-redux';

const Filters = () => {
  const dispatch = useDispatch();
  const genres = useSelector(state => state.genres)
  const source = useSelector(state => state.videogameSource)


  useEffect(  ()=>dispatch(getGenres()), [dispatch] )

  const handleSource = (e) => e.target.value === 'ALL'
    ? dispatch(resetAll())
    : dispatch(getVideogamesBySource(e.target.value))
  
  const handleGenre = (e) => e.target.value === 'ALL'
  ? dispatch(resetAll())
  : dispatch(getVideogamesByGenre(e.target.value))

  return (
    <div className='filters'>
      <select className='genre' onChange={(e)=>handleGenre(e)}>
          <option value= 'ALL'>All genres</option>
              {
              genres && genres.map((genre, id) => {
              return <option value={genre.name} key={id}>{genre.name}</option>})
              }
      </select>
      <select className='source' onChange={(e)=>handleSource(e)}>
          <option value='ALL'>Source</option>
          <option value='CREATED'>Created by user</option>
          <option value='ORIGINALS'>Originals</option>
      </select>
    </div>
  )
}

export default Filters;