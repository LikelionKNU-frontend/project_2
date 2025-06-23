import React from "react";
import "../assets/EventCarousel.css";

import eldenringImg from "../image/EldenRing.png";
import planetzooImg from "../image/PlanetZoo.png";
import fifaonline4Img from "../image/Fifa.png";

const games = [
  {
    id: 1,
    slug: "elden-ring",
    title: "Elden Ring",
    image: eldenringImg,
    eventUrl: "https://eldenring.bn-ent.net/kr/information/",
  },
  {
    id: 2,
    slug: "planet-zoo",
    title: "Planet Zoo",
    image: planetzooImg,
    eventUrl:
      "https://www.planetzoogame.com/ko-KR/%EC%86%8C%EC%8B%9D?version=pc",
  },
  {
    id: 3,
    slug: "fifa-online-4",
    title: "FIFA Online 4",
    image: fifaonline4Img,
    eventUrl: "https://events.fconline.nexon.com/230720/visitnexonmatch",
  },
];

const EventCarousel = () => {
  return (
    <section className="event-carousel">
      <h2 className="carousel-title">🏷️ 이벤트 진행 중인 게임들</h2>
      <div className="event-list">
        {games.map((game) => (
          <a
            key={game.id}
            href={game.eventUrl}
            className="event-card"
            target="_blank"
            rel="noopener noreferrer" //보안을 위해서 사용하는게 좋다고 함(계속 경고뜸)
          >
            <img src={game.image} alt={game.title} className="event-image" />
            <p className="event-title">{game.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default EventCarousel;
