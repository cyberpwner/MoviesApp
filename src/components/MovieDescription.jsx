import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import useTmdbApi from '../contexts/TmdbApiContext/useTmdbApi';
import useMovieDetails from '../hooks/useMovieDetails';
import Spinner from './Spinner';
import Error from './Error';

function MovieDescription({ id }) {
  const { apiKey } = useTmdbApi();
  const { isPending, isError, movieDetails, error } = useMovieDetails(
    apiKey,
    id
  );

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <Error styles="" message={error.message} />;
  }

  const {
    adult,
    genres,
    origin_country: originCountry,
    release_date: releaseDate,
    original_title: originalTitle,
    overview,
    runtime: duration,
    vote_average: rating,
    poster_path: posterPath,
  } = movieDetails;

  const genresNames = genres.map(({ name }) => name);
  const releaseYear = releaseDate.split('-')[0];

  return (
    <section className="w-4/6 grid grid-cols-[auto,1fr] gap-2 justify-around">
      <section className="">
        <img
          className="w-4/5 mx-auto rounded-md"
          src={`https://image.tmdb.org/t/p/w342/${posterPath}`}
          alt="movie poster"
        />
      </section>
      <section className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold text-white tracking-wide">
          {originalTitle}
        </h1>
        <div className="w-fit flex gap-4 items-center text-sm text-gray-300">
          <span className="flex items-center gap-1">
            <FaStar className="text-secondary-yellow" />
            {rating.toFixed(1)}
          </span>
          <span>{releaseYear}</span>
          <span>{duration} min</span>
        </div>

        <p className="text-dark-gray text-sm font-light tracking-wide text-justify">
          {overview}
        </p>

        <ul className="leading-8">
          <li>
            <span className="inline-block w-32 text-gray-300">Adult:</span>
            {`${adult ? 'Yes' : 'No'}`}
          </li>
          <li>
            <span className="inline-block w-32 text-gray-300">Country:</span>
            {originCountry.join(', ')}
          </li>
          <li>
            <span className="inline-block w-32 text-gray-300">Genre:</span>
            {genresNames.join(', ')}
          </li>
          <li>
            <span className="inline-block w-32 text-gray-300">Release:</span>
            {releaseYear}
          </li>
        </ul>
      </section>
    </section>
  );
}

MovieDescription.propTypes = {
  id: PropTypes.number.isRequired,
};

export default MovieDescription;
