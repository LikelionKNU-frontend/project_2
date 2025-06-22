import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../assets/EventCarousel.css";

import { EffectCoverflow, Pagination } from "swiper/modules";

import eldenringImg from "../assets/EldenRing.png";
import planetzooImg from "../assets/PlanetZoo.png";
import fifaonline4Img from "../assets/Fifa.png";

const EventCarousel = () => {
  const games = [
    { id: 1, title: "Elden Ring", imageUrl: eldenringImg },
    { id: 2, title: "Planet Zoo", imageUrl: planetzooImg },
    { id: 3, title: "FIFA Online 4", imageUrl: fifaonline4Img },
  ];

  return (
    <section className="event-carousel">
      <h2 className="carousel-title">
        <span role="img" aria-label="tag">
          🏷️
        </span>{" "}
        이벤트 진행 중인 게임들
      </h2>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="carousel-container"
      >
        {games.map((game) => (
          <SwiperSlide key={game.id} className="carousel-slide">
            <img
              src={game.imageUrl}
              alt={game.title}
              className="carousel-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default EventCarousel;
