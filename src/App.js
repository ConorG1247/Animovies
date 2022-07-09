import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./Components/Home/Home";
import WatchList from "./Components/WatchList/WatchList"
import Search from "./Components/Search/Search";
import TypeSelection from "./Components/TypeSelection/TypeSelection";

function App() {
  const { userId } = useParams();

  console.log(userId)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TypeSelection />} />
        <Route path="/movie" element={<Home />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/search/:userId" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
