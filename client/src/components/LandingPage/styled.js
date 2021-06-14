import styled from 'styled-components';
import img from '../../img/spaceInvaders.jpg';

export const StyledDiv = styled.div`
  display: grid;
  color: #f2830d;
  font-size: 30px;
  background-image: url(${img});
  background-position: center center;
  background-size:cover;
  background-attachment: fixed;
  position: fixed;
  width: 100%;
  height: 100%;


  .title {
    font-size: 40px;
    margin-left: 50px;
    margin-top: 80px;
  }

  .btn {
    background-color: #f2830d;
    border-radius: 8px;
    border: 1.5px solid black;
    color: #3a0ca3;
    width: 300px;
    height: 60px;
    margin-left: 220px;
    margin-bottom: 250px;
    font-size: 30px;
    font-weight: bold;
    :hover {
      background-color: #3a0ca3;
      transition: 400ms;
      color: #f2830d;
    }
    
  }
`


// export const StyledBtn = styled.btn`
//     border: 1px solid #000;
//     display: flex;
    
// `;