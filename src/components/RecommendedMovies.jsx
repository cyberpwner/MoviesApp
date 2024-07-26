import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { FaRegPlayCircle } from 'react-icons/fa';
import fetchMovieRecommendations from '../loaders/fetchMovieRecommendations';
import Spinner from './Spinner';
import RecommendedMovieCard from './RecommendedMovieCard';
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

  const movies = data.results.slice(0, 9);

  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="flex items-center gap-2">
        <FaRegPlayCircle className="text-3xl text-secondary-yellow" />
        <h1 className="font-bold text-2xl uppercase">Recommended</h1>
      </div>

      <ul className="w-full min-w-96 grid grid-cols-1 gap-2">
        {movies.map(({ id }) => (
          <li key={id}>
            <RecommendedMovieCard movieId={id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

RecommendedMovies.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default RecommendedMovies;
