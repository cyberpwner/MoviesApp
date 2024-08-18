import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useTmdbApi from '../contexts/TmdbApiContext/useTmdbApi';
import useMovieDetails from '../hooks/useMovieDetails';
import Spinner from './Spinner';

function AsideMovieCard({ movieId }) {
  const { apiKey } = useTmdbApi();
  const { isPending, isError, movieDetails } = useMovieDetails(apiKey, movieId);

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return null;
  }

  const {
    poster_path: posterPath,
    original_title: originalTitle,
    release_date: releaseDate,
    runtime: duration,
  } = movieDetails;

  const releaseYear = releaseDate.split('-')[0];

  return (
    <Link
      className="bg-secondary-blue grid grid-cols-[auto,1fr] text-white rounded-md hover:bg-secondary-yellow hover:text-secondary-blue transition-all ease-in hover-text-dark-blue"
      to={`/MoviesApp/movie/${movieId}`}
    >
      <div className="max-w-12">
        <img
          className="rounded-l-md max-w-full"
          src={`https://image.tmdb.org/t/p/w342/${posterPath}`}
          alt={`${originalTitle} poster`}
        />
      </div>

      <div className="flex flex-col justify-center px-4">
        <div className="flex gap-3 text-xs text-gray-400 transition-all">
          <span className="uppercase">Movie</span>
          <span>/</span>
          <span>{releaseYear}</span>
          <span>/</span>
          <span>{duration} min</span>
        </div>
        <h3 className="text-sm md:text-md capitalize">{originalTitle}</h3>
      </div>
    </Link>
  );
}

AsideMovieCard.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default AsideMovieCard;
