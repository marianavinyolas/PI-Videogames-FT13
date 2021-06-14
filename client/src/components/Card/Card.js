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
    <>

      <Link to={`/videogame/${id}`}>
      <div className='contImg'>
        <div>{name}</div>
        <img src={img} alt=""/>
        <ul>
          {
            genres && genres.map((g, i) => {
              return <li key={i}>{g.name}</li>
            } )
          }
        </ul>
      </div>
          </Link>
    </>
  )
}

export default Card