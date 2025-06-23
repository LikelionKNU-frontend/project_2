import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameInfoPage from "./pages/GameInfoPage";
import InfoPage from "./pages/InfoPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          {/* <Route path="/index"/ element={}> */}
          <Route path="/info" element={<InfoPage />} />
        <Route path="/index/:slug" element={<GameInfoPage />} />
      </Routes>
    </BrowserRouter>
    // <GameInfoPage />
  );
}

export default App;
