import { useQuery } from '@tanstack/react-query';
import Error from '../components/Error';
import MoviesList from '../components/MoviesList';
import Spinner from '../components/Spinner';
import useTmdbApi from '../contexts/TmdbApiContext/useTmdbApi';
import fetchMoviesByQuery from '../loaders/fetchMoviesByQuery';

function SearchResults() {
  const { apiKey, searchQuery } = useTmdbApi();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['searchMovies', apiKey, searchQuery],
    queryFn: fetchMoviesByQuery,
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <Error styles="py-20 px-5" message={error.message} />;
  }

  const searchedMovies = data.results.filter(
    ({
      original_language: originLang,
      genre_ids: genreIds,
      poster_path: posterPath,
      backdrop_path: coverPath,
    }) => originLang === 'en' && genreIds.length > 0 && posterPath && coverPath
    // making sure it's a movie not some weird podcast or album etc
  );

  return (
    <section className="py-20 px-5">
      <MoviesList moviesList={searchedMovies} />
    </section>
  );
}

export default SearchResults;
