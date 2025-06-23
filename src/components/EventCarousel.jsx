import React from "react";
import "../assets/EventCarousel.css";
import { Link } from "react-router-dom";

import eldenringImg from "../image/EldenRing.png";
import planetzooImg from "../image/PlanetZoo.png";
import fifaonline4Img from "../image/Fifa.png";

const games = [
  { id: 1, slug: "elden-ring", title: "Elden Ring", image: eldenringImg },
  { id: 2, slug: "planet-zoo", title: "Planet Zoo", image: planetzooImg },
  {
    id: 3,
    slug: "fifa-online-4",
    title: "FIFA Online 4",
    image: fifaonline4Img,
  },
];

const EventCarousel = () => {
  return (
    <section className="event-carousel">
      <h2 className="carousel-title">🏷️ 이벤트 진행 중인 게임들</h2>
      <div className="event-list">
        {games.map((game) => (
          <Link key={game.id} to={`/games/${game.slug}`} className="event-card">
            <img src={game.image} alt={game.title} className="event-image" />
            <p className="event-title">{game.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default EventCarousel;
