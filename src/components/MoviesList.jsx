import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import fetchMoviesByQuery from '../loaders/fetchMoviesByQuery';
import MovieCard from './MovieCard';

function MoviesList({ searchQuery = 'training', apiKey }) {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['searchMovies', apiKey, searchQuery],
    queryFn: fetchMoviesByQuery,
  });

  if (isPending) {
    return <h1 className="text-3xl font-semibold">Loading...</h1>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  const movies = data.results.filter(
    ({
      original_language: originLang,
      genre_ids: genreIds,
      poster_path: posterPath,
      backdrop_path: coverPath,
    }) => originLang === 'en' && genreIds.length > 0 && posterPath && coverPath
  );

  return (
    <div className="grid grid-cols-2 gap-3 w-fit sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {movies.map(({ id }) => (
        <MovieCard key={id} movieId={id} />
      ))}
    </div>
  );
}

MoviesList.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
};

export default MoviesList;
