import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

function MoviesList({ moviesList }) {
  return (
    <div className="grid grid-cols-2 gap-3 w-fit my-10 mx-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {moviesList.map(({ id }) => (
        <MovieCard key={id} movieId={id} />
      ))}
    </div>
  );
}

MoviesList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  moviesList: PropTypes.arrayOf(PropTypes.object),
};

export default MoviesList;
