import { useParams } from "react-router-dom";

import Nav from "../components/Nav";
import GameInfo from "../components/Info";
import Footer from "../components/Footer";

function InfoPage() {
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

export default InfoPage;
