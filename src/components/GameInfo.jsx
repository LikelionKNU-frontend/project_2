import { useEffect, useState } from "react";
import { fetchGameImages, fetchGameInfo } from "../api/api";

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
    <div>
      <div>
        <h2>{game.name}</h2>
        <img
          src={game.background_image}
          alt={game.name}
          style={{ maxWidth: "600px" }}
        ></img>
        <p>{game.description_raw}</p>
        <div style={{ display: "flex", gap: "10px" }}>
          {game.platforms?.map((p) => (
            <p key={p.platform.id}>{p.platform.name}</p>
          ))}
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          {game.genres?.map((g) => (
            <p key={g.id}>{g.name}</p>
          ))}
        </div>

        <p>{game.released}</p>
        <p>{game.website}</p>
      </div>
      <div>
        <h3>스크린샷</h3>
        <div style={{ display: "flex", gap: "20px" }}>
          {screenshots.map((s) => (
            <img
              key={s.id}
              src={s.image}
              alt="스크린샷"
              style={{ maxWidth: "200px" }}
            ></img>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameInfo;
