import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameInfoPage from "./pages/GameInfoPage";
import InfoPage from "./pages/InfoPage";
import "./App.css";
import ShowStackPage from "./pages/ShowStackPage";
import ComingPage from "./pages/CommingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/index"/ element={}> */}
        <Route path="/index" element={<InfoPage />} />
        <Route path="/index/:slug" element={<GameInfoPage />} />
        <Route path="/index/showstack" element={<ShowStackPage />} />
        <Route path="/index/coming" element={<ComingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
