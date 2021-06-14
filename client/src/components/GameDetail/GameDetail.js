import React from 'react';
import { getVideogameDetail } from '../../actions/actions'


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardDetail from '../CardDetail/CardDetail';
import { StyledDiv } from './style'; 


export const  GameDetail = ({match}) => {

  const dispatch = useDispatch();
  const game = useSelector(state => state.videogamesDetail);
  
  useEffect( () => {
    dispatch(getVideogameDetail(match.params.id))
  }, [dispatch]);

  return (
    <StyledDiv>
      <CardDetail
          img = {game.background_image}
          
          name = {game.name}
            
          genres = {game.genres}
          />

    </StyledDiv>
  )
}

export default GameDetail