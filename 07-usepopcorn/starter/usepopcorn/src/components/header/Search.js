export function SearchBar({ searchQuery, onSearchQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={searchQuery}
      onChange={(e) => onSearchQuery(e.target.value)}
    />
  );
}
