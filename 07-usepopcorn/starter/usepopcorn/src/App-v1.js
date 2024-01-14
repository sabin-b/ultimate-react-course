import { useState } from "react";
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

export default function App() {
  //! handle search query start
  let [searchQuery, setSearchQuery] = useState("");

  function handleSearchQuery(query) {
    setSearchQuery(query);
  }
  //! handle search query end /

  // ! List box area start
  const [movies, setMovies] = useState(tempMovieData);
  // ! List box area end /

  // ! Watched box area start
  const [watched, setWatched] = useState(tempWatchedData);
  // ! Watched box area end

  return (
    <>
      <Header>
        <SearchBar
          onSearchQuery={handleSearchQuery}
          searchQuery={searchQuery}
        />
        <NumResults moviesLength={movies.length} />
      </Header>

      <main className="main">
        {/* element prop example */}
        {/* <Box element={<MovieList movies={movies} />} /> */}

        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </Box>
      </main>
    </>
  );
}
