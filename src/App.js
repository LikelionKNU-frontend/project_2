import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameInfoPage from "./pages/GameInfoPage";
import InfoPage from "./pages/InfoPage";
import "./App.css";
import ShowStackPage from "./pages/ShowStackPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/index"/ element={}> */}
        <Route path="/index" element={<InfoPage />} />
        <Route path="/index/:slug" element={<GameInfoPage />} />
        <Route path="/index/showstack" element={<ShowStackPage />} />
      </Routes>
    </BrowserRouter>
    // <GameInfoPage />
  );
}

export default App;
