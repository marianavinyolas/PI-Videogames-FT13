import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 75%;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  justify-content: space-around;
  color: #e2711d;
  list-style-type: none;
  font-size: 16px;
  font-family: "Antonio", sans-serif;
  background-color: #000000;
  .contImg {
    display: flex;
    justify-content: center;
    border: 1px solid white;
    margin-top: 30px;
    padding: 2%;
    width: 95%;
    height: 100%;
    .btn {
      display: flex;
      background-color: #e2711d;
    }
    img {
      width: 300px;
      height: 250px;
      border-radius: 7px;
      margin-right: 25px;
    }
  }
`;
