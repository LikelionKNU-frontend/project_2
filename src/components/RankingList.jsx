import React, { useState } from "react";
import "../assets/RankingList.css";
import { Link } from "react-router-dom";
import allGames from "../assets/RankingData.js";

const filters = ["All", "Latest", "Downloads", "Popluar", "Ratings"];

const RankingList = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const getFilteredGames = () => {
    switch (selectedFilter) {
      case "Latest":
        return [...allGames].sort(
          (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
        );
      case "Downloads":
        return [...allGames].sort((a, b) => b.downloads - a.downloads);
      case "Popluar":
        return [...allGames].sort((a, b) => b.users - a.users);
      case "Ratings":
        return [...allGames].sort((a, b) => b.rating - a.rating);
      default:
        return allGames;
    }
  };

  const filteredGames = getFilteredGames();

  return (
    <div className="ranking-container">
      <div className="ranking-filters">
        {filters.map((filter) => (
          <span
            key={filter}
            className={`filter-item ${
              selectedFilter === filter ? "active" : ""
            }`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </span>
        ))}
      </div>

      {filteredGames.slice(0, 3).map((game, index) => (
        <div className="ranking-row" key={index}>
          <div className="rank-num">{index + 1}.</div>
          <Link to={`/index/${game.slug}`}>
            <img src={game.image} alt={game.title} className="rank-img" />
          </Link>
          <div className="rank-title">{game.title}</div>
          <div className="rank-info">
            <p>{game.tags.join(", ")}</p>
            <div className="rating-date">
              <div className="stars">
                {"★".repeat(Math.round(game.rating)) +
                  "☆".repeat(5 - Math.round(game.rating))}
              </div>
              <div className="date">{game.releaseDate}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RankingList;
