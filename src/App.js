import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import WatchList from "./Components/WatchList/WatchList"
import Search from "./Components/Search/Search";
import TypeSelection from "./Components/TypeSelection/TypeSelection";
import MoviePage from "./Components/MoviePage/MoviePage";
import RandomMovie from "./Components/RandomMovie/RandomMovie";
import AnimeHome from "./Components/Anime/AnimeHome/AnimeHome";
import AnimeWatchlist from "./Components/Anime/AnimeWatchlist/AnimeWatchlist"
import AnimePage from "./Components/Anime/AnimePage/AnimePage"
import AnimeSearch from "./Components/Anime/AnimeSearch/AnimeSearch"

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
        
        <Route path="/anime" element={<AnimeHome />} />
        <Route path="/anime/watchlist" element={<AnimeWatchlist />} />
        <Route path="/anime/search/:userId" element={<AnimeSearch />} />
        <Route path="/anime/page/:userId" element={<AnimePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
