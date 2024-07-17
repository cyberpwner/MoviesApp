import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaCirclePlay } from 'react-icons/fa6';
import useTmdbApi from '../contexts/TmdbApiContext/useTmdbApi';
import useMovieDetails from '../hooks/useMovieDetails';

function MovieCard({ movieId }) {
  const { apiKey } = useTmdbApi();
  const { isPending, error, movieDetails } = useMovieDetails(apiKey, movieId);

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const {
    poster_path: posterPath,
    original_title: originalTitle,
    release_date: releaseDate,
    runtime: duration,
  } = movieDetails;

  const releaseYear = releaseDate.split('-')[0];

  return (
    <section className="flex flex-col gap-2 max-w-48 hover:text-secondary-yellow transition-all">
      <div className="poster relative">
        <Link to={`/movie/${movieId}`}>
          <img
            className="w-full rounded-lg"
            src={`https://image.tmdb.org/t/p/w154/${posterPath}`}
            alt={`${originalTitle} poster`}
          />

          <div className="absolute top-0 left-0 h-full w-full grid items-center justify-center text-primary-blue">
            <FaCirclePlay className="fa-circle-play text-5xl z-10 opacity-0 transition-all delay-100 ease-in-out" />
          </div>
        </Link>
      </div>

      <div className="flex justify-between items-center text-xs text-gray-300">
        <span>{releaseYear}</span>
        <span>{duration} min</span>
      </div>

      <Link
        to={`/movie/${movieId}`}
        className="text-sm hover:text-secondary-yellow transition-all ease-in"
      >
        {originalTitle}
      </Link>
    </section>
  );
}

MovieCard.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default MovieCard;
