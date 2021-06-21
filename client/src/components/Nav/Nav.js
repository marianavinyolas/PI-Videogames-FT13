import { Link } from 'react-router-dom';
import { StyledDiv } from './style';
import Search from '../Search/Search'
import Filters from '../Filters/Filters'
import Sort from '../Sort/Sort'


const  Nav = () => {

        
    return (
        <StyledDiv>
            <div className='name'>
                <div>videogamesAPP</div>
            </div>
            <div className='container-utils'> 
            <Filters/>
            <Sort/>
                <Link to='/creategame'>
                    <button className='btn--nav' >Create game</button>
                </Link>
            <Search/>
            </div>
        </StyledDiv>
    )
}

export default  Nav