import { useDispatch } from 'react-redux';
import { sortZa, sortAz ,sortRatingUp, sortRatingDown, resetAll } from '../../actions/actions'


const Sort = () => {
    const dispatch = useDispatch();
    const handleSort = (e) => e.target.value === 'SORT_AZ'
        ? dispatch(sortAz()) 
        :  e.target.value === 'SORT_ZA'
        ? dispatch(sortZa())
        : e.target.value === 'RATING_UP'
        ? dispatch(sortRatingUp())
        : e.target.value === 'RATING_DOWN'
        ? dispatch(sortRatingDown())
        : e.target.value === 'ALL'
        ? dispatch(resetAll())
        : null 
    const handleClick = () => dispatch(resetAll())
    return (
        <div>
            <select className='sort' onChange={(e)=>handleSort(e)}>
                <option value= 'ALL'>Sort...</option>
                <option value='SORT_AZ'>A-Z</option>
                <option value= 'SORT_ZA'>Z-A</option>
                <option value= 'RATING_UP'>Rating up</option>
                <option value= 'RATING_DOWN'>Rating down</option>
                {/* <option value= 'ALL'>Show all</option> */}
            </select>
            <button className='btn--nav' onClick={(e)=>handleClick(e)}>Reset filters</button>
        </div>
    )
}

export default Sort;