import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: #e2711d;
  display: flex;
  align-items:center;
  justify-content: space-between;
  .container-utils {
    display: flex;
    width: 800px;
    .filters {
      margin: 0;
      padding:0;
      margin-right: 20px;

    }
  }
  
  .name {
    color: #202325;
    font-size: 40px;
    font-family: 'Antonio', sans-serif;
    font-weight: bolder;
    margin: 15px 20px;
    
  }
  /* .container { */
    .genre {
      border-radius: 3px;
      width: 130px;
      height: 25px;
      background-color: #2f2f2f;
      color: #e2711d;
      margin-right: 20px;
      font-family: 'Antonio', sans-serif;
      outline: none;
      }
    .source {
      display: inline;
      justify-content: space-around;
      border-radius: 3px;
      width: 130px;
      height: 25px;
      background-color: #2f2f2f;
      color: #e2711d;
      font-family: 'Antonio', sans-serif;
      outline: none;
      option {
        :hover {
        background-color: orange;
        } 
      }

    }
    .sort {
      border-radius: 3px;
      width: 130px;
      height: 25px;
      background-color: #2f2f2f;
      color: #e2711d;
      font-family: 'Antonio', sans-serif;
      outline: none;
      margin-right: 20px;
    }

    .btn--nav {
      height: 25px;
      border-radius: 4px;
      outline: none;
      background-color: #2f2f2f;
      color: #e2711d;
      font-family: 'Antonio', sans-serif;
      font-size: 14px;
      margin-right: 10px;
    }
    .input {
      width: 150px;
      border-radius: 4px;
      height: 20px;
      outline: none;
      margin-right: 5px;
      background-color: #2f2f2f;
      color: #e2711d;
      font-family: 'Antonio', sans-serif;
    }
  /* } */
`