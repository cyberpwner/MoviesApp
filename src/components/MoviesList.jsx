import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { FaRegPlayCircle } from 'react-icons/fa';
import MovieCard from './MovieCard';
import PaginationBar from './PaginationBar';

function MoviesList({
  moviesList,
  currentPage,
  setCurrentPage,
  numberOfPages,
}) {
  const { pathname } = useLocation();

  return (
    <>
      <div className="flex items-center gap-4 my-10 mx-8">
        <div className="flex items-center gap-2">
          <FaRegPlayCircle className="text-3xl text-secondary-yellow" />
          <h1 className="font-bold text-2xl uppercase">
            {pathname === '/MoviesApp/' ? 'Trending' : 'Filter'}
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 w-fit my-10 mx-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {moviesList.map(({ id }) => (
          <MovieCard key={id} movieId={id} />
        ))}
      </div>
      <div>
        <PaginationBar
          numberOfPages={numberOfPages > 10 ? 10 : numberOfPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}

MoviesList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  moviesList: PropTypes.arrayOf(PropTypes.object),
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  numberOfPages: PropTypes.number.isRequired,
};

export default MoviesList;
