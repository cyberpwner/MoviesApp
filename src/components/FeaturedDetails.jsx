/* eslint-disable react/prop-types */

import { FaStar, FaPlayCircle, FaBookmark } from 'react-icons/fa';

function LandingMovieDetails({
  title,
  rating,
  year,
  duration,
  genres,
  overview,
}) {
  return (
    <section className="absolute bottom-0 text-white p-4">
      <h1 className="text-4xl font-bold tracking-wide uppercase">{title}</h1>
      <div className="flex items-center gap-4 text-sm text-gray-300 tracking-wider">
        <span className="flex gap-1 items-center">
          <FaStar />
          {rating}
        </span>
        <span>{year}</span>
        <span>{`${duration} min`}</span>

        {genres.map(({ name }) => (
          <span key={name}>{name}</span>
        ))}
      </div>
      <p className="text-gray-400 w-1/2 text-justify">{overview}</p>

      <div className="flex items-center gap-4 font-semibold my-8">
        <button
          type="button"
          className="flex items-center gap-2 bg-yellow-400 text-blue-950 px-5 py-3 rounded-full border-2 border-transparent hover:border-blue-950 transition-all"
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
  );
}

export default LandingMovieDetails;
