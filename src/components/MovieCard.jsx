import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
    <section className="flex flex-col gap-2 max-w-48">
      <div className="poster">
        <Link to={`movie/${movieId}`}>
          <img
            className="w-full rounded-lg"
            src={`https://image.tmdb.org/t/p/w154/${posterPath}`}
            alt={`${originalTitle} poster`}
          />
        </Link>
      </div>

      <div className="flex justify-between items-center text-xs text-gray-300">
        <span>{releaseYear}</span>
        <span>{duration} min</span>
      </div>

      <h4 className="text-sm font-bold">{originalTitle}</h4>
    </section>
  );
}

MovieCard.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default MovieCard;
