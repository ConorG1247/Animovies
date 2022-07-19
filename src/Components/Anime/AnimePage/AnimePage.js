import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import useFetch from "../../../hooks/useFetch";
import AnimeNavbar from "../AnimeNavbar/AnimeNavbar";
import AnimePageExtra from "./AnimePageExtra/AnimePageExtra";

function AnimePage() {
  const [animeData, setAnimeData] = useState();
  const [fetchContent, setFetchContent] = useState({
    url: null,
    method: null,
    body: null,
  });
  useFetch(fetchContent.url, fetchContent.method, fetchContent.body);
  let location = useLocation();

  useEffect(() => {
    if (location.state === null) {
      return;
    }
    const searchResultData = async () => {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime/${location.state}/full`
      );
      const data = await res.json();
      setAnimeData(data.data);
    };
    searchResultData();
  }, [location.state]);
  
  const defineFetchContent = () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/update`;
    const method = "POST";
    const body = JSON.stringify({
      type: "anime",
      user: `${localStorage.getItem("guest")}`,
      title: animeData.title,
      poster: animeData.images.jpg.image_url,
      year: animeData.year,
      id: animeData.mal_id,
    });
    setFetchContent({ url: url, method: method, body: body });
    localStorage.setItem("AnimeCheck", "true");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.state]);

  return (
    <div>
      <AnimeNavbar />
      <div className="movieinfo">
        <div className="movieinfo-container">
          <div className="movieinfo-container-poster">
            <img
              className="movieinfo-container-poster-style"
              src={animeData?.images.jpg.image_url}
              alt={animeData?.title}
            />
          </div>
          <div className="movieinfo-main-header">
            <div>
              <div className="movieinfo-container-header">
                <div className="movieinfo-container-header-seperate--title">
                  {animeData?.title}
                </div>
                <div className="movieinfo-container-header-seperate">
                  {animeData?.title_japanese}
                </div>
                <div className="movieinfo-container-header-seperate">
                  {animeData?.title_english}
                </div>
                <div className="movieinfo-container-header-seperate">
                  Released: {animeData?.year} ⭐{animeData?.score}
                </div>
              </div>
            </div>
            <div className="movieinfo-container-secondary-header">
              <div className="movieinfo-container-header-seperate">
                Status: {animeData?.status}
              </div>
              <div className="movieinfo-container-header-seperate">
                Episodes: {animeData?.episodes}
              </div>
              <div className="movieinfo-container-header-seperate">
                Genre: {animeData?.genres[0].name}
              </div>

              <div className="movieinfo-container-header-seperate">
                Rated: {animeData?.rating}
              </div>
              <div className="movieinfo-container-header-seperate">
                Runtime: {animeData?.duration}
              </div>
            </div>
          </div>
        </div>
        <div className="movieinfo-container-plot">
          <div className="movieinfo-container-plot-text">
            <div>
              <Button
                onClick={() => defineFetchContent()}
                bg="blue.800"
                _hover={{ backgroundColor: "blue.600" }}
                _active={{ backgroundColor: "blue.500" }}
                color="white"
              >
                Add to watchlist
              </Button>
            </div>
          </div>
          <AnimePageExtra animeData={animeData} id={location.state} />
        </div>
      </div>
    </div>
  );
}

export default AnimePage;
