import Nav from "../components/Nav";
import GameInfo from "../components/GameInfo";
import Footer from "../components/Footer";

// 링크에서 slug 데이터를 가져와야 됨

function GameInfoPage({ slug }) {
  return (
    <div>
      <Nav />
      <GameInfo slug="dark-souls-iii" />
      {/* <GameInfo slug="elden-ring" /> */}
      {/* <GameInfo slug="grand-theft-auto-v" /> */}
      {/* <GameInfo slug={slug} /> */}
      <Footer />
    </div>
  );
}

export default GameInfoPage;
