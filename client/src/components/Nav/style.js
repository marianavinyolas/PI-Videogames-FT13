import styled from 'styled-components';


export const StyledDiv = styled.div`
  color: white;
  background-color: #f2830d;
  display: flex;
  justify-content: space-around;
  align-items:center;

  .links {
    display: flex;
    justify-content: space-around;
    margin: center;
  }
  .btn--nav {
    padding: 12px 15px;
    border-radius: 8px;
    outline: none;
    font-size: 16px;
    :hover {
      background-color: #e2711d;
      transition: 500ms;
    }
  }
  .container {
    width: 100%;
    .input--search {
      width: 300px;
      border-radius: 8px;
      height: 40px;
      outline: none;
      margin-right: 5px;
    }
    .btn--search {
      padding: 12px 15px;
      border-radius: 8px;
      outline: none;
      font-size: 16px;
      :hover {
        background-color: #e2711d;
        transition: 500ms;
      }
    }
  }
`