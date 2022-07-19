import React from "react";

function AnimeTop({data, moreMovieInfo, title}) {
  return (
    <div className="new-movies-container">
      <div className="new-movies-container-poster">
        {data?.map((arr, index) => {
          return (
            <div
              key={index}
              onClick={() => moreMovieInfo(arr.mal_id)}
              className="new-movies-poster-title"
            >
            {arr.score ? 
            <div className="rating">⭐{arr?.score} {arr.type}</div> : 
            <div className="rating">{arr.type}</div>}
              <img
                className="new-movies-poster"
                src={arr.images.jpg.image_url}
                alt={arr.title}
              />
              <div>{arr.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AnimeTop;
