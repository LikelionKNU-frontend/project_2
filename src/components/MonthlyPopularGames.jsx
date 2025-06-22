import React from "react";
import "../assets/MonthlyPopularGames.css";

import BattleGroundImg from "../assets/BattleGround.png";
import OnceHumanImg from "../assets/OnceHuman.png";
import OverWatchImg from "../assets/OverWatch.png";
import { Link } from "react-router-dom";

const gameData = [
  {
    rank: 1,
    title: "배틀그라운드",
    slug: "playerunknowns-battlegrounds",
    image: BattleGroundImg,
    users: 5103,
    downloads: "2억회",
  },
  {
    rank: 2,
    title: "원스 휴먼",
    slug: "once-human",
    image: OnceHumanImg,
    users: 4826,
    downloads: "5천만회",
  },
  {
    rank: 3,
    title: "오버워치",
    slug: "overwatch",
    image: OverWatchImg,
    users: 3594,
    downloads: "1억회",
  },
];

const MonthlyPopularGames = () => {
  return (
    <section className="monthly-popular-section">
      <h2 className="section-title">👑 이달의 인기 게임</h2>
      <div className="popular-game-list">
        {gameData.map((game) => (
          <Link to={`/index/${game.slug}`}>
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
