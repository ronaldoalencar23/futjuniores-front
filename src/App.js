import { Route, Routes } from "react-router-dom";
import { CreatePlayer } from "./pages/CreatePlayer";
import { EditPage } from "./pages/EditPage";
import { Home } from "./pages/Home";
import { PlayerPage } from "./pages/PlayerPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePlayer />} />
        <Route path="/player/:playerId" element={<PlayerPage />} />
        <Route path="/edit-player/:playerId" element={<EditPage />} />
      </Routes>
    </>
  );
}

export default App;
