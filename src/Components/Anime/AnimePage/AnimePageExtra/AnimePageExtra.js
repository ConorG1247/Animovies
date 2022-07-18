import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnimeSimilar from "./AnimeSimilar/AnimeSimilar";

function AnimePageExtra({ animeData, id }) {
  const [buttonSelection, setButtonSelection] = useState(0);
  const [animeRec, setAnimeRec] = useState();
  let navigate = useNavigate();

  useEffect(() => {
      const animeReccomend = async () => {
        const res = await fetch(
          `https://api.jikan.moe/v4/anime/${id}/recommendations`
        );
        const data = await res.json();
        if (buttonSelection === 1) {
            setAnimeRec(data.data.slice(0, 20));
        }
    };
    animeReccomend();
  },[id, buttonSelection])

  const moreMovieInfo = (id) => {
    navigate(`/anime/page/${id}`, {
      state: id,
      replace: true,
    });
  };

  return (
    <div className="anime-container-plot">
      <div className="anime-button-container">
        <div className="anime-container-more-button">
          <button
            onClick={() => {
              setButtonSelection(0);
              setAnimeRec();
            }}
            className={
              buttonSelection === 0
                ? "anime-container-more-button--padding  anime-selected"
                : "anime-container-more-button--padding"
            }
          >
            Synopsis
          </button>
          <button
            onClick={() => {
              setButtonSelection(1);
            }}
            className={
              buttonSelection === 1
                ? "anime-container-more-button--padding  anime-selected"
                : "anime-container-more-button--padding"
            }
          >
            Similar
          </button>
        </div>
        <div
          className={
            buttonSelection === 0
              ? "movieinfo-container-header-seperate--title-syn"
              : "movieinfo-container-header-seperate--title-syn  anime-hidden"
          }
        >
          Synopsis
        </div>
      </div>
      <div
        className={
          buttonSelection === 0
            ? "anime-container-plot-text"
            : "anime-container-plot-text  anime-hidden"
        }
      >
        {animeData?.synopsis}
      </div>
      <div
        className={
          buttonSelection === 1
            ? "anime-container-reccomend"
            : "anime-container-reccomend  anime-hidden"
        }
      >
        <AnimeSimilar moreMovieInfo={moreMovieInfo} data={animeRec} />
      </div>
    </div>
  );
}

export default AnimePageExtra;
