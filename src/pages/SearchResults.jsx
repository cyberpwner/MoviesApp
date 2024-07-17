import MoviesList from '../components/MoviesList';
import useTmdbApi from '../contexts/TmdbApiContext/useTmdbApi';

function SearchResults() {
  const { apiKey, searchQuery } = useTmdbApi();

  return (
    <section className="py-20 px-5">
      <MoviesList apiKey={apiKey} searchQuery={searchQuery} />
    </section>
  );
}

export default SearchResults;
