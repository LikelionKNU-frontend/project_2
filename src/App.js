import "./App.css";
import Footer from "./components/Footer";
import GameInfo from "./components/GameInfo";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      {/* <GameInfo slug="dark-souls-iii" /> */}
      {/* <GameInfo slug="elden-ring" /> */}
      <GameInfo slug="grand-theft-auto-v" />
      <p>겨여여영계</p>
      <Footer />
    </div>
  );
}

export default App;
