import { useEffect, useState } from "react";
import { Header } from "./components/header/Header";
import { MovieList } from "./components/main/ListBox";
import { WatchedMovieList, WatchedSummary } from "./components/main/WatchedBox";
import {
  tempMovieData,
  tempWatchedData,
} from "./components/sample_data/sample";
import { SearchBar } from "./components/header/Search";
import { NumResults } from "./components/header/NumResults";
import { Box } from "./components/reusable/Box";
import { MovieDetails } from "./components/main/MovieDetails";
import { Loader } from "./components/reusable/Loader";

// ! api key
const apiKey = "31f65a86";
export default function App() {
  //! handle search query start
  let [searchQuery, setSearchQuery] = useState("leo");

  function handleSearchQuery(query) {
    setSearchQuery(query);
  }
  //! handle search query end /

  // ! List box area start
  const [movies, setMovies] = useState([]);
  // ! List box area end /

  // ! loader for application start
  let [isloading, setLoading] = useState(false);
  // ! loader for application

  // ! when failed api request
  let [error, setError] = useState("");
  // ! when failed api request

  // ! show movie details
  let [selectedId, setSelectedId] = useState(null);

  function handleSelectedId(id) {
    setSelectedId((currentId) => (currentId === id ? null : id));
  }

  function handleCloseSelectedId() {
    setSelectedId(null);
  }
  // ! show movie details

  // ! Watched box area start
  const [watched, setWatched] = useState([]);

  // todo : adding new movies
  function handleWatchedMovies(movie) {
    setWatched((movies) => [...movies, movie]);
  }

  // todo : removing movies
  function handleDeleteWatchedMovies(id) {
    setWatched((movies) => movies.filter((movie) => movie.imdbID !== id));
  }

  // ! Watched box area end

  // ! fetch requests

  useEffect(() => {
    let controller = new AbortController();
    async function handlefetchData() {
      try {
        setLoading(true);
        setError("");
        let res = await fetch(
          `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`,
          { signal: controller.signal }
        );
        if (!res.ok)
          throw new Error("something went wrong fetching with movies");
        let data = await res.json();

        if (data.Response === "False") {
          throw new Error("Movie Not Found");
        }
        setMovies(data.Search);
        setError("");
        //! after render we can read the value from movies,now get []
        // console.log(movies);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (searchQuery.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    handleCloseSelectedId();
    handlefetchData();

    // * abort incomplete fetch requests
    return () => controller.abort();
  }, [searchQuery]);

  return (
    <>
      <Header>
        <SearchBar
          onSearchQuery={handleSearchQuery}
          searchQuery={searchQuery}
        />
        <NumResults moviesLength={movies?.length} />
      </Header>

      <main className="main">
        {/* element prop example */}
        {/* <Box element={<MovieList movies={movies} />} /> */}

        <Box>
          {/* {isloading ? <Loader /> : <MovieList movies={movies} />}
           */}
          {isloading && <Loader />}
          {!isloading && !error && (
            <MovieList movies={movies} onSelectedId={handleSelectedId} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              oncloseSelectedTab={handleCloseSelectedId}
              selectedId={selectedId}
              apiKey={apiKey}
              onAddWatchList={handleWatchedMovies}
              moviesList={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                handleDeleteWatchedMovies={handleDeleteWatchedMovies}
              />
            </>
          )}
        </Box>
      </main>
    </>
  );
}

function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔</span>
      {message}
    </p>
  );
}

// 11.12
