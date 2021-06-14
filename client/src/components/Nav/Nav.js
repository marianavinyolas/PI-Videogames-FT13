import React from 'react';
import { Link } from 'react-router-dom';
import { StyledDiv } from './style';
import Search from '../Search/Search'
export default function Nav() {
    return (
        <StyledDiv>
            <div>
                <h1>videogames app</h1>
            </div>
            <Search/>
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
