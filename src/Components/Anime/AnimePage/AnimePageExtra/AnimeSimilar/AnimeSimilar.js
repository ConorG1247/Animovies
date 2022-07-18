
function AnimeSimilar({ data, moreMovieInfo }) {
  return (
    <div className="new-movies-container">
      <div className="new-movies-title">Similar Reccomendations</div>
      <div className="new-movies-container-poster">
        {data?.map((arr, index) => {
          return (
            <div
              key={index}
              onClick={() => moreMovieInfo(arr.entry.mal_id)}
              className="new-movies-poster-title"
            >
              <img
                className="new-movies-poster"
                src={arr.entry.images.jpg.image_url}
                alt={arr.entry.title}
              />
              <div>{arr.entry.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AnimeSimilar;
