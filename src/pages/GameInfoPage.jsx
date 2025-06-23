import { useParams } from "react-router-dom";

import Nav from "../components/Nav";
import GameInfo from "../components/GameInfo";
import Footer from "../components/Footer";

// 링크에서 slug 데이터를 가져와야 됨
// useParams() 파라미터 가져오기 ex)/index/dark-souls-iii일때 -> dark-souls-iii
// http://localhost:3000/index/slug=dark-souls-iii
function GameInfoPage() {
  const { slug } = useParams();

  return (
    <div>
      <Nav />
      <GameInfo slug={slug} />
      {/* <GameInfo slug="elden-ring" /> */}
      {/* <GameInfo slug="grand-theft-auto-v" /> */}
      {/* <GameInfo slug="dark-souls-iii" /> */}
      <Footer />
    </div>
  );
}

export default GameInfoPage;
