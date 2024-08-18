/* eslint-disable react/prop-types */

import { FaStar, FaPlayCircle, FaBookmark } from 'react-icons/fa';
// import Link from 'react-router-dom';
import { Link } from 'react-router-dom';
import useMovieDetails from '../hooks/useMovieDetails';
import useTmdbApi from '../contexts/TmdbApiContext/useTmdbApi';

function FeaturedDetails({ movieId }) {
  const { apiKey } = useTmdbApi();
  const { movieDetails } = useMovieDetails(apiKey, movieId);

  if (!movieDetails) {
    return null;
  }

  const {
    backdrop_path: coverPath,
    original_title: originalTitle,
    overview,
    release_date: releaseDate,
    vote_average: voteAverage,
    runtime: duration,
    genres,
  } = movieDetails;

  const year = releaseDate.split('-')[0];

  return (
    <div className="my-slide">
      <img
        src={`https://image.tmdb.org/t/p/original${coverPath}`}
        alt="Movie Cover"
        className="w-full min-h-96"
      />

      <section className="absolute grid grid-cols-1 gap-2 z-10 bottom-0 text-white p-4">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-wide uppercase">
          {originalTitle}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-200 tracking-wider">
          <span className="flex gap-1 items-center">
            <FaStar />
            {voteAverage.toFixed(2)}
          </span>
          <span>{year}</span>
          <span>{`${duration} min`}</span>

          {genres.map(({ name }) => (
            <span key={name}>{name}</span>
          ))}
        </div>
        <p className="text-dark-gray w-1/2 text-justify hidden lg:block">
          {overview}
        </p>

        <div className="flex items-center gap-4 my-8">
          <Link to={`/MoviesApp/movie/${movieId}`}>
            <button
              type="button"
              className="flex items-center gap-2 font-medium bg-secondary-yellow hover:bg-yellow-400 text-primary-blue px-5 py-3 rounded-full transition-all"
            >
              <FaPlayCircle />
              Watch Now
            </button>
          </Link>
          <button
            type="button"
            className="flex items-center gap-2 text-gray-200 font-semibold px-5 py-3 rounded hover:text-secondary-yellow transition-all"
          >
            <FaBookmark />
            Bookmark
          </button>
        </div>
      </section>
    </div>
  );
}

export default FeaturedDetails;
