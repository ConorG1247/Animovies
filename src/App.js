import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import WatchList from "./Components/WatchList/WatchList"
import Search from "./Components/Search/Search";
import TypeSelection from "./Components/TypeSelection/TypeSelection";
import MoviePage from "./Components/MoviePage/MoviePage";
import RandomMovie from "./Components/RandomMovie/RandomMovie";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TypeSelection />} />
        <Route path="/movie" element={<Home />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/random" element={<RandomMovie />} />
        <Route path="/search/:userId" element={<Search />} />
        <Route path="/page/:userId" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
