import { CardPlatform } from "../components/Platform";
import styled from "styled-components";

const CardBox = styled.div`
  width: 550px;
  border: 2px solid #188be2;
  border-radius: 12px;
`;

const GameInfo = styled.div`
  display: flex;
`;

const ImgBox = styled.div`
  margin-top: 16px;
  margin-left: 13px;

  img {
    width: 280px;
    border-radius: 12px;
  }
`;

const InfoBox = styled.div`
  font-size: 14px;
  height: 140px;
  margin-top: 26px;
  margin-left: 20px;
  padding-left: 12px;
  padding-right: 4px;
  border-left: 1px solid black;
`;

const Platform = styled.div`
  display: flex;
`;

const H3 = styled.h3`
  display: flex;
  width: 267px;
  height: 40px;
  margin: 24px auto;
  border-radius: 20px;
  background: #9fcde0;
  justify-content: center;
  align-items: center;
`;

function GameCard({ data }) {
  return (
    <CardBox>
      <GameInfo>
        <ImgBox>
          <img src={data.img} alt={data.name}></img>
        </ImgBox>
        <InfoBox>
          <h3 className="name">{data.name}</h3>
          <p className="release">release : {data.release}</p>
          <p className="developer">developer : {data.developer}</p>
          <Platform>
            플랫폼 : <CardPlatform platforms={data.platforms} />
          </Platform>
          {/* <p>platforms : {data.platforms}</p> */}
        </InfoBox>
      </GameInfo>
      <div className="game_site">
        <H3>Go to site</H3>
      </div>
    </CardBox>
  );
}

export default GameCard;
