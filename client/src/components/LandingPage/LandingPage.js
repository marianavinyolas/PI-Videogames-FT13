import React from "react";
import { Link } from "react-router-dom";
import { StyledDiv } from "./styled";

const LandingPage = () => {
  return (
    <StyledDiv>
      <div className="title">
        <h1>Videogames App</h1>
      </div>
      <div>
        <Link to="/home">
          <button className="btn">Click here</button>
        </Link>
      </div>
    </StyledDiv>
  );
};

export default LandingPage;
