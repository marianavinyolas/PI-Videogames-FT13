import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 95%;
  margin: auto;
  justify-content: space-around;
  color: #e2711d;
  list-style-type: none;
  font-size: 12px;
  font-family: 'Antonio', sans-serif;
  .containerCards {
    display: grid;
    grid-template-columns:  1fr 1fr 1fr;

  }
  ul {
    list-style-type:none;
    display: flex;
    justify-content: space-around
  }
  .pagination {
    text-decoration: none;

    font-size: 30px;
    a {
      color: white;
      display: flex;
    }
  }
  .title {
    font-size: 20px;
    text-align: center;
    color: #e2711d;
    font-weight: bold;
    font-family: 'Antonio', sans-serif;
  }
  .contImg {
    width: 350px;
    height: 300px;
    border: 1px solid white;
    border-radius: 5px;
    margin-bottom: 20px;
    margin-top: 20px;
    background-color: #262524;

    .img {
      text-align: center;
      display: block;

      img {
        margin: 0px auto;
        width: 80%;
        height: 150px;
        margin-top: 10px;
        border-radius: 5px;
      }

    }
  }
`;