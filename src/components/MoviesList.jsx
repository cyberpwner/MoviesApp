/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { FaRegPlayCircle } from 'react-icons/fa';
import { Fragment } from 'react';
import MovieCard from './MovieCard';

function MoviesList({
  pages,
  fetchNextPage,
  hasNextPage,
  isFetching,
  isFetchingNextPage,
  filterMovies = false,
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

      <div className="grid grid-cols-3 gap-3 w-fit my-10 mx-8 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
        {pages.map((page) => (
          <Fragment key={page.page}>
            {!filterMovies
              ? page.results.map(({ id }) => (
                  <MovieCard key={id} movieId={id} />
                ))
              : page.results
                  .filter(
                    (movie) =>
                      movie.media_type === 'movie' &&
                      movie.genre_ids.length > 0 &&
                      movie.poster_path &&
                      movie.backdrop_path
                  )
                  .map(({ id }) => <MovieCard key={id} movieId={id} />)}
          </Fragment>
        ))}
      </div>

      <div className="w-full">
        <button
          type="button"
          onClick={() => !isFetching && fetchNextPage()}
          disabled={isFetchingNextPage || !hasNextPage}
          className="block bg-blue-900 px-8 py-3.5 rounded-full hover:bg-secondary-yellow hover:text-secondary-blue transition-all cursor-pointer uppercase mx-auto mb-8 disabled:bg-secondary-blue/70 disabled:text-gray-300"
        >
          {isFetchingNextPage
            ? 'Loading...'
            : hasNextPage
              ? 'Load more'
              : 'Nothing more to load'}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </>
  );
}

MoviesList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  pages: PropTypes.arrayOf(PropTypes.object),
  fetchNextPage: PropTypes.func.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isFetchingNextPage: PropTypes.bool.isRequired,
  filterMovies: PropTypes.bool.isRequired,
};

export default MoviesList;
