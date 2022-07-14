import { useNavigate } from "react-router-dom";
import { data } from "../../libs/data";

function NewMovies() {
  let navigate = useNavigate();

  const moreMovieInfo = (id) => {
    navigate(`/page/${id}`, {
      state: id,
      replace: true,
    });
  };

  return (
      <div className="new-movies-container">
    <div className="new-movies-title">New Movie Releases</div>
      <div className="new-movies-container-poster">
        {data.items.slice(0, 10)?.map((arr, index) => {
          return (
            <div key={index} className="new-movies-poster-title">
              <img
                className="new-movies-poster"
                src={arr.image}
                alt={arr.fullTitle}
                onClick={() => moreMovieInfo(arr.id)}
              />
              <div>{arr.fullTitle}</div>
              <div>⭐{arr.imDbRating}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewMovies;
