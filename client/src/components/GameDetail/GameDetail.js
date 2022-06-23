import { getVideogameDetail } from "../../actions/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardDetail from "../CardDetail/CardDetail";
import { StyledDiv } from "./style";

export const GameDetail = ({ match }) => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.videogameDetail);
  const id = match.params.id;

  useEffect(() => {
    dispatch(getVideogameDetail(id));
  }, [dispatch, id]);

  return (
    <StyledDiv>
      <CardDetail game={game} />
    </StyledDiv>
  );
};

export default GameDetail;
