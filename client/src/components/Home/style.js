import styled from 'styled-components';

export const StyledDiv = styled.div`
  display:grid;
  width: 75%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: auto;
  /* border-radius: 15px; */
  /* justify-content: space-around; */
  font-size: 14px;
  color: #e2711d;
  .contImg {
    width: 250px;
    height: 350px;
    img {
      width:200px;
      height:150px;
    }
  }
`;