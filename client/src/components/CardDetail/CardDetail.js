import React from 'react';

export const  CardDetail = (props) => {

  const {
    name,
    img,
    genres,
    id,
  } = props;

  return (
    <>

      <div className='contImg'>
        <div>{name}</div>
        <img src={img} alt=""/>
        <ul>
          {        // modificar
            genres && genres.map((g, i) => {
              return <li key={i}>{g.name}</li>
            } )
          }
        </ul>
      </div>
    </>
  )
}

export default CardDetail