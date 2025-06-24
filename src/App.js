import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameInfoPage from "./pages/GameInfoPage";
import InfoPage from "./pages/InfoPage";
import EventPage from "./pages/EventPage";
import ComingPage from "./pages/ComingPage";
import ComunityPage from "./pages/ComunityPage";
import MyPage from "./pages/MyPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/index" element={<InfoPage />} />
        <Route path="/index/:slug" element={<GameInfoPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/coming" element={<ComingPage />} />
        <Route path="/comunity" element={<ComunityPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
