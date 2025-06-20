import { useParams } from "react-router-dom";

import Nav from "../components/Nav";
import Info from "../components/Info";
import Footer from "../components/Footer";

function InfoPage() {
  const { slug } = useParams();

  return (
    <div>
      <Nav />
        <h1>이건 페이지에서 직접 수정한거</h1>
      <Info/>
      <Footer />
    </div>
  );
}

export default InfoPage;
