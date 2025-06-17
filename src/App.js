import "./App.css";
import Footer from "./components/Footer";
import GameInfo from "./components/GameInfo";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <h1>App</h1>
      <GameInfo slug="elden-ring" />
      <p>겨여여영계</p>
      <Footer />
    </div>
  );
}

export default App;
