import { useState, useEffect } from "react";
import { StarRating } from "../reusable/StarRating";
import { Loader } from "../reusable/Loader";

export function MovieDetails({
  selectedId,
  oncloseSelectedTab,
  apiKey,
  onAddWatchList,
  moviesList,
}) {
  let [loading, setLoading] = useState(false);
  let [moviedetail, setmoviedetail] = useState({});
  let [userRating, setuserRating] = useState(null);
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
    // Ratings: userRatings,
  } = moviedetail;

  // ! ischeck in list
  let isWatched = moviesList?.map((movie) => movie.imdbID).includes(selectedId);

  let userRated =
    moviesList?.find((movie) => movie?.imdbID === selectedId) ?? [];
  // console.log(isWatched, userRated);

  //! handle watchedList
  function handleWatchedList() {
    let newMovie = {
      imdbID: selectedId,
      Title: title,
      Year: year,
      Poster: poster,
      runtime: Number(runTime.split(" ").at(0)),
      imdbRating: Number(imdbrating),
      //   userRating: Number(userRatings.at(0).Value.split("/").at(0)),
      userRating: userRating ?? 0,
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

  // todo: doucment title change
  useEffect(
    function () {
      if (!title) return;
      document.title = `movie | ${title}`;

      // todo: cleanup function
      return () => (document.title = "TimePass");
    },
    [title]
  );

  // todo: key press event
  useEffect(() => {
    // close handler
    const handleClose = (e) => {
      if (e.code === "Escape") oncloseSelectedTab();
      // console.log(e.code);
      console.log("closed");
    };

    document.addEventListener("keydown", handleClose);

    return () => document.removeEventListener("keydown", handleClose);
  }, [oncloseSelectedTab]);

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
              {isWatched ? (
                <p>You Rated the movie ⭐{userRated.userRating}/10</p>
              ) : (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setuserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleWatchedList}>
                      + Add To List
                    </button>
                  )}
                </>
              )}
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
