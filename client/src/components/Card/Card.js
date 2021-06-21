import React from 'react';
import { Link } from "react-router-dom";


export const  Card = (props) => {

  const {
    name,
    img,
    genres,
    id,
  } = props;

  return (
    

      <div className='contImg'>
        <div className='title'>{name}</div>
        <Link className='img' to={`/videogame/${id}`}>
          <img src={img} alt='Not found'/>
        </Link>
        <ul>
          {genres && genres.map((g, i) => { return <li key={i}>{g.name}</li>})}
        </ul>
      </div>
    
  )
}

export default Card