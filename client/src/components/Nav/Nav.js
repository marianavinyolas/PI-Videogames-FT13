import React from 'react';
import { Link } from 'react-router-dom';
import { StyledDiv } from './style';
import Search from '../Search/Search'
import { useDispatch } from 'react-redux';
import { sortZa, sortAz ,sortRatingUp, sortRatingDown, resetAll } from '../../actions/actions'

const  Nav = () => {
    const dispatch = useDispatch();
    const handleClick = (e) => e.target.value === 'SORT_AZ'
        ? dispatch(sortAz()) 
        :  e.target.value === 'SORT_ZA'
        ? dispatch(sortZa())
        : e.target.value === 'RATING_UP'
        ? dispatch(sortRatingUp())
        : e.target.value === 'ALL'
        ? dispatch(resetAll())
        : e.target.value === 'RATING_DOWN'
        ? dispatch(sortRatingDown())
        : null   
        
    return (
        <StyledDiv>
            <div>
                <h1>videogames app</h1>
            </div>
            <Search/>
            <select className="sort" onChange={(e)=>handleClick(e)}>
                <option>Sort...</option>
                <option value='SORT_AZ'>A-Z</option>
                <option value= 'SORT_ZA'>Z-A</option>
                <option value= 'RATING_UP'>Rating Up</option>
                <option value= 'RATING_DOWN'>Rating Down</option>
                <option value= 'ALL'>Show all</option>
            </select>
            <div>
                <Link to='/creategame'>
                    <button className='btn--nav' >Create  a  New Videogame</button>
                </Link>
            </div>
            <div className='links'>
                <Link to='/home'>EXIT</Link>
            </div>
        </StyledDiv>
    )
}

export default  Nav