import { useNavigate } from "react-router-dom";
import { data } from "../../libs/data";

function NewMovies() {
  let navigate = useNavigate();

  const moreMovieInfo = (id) => {
    navigate(`/page/${id}`, {
      state: id,
      replace: false,
    });
  };

  return (
    <div className="new-movies-container">
      <div className="new-movies-title">New Movie Releases</div>
      <div className="new-movies-container-poster">
        {data.items.slice(0, 10)?.map((arr, index) => {
          return (
            <div
              key={index}
              onClick={() => moreMovieInfo(arr.id)}
              className="new-movies-poster-title"
            >
              <div className="rating">⭐{arr.imDbRating}</div>
              <img
                className="new-movies-poster"
                src={arr.image}
                alt={arr.fullTitle}
              />
              <div>{arr.fullTitle}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewMovies;
