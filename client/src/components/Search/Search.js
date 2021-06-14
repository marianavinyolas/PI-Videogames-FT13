import React, { useState } from "react";
import { useDispatch } from "react-redux";
import   { getVideogamesName }  from '../../actions/actions'

const Search = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  // const games = useSelector(state => state.search);
  // console.log(name)
  
  const handleChange = (e) => {
    setName( e.target.value );
  }
  
  const handleSubmit =  (e) => {
    e.preventDefault();
    // console.log('hahahahahahah')
    if(name.length) dispatch(getVideogamesName(name))
    setName(''); // esto vacia la barra de busqueda
  }
  return (
    <div>
      <form className='container' onSubmit={(e)=>handleSubmit(e)}>
          <input className='input--search' type='text'
            autoComplete='off' 
            value={name}
            placeholder='Enter a name...'
            onChange={ e => handleChange(e)}/>
        <button className='btn--search'  type='submit'>Search</button>
      </form>
    </div>
  );
}

export default Search;
