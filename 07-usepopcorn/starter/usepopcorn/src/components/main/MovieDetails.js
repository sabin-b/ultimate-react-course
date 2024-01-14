import { useState, useEffect } from "react";
import { StarRating } from "../reusable/StarRating";
import { Loader } from "../reusable/Loader";

export function MovieDetails({
  selectedId,
  oncloseSelectedTab,
  apiKey,
  onAddWatchList,
}) {
  let [loading, setLoading] = useState(false);
  let [moviedetail, setmoviedetail] = useState({});
  let {
    Title: title,
    Poster: poster,
    Plot: plot,
    Released: released,
    Runtime: runTime,
    Genre: genre,
    imdbRating: imdbrating,
    Actors: actors,
    Year: year,
    Director: director,
    Ratings: userRatings,
  } = moviedetail;

  //! handle watchedList
  function handleWatchedList() {
    let newMovie = {
      imdbID: selectedId,
      Title: title,
      Year: year,
      Poster: poster,
      runtime: Number(runTime.split(" ").at(0)),
      imdbRating: Number(imdbrating),
      userRating: Number(userRatings.at(0).Value.split("/").at(0)),
    };
    // console.log(newMovie);
    onAddWatchList(newMovie);

    //todo: close the tab
    oncloseSelectedTab();
  }

  //! data fetching
  useEffect(() => {
    async function handleSelectedId() {
      setLoading(true);
      let res = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&i=${selectedId}`
      );
      let data = await res.json();
      setmoviedetail(data);
      setLoading(false);
    }
    handleSelectedId();
  }, [selectedId, apiKey]);

  return (
    <div className="details">
      {loading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={oncloseSelectedTab}>
              &larr;
            </button>
            <img src={poster} alt={title} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runTime}
              </p>
              <p>{genre}</p>
              <p>ImdbRating ⭐{imdbrating}</p>
              <p>Year: {year}</p>
            </div>
          </header>
          <section>
            <div className="rating">
              <StarRating maxRating={10} size={24} />
              <button className="btn-add" onClick={handleWatchedList}>
                Add To List
              </button>
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>💫 Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}
