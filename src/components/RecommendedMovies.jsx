import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import fetchMovieRecommendations from '../loaders/fetchMovieRecommendations';
import Spinner from './Spinner';
import AsideMovieCard from './AsideMovieCard';
import useTmdbApi from '../contexts/TmdbApiContext/useTmdbApi';

function RecommendedMovies({ movieId }) {
  const { apiKey } = useTmdbApi();
  const { isPending, isError, data } = useQuery({
    queryKey: ['movieRecommendations', apiKey, movieId],
    queryFn: fetchMovieRecommendations,
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return null;
  }

  if (!data.results.length) {
    return null;
  }

  const movies = data.results.slice(0, 9);

  return (
    <>
      {movies.map(({ id }) => (
        <li key={id}>
          <AsideMovieCard movieId={id} />
        </li>
      ))}
    </>
  );
}

RecommendedMovies.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default RecommendedMovies;
