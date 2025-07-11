import { Link } from "react-router-dom";
import "../assets/MonthlyPopularGames.css";

import BattleGroundImg from "../image/BattleGround.png";
import OnceHumanImg from "../image/OnceHuman.png";
import OverWatchImg from "../image/OverWatch.png";

const gameData = [
  {
    rank: 1,
    title: "BattleGround",
    slug: "playerunknowns-battlegrounds",
    image: BattleGroundImg,
    users: 5103,
    downloads: "2억회",
  },
  {
    rank: 2,
    title: "Once Human",
    slug: "once-human",
    image: OnceHumanImg,
    users: 4826,
    downloads: "5천만회",
  },
  {
    rank: 3,
    title: "OverWatch",
    slug: "overwatch",
    image: OverWatchImg,
    users: 3594,
    downloads: "1억회",
  },
];

const MonthlyPopularGames = () => {
  return (
    <section className="monthly-popular-section">
      <h2 className="section-title">👑 Monthly Top Games</h2>
      <div className="popular-game-list">
        {gameData.map((game) => (
          <Link to={`/index/${game.slug}`} className="popular-item">
            <div key={game.rank} className="popular-game-card">
              <img
                src={game.image}
                alt={game.title}
                className="popular-game-img"
              />
              <div className="popular-game-info">
                <div className="game-rank-title">
                  {game.rank}위 {game.title}
                </div>
                <div className="game-users">
                  👥 {game.users.toLocaleString()}명
                </div>
                <div className="game-downloads">
                  누적 다운로드수 : {game.downloads}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MonthlyPopularGames;
