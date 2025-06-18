import Nav from "../components/Nav";
import GameInfo from "../components/GameInfo";
import Footer from "../components/Footer";

function GameInfoPage() {
  return (
    <div>
      <Nav />
      <GameInfo slug="dark-souls-iii" />
      {/* <GameInfo slug="elden-ring" /> */}
      {/* <GameInfo slug="grand-theft-auto-v" /> */}
      <Footer />
    </div>
  );
}

export default GameInfoPage;
