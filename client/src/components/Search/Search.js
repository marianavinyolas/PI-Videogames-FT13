import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import   { getVideogamesName }  from '../../actions/actions'

const Search = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideogamesName(name));
}, [dispatch]);

  const handleChange = (e) => {
    setName( e.target.value );
  }
  
  const handleSubmit =  (e) => {
    e.preventDefault();
    if(name.length) dispatch(getVideogamesName(name))
    setName(''); 
  }
  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
          <input className='input' type='text'
            autoComplete='off' 
            value={name}
            placeholder='Search by name...'
            onChange={ e => handleChange(e)}/>
      </form>
    </div>
  );
}

export default Search;
