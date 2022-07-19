import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnimeSimilar from "./AnimeSimilar/AnimeSimilar";
import YouTube from "react-youtube";

function AnimePageExtra({ animeData, id }) {
  const [buttonSelection, setButtonSelection] = useState(0);
  const [animeRec, setAnimeRec] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    const animeRecommend = async () => {
      if (buttonSelection === 1) {
        const res = await fetch(
          `https://api.jikan.moe/v4/anime/${id}/recommendations`
        );
        const data = await res.json();
        setAnimeRec(data.data.slice(0, 20));
        console.log(true);
      }
    };
    animeRecommend();
  }, [id, buttonSelection]);

  const moreMovieInfo = (id) => {
    navigate(`/anime/page/${id}`, {
      state: id,
      replace: false,
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
          <button
            onClick={() => {
              setButtonSelection(2);
              setAnimeRec();
            }}
            className={
              buttonSelection === 2
                ? "anime-container-more-button--padding  anime-selected"
                : "anime-container-more-button--padding"
            }
          >
            OP/ED
          </button>
          <button
            onClick={() => {
              setButtonSelection(3);
              setAnimeRec();
            }}
            className={
              buttonSelection === 3
                ? "anime-container-more-button--padding  anime-selected"
                : "anime-container-more-button--padding"
            }
          >
            Trailer
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
            ? "anime-container-recommend"
            : "anime-container-recommend  anime-hidden"
        }
      >
        <AnimeSimilar moreMovieInfo={moreMovieInfo} data={animeRec} />
      </div>
      <div
        className={
          buttonSelection === 2
            ? "anime-container-OPED"
            : "anime-container-OPED  anime-hidden"
        }
      >
        <div className="anime-OPED-title "> Opening Theme:</div>
        {animeData?.theme.openings.map((arr, index) => {
          return (
            <div className="anime-OPED-padding" key={index}>
              <div>{arr}</div>
            </div>
          );
        })}
        <div className="anime-OPED-title anime-OPED-padding">
          {" "}
          Ending Theme:
        </div>
        {animeData?.theme.endings.map((arr, index) => {
          return (
            <div className="anime-OPED-padding" key={index}>
              <div>{arr}</div>
            </div>
          );
        })}
      </div>
      <div
        className={
          buttonSelection === 3
            ? "anime-trailer"
            : "anime-trailer  anime-hidden"
        }
      >
        {buttonSelection === 3 && (
          <YouTube
            className="anime-trailer-dimensions"
            videoId={`${animeData?.trailer.youtube_id}`}
            frameBorder="0"
            title={`${animeData.title}`}
            onReady={(e) => e.target.setVolume(10)}
            opts={{ playerVars: { autoplay: 1 } }}
          />
        )}
      </div>
    </div>
  );
}

export default AnimePageExtra;
