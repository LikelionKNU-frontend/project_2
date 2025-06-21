import { useParams } from "react-router-dom";

import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import EventCarousel from "../components/EventCarousel";
import RankingList from "../components/RankingList";
import MonthlyPopularGames from "../components/MonthlyPopularGames";
import Footer from "../components/Footer";

function InfoPage() {
  const { slug } = useParams();

  return (
    <div>
      <Nav />
      <SearchBar />
      <EventCarousel />
      <RankingList />
      <MonthlyPopularGames />
      <Footer />
    </div>
  );
}

export default InfoPage;
