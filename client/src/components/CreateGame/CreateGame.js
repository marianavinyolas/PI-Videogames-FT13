import { useState } from "react";
import { useDispatch } from "react-redux";


const validate = (input) => {
  let errors = {};
  if (!input.name) {
    errors.name = 'Name is required';
  // } else if (!/\S+@\S+\.\S+/.test(input.username)) {
  //   errors.username = 'Username is invalid';
  // }

  if (!input.description) 
    errors.description = 'Description is required';
  // } else if (!/(?=.*[0-9])/.test(input.password)) {
  //   errors.password = 'Password is invalid';
  // }
  return errors;
  };
}


const CreateGame = () => {

  const [input, setInput] = useState({
    name: '',
    description: '',
    released: '',
    rating: 0
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch('aca tengo que poner mi action');


  const handleChange = function(e) {
    var objError = validate({
      ...input,
      [e.target.name]: e.target.value
    });

  setErrors(objError)

  setInput({
    ...input,
    [e.target.name]: e.target.value
  })

  return (
    <form>
      <div>
          <label>Name:</label>
          <input className={errors.name && 'danger'}
            type="text" name="name" onChange={handleChange} value={input.name} />
          {errors.name && (
            <p className="danger">{errors.name}</p>
          )}
      </div>
      <div>
        <label>Description:</label>
        <input className={errors.description && 'danger'}
        type="text" name="description" onChange={handleChange} value={input.description} />
        {errors.description && (
            <p className="danger">{errors.description}</p>
          )}
        
      </div>
      <div>
          <label>Released:</label>
          <input className={errors.released && 'danger'}
            type="text" name="released" onChange={handleChange} value={input.released} />
          {errors.released && (
            <p className="danger">{errors.released}</p>
          )}
      </div>
      <div>
          <label>Rating:</label>
          <input className={errors.rating && 'danger'}
            type="text" name="rating" onChange={handleChange} value={input.rating} />
          {errors.rating && (
            <p className="danger">{errors.rating}</p>
          )}
      </div>
      <input type="submit" value="Submit" />
    
    </form>
  )}
}
export default CreateGame;