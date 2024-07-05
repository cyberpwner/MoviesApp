/* eslint-disable react/prop-types */

import { FaStar, FaPlayCircle, FaBookmark } from 'react-icons/fa';
import useMovieDetails from '../hooks/useMovieDetails';

function FeaturedDetails({ movieId }) {
  const { movieDetails } = useMovieDetails(movieId);

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
    <>
      <img
        src={`https://image.tmdb.org/t/p/original${coverPath}`}
        alt="Movie Cover"
        className="w-full h-screen"
      />

      <section className="absolute bottom-0 text-white p-4">
        <h1 className="text-4xl font-bold tracking-wide uppercase">
          {originalTitle}
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-300 tracking-wider">
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
        <p className="text-gray-200 w-1/2 text-justify">{overview}</p>

        <div className="flex items-center gap-4 font-semibold my-8">
          <button
            type="button"
            className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-950 px-5 py-3 rounded-full transition-all"
          >
            <FaPlayCircle />
            Watch Now
          </button>
          <button
            type="button"
            className="flex items-center gap-2 text-gray-200 px-5 py-3 rounded hover:text-yellow-500"
          >
            <FaBookmark />
            Bookmark
          </button>
        </div>
      </section>
    </>
  );
}

export default FeaturedDetails;
