import { useEffect, useState } from "react";
import { fetchGameImages, fetchGameInfo } from "../api/api";
import "./GameInfo.css";
import Rating from "./Rating";
import Category from "./Category";
import Platform from "./Platfomr";
import GameSpecs from "./GameSpecs";

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

  if (loading) return <p>로딩 중...</p>;
  if (!game) return <p>게임 정보를 불러올 수 없습니다.</p>;

  return (
    <div className="gameInfo_wrap">
      <div className="gameInfo">
        <h2 className="game_name">{game.name}</h2>
        <div className="games">
          <div className="images">
            <div className="main_img">
              <img
                key={screenshots[0].id}
                src={screenshots[0].image}
                alt="메인이미지"
                className="m_img"
              ></img>
            </div>
            <div className="sub_imgs">
              {screenshots.slice(1, 5).map((s) => (
                <img
                  key={s.id}
                  src={s.image}
                  alt="스크린샷"
                  className="s_img"
                ></img>
              ))}
            </div>
          </div>
          <div className="infos">
            <img
              src={game.background_image}
              alt={game.name}
              className="info_img"
            ></img>
            <p className="info_content">{game.description_raw}</p>
            <div className="info_ra_da">
              <Rating rating={game.rating} />
              <p className="game_date">{game.released}</p>
            </div>
          </div>
          <Category tags={game.tags} />
        </div>
      </div>
      <Platform platforms={game.platforms} />
      <GameSpecs slug={slug} />
    </div>
  );
}

export default GameInfo;

// <p>{game.website}</p> */}
