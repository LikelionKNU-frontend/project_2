import "./Rating.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Rating({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} />);
    } else if (rating >= i - 0.63) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }

  return (
    <div className="game_rating">
      <span>{stars}</span>
    </div>
  );
}

export default Rating;
