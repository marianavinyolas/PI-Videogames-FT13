import { useSelector } from 'react-redux'

const Pagination = ({cardsPerPage, paginate}) => {
  const videogames = useSelector(state => state.videogames)
  const pageNumbers = []

  for (let i=1; i<= Math.ceil(videogames.length / cardsPerPage); i++){pageNumbers.push(i)}

  return (
    <div className='pagination'>
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <a onClick={() => paginate(number) } href='#'> {number} </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination