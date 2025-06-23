import GameCard from "./GameCard";
import cardData from "../assets/GamdCardData";
import styled from "styled-components";

const ComingWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`;

function GameComing() {
  return (
    <ComingWrap>
      <h1>Game coming</h1>
      <CardList>
        {cardData.map((c) => (
          <GameCard data={c} />
        ))}
      </CardList>
    </ComingWrap>
  );
}

export default GameComing;
