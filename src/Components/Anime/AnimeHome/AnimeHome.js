import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnimeNavbar from "../../Anime/AnimeNavbar/AnimeNavbar";
import AnimeMain from "./AnimeMain/AnimeMain";
import AnimeMenu from "./AnimeMenu/AnimeMenu";
import AnimeTop from "./AnimeTop/AnimeTop";


function AnimeHome() {
  const [animeData, setAnimeData] = useState();
  const [selectTitle, setSelectTitle] = useState("Top Airing");
  const [searchType, setSearchType] = useState("/top/anime?type=tv/&filter=airing")
  let navigate = useNavigate();

  useEffect(() => {
    const animeInfo = async () => {
      const res = await fetch(`https://api.jikan.moe/v4${searchType}`);
      const data = await res.json();
      setAnimeData(data.data);
    };
    animeInfo();
  }, [searchType]);

  const changeTitle = (e) => {
    const value = e.target.value
    setSelectTitle(value)

    if (value === "Top Airing Anime") {
      setSearchType("/top/anime?type=tv/&filter=airing")
    }
    if (value === "Top Upcoming Anime") {
      setSearchType("/seasons/upcoming")
    }
    if (value === "Top Anime Shows") {
      setSearchType("/top/anime?type=tv")
    }
    if (value === "Top Anime Movies") {
      setSearchType("/top/anime?type=movie")
    }
  }

  const moreMovieInfo = (id) => {
    navigate(`/anime/page/${id}`, {
      state: id,
      replace: false,
    });
  };

  return (
    <div>
      <AnimeNavbar />
      <br />
      <AnimeMain />
      <div className="anime-home-container">
        <div className="anime-home-container-title">
          <AnimeMenu changeTitle={changeTitle} />
          <div className="anime-home-title">{selectTitle}</div>
        </div>
      </div>
      <AnimeTop
        data={animeData}
        title={selectTitle}
        moreMovieInfo={moreMovieInfo}
      />
    </div>
  );
}

export default AnimeHome;
