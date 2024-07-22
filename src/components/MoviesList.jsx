import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { FaRegPlayCircle } from 'react-icons/fa';
import MovieCard from './MovieCard';

function MoviesList({ moviesList }) {
  const { pathname } = useLocation();

  return (
    <>
      <div className="flex items-center gap-2 my-10 mx-8">
        <FaRegPlayCircle className="text-3xl text-secondary-yellow" />
        <h1 className="font-bold text-2xl uppercase">
          {pathname === '/MoviesApp/' ? 'Recommended' : 'Filter'}
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-3 w-fit my-10 mx-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {moviesList.map(({ id }) => (
          <MovieCard key={id} movieId={id} />
        ))}
      </div>
    </>
  );
}

MoviesList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  moviesList: PropTypes.arrayOf(PropTypes.object),
};

export default MoviesList;
