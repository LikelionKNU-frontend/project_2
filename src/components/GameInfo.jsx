import { useEffect, useState } from "react";
import { fetchGameImages, fetchGameInfo } from "../api/api";
import "../assets/GameInfo.css";
import Loading from "./Loading";
import Error from "./Error";
import Rating from "./Rating";
import Category from "./Category";
import Platform from "./Platform";
import GameSpecs from "./GameSpecs";
import SiteUrl from "./SiteUrl";
import styled from "styled-components";

const GameInfoWrap = styled.div`
  margin-top: -33px;
`;

const GameInfoBox = styled.div`
  background: #eff0ff;
`;

const H2 = styled.h2`
  font-size: 40px;
  position: relative;
  left: 90px;
  padding-top: 20px;
`;

const GameImgBox = styled.div`
  margin-top: -10px;
  display: flex;
  gap: 56px;
  justify-content: center;
`;

const MainImg = styled.div`
  height: 288px;
`;

const SubImgs = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 4px;
`;

const InfoContent = styled.div`
  margin-top: 4px;
  overflow-y: scroll;
  width: 430px;
  height: 150px;
`;

const InfoRatingDate = styled.p`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  align-items: center;
`;

function GameInfo({ slug }) {
  const [game, setGame] = useState(null);
  const [screenshots, setScreenshots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const gameData = await fetchGameInfo(slug);
        setGame(gameData);

        const images = await fetchGameImages(gameData.id);
        setScreenshots(images);
      } catch (err) {
        console.error("데이터 로딩 실패:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [slug]);

  if (loading) return <Loading />;
  if (!game) return <Error />;

  return (
    <GameInfoWrap>
      <GameInfoBox>
        <H2 className="game_name">{game.name}</H2>
        <GameImgBox>
          <div className="images">
            <MainImg>
              <img
                src={screenshots[0].image}
                alt="메인이미지"
                className="m_img"
              ></img>
            </MainImg>
            <SubImgs>
              {screenshots.slice(1, 5).map((s) => (
                <img
                  key={s.id}
                  src={s.image}
                  alt="스크린샷"
                  className="s_img"
                ></img>
              ))}
            </SubImgs>
          </div>
          <div className="infos">
            <img
              src={game.background_image}
              alt={game.name}
              className="info_img"
            ></img>
            <InfoContent>{game.description_raw}</InfoContent>
            <InfoRatingDate>
              <Rating rating={game.rating} />
              <p className="game_date">Released : {game.released}</p>
            </InfoRatingDate>
          </div>
          <Category tags={game.tags} />
        </GameImgBox>
      </GameInfoBox>
      <Platform platforms={game.platforms} />
      <GameSpecs slug={slug} />
      <SiteUrl homeUrl={game.website} redditUrl={game.reddit_url} />
    </GameInfoWrap>
  );
}

export default GameInfo;
