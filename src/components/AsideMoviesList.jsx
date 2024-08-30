import { FaRegPlayCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import AsideMovieCard from './AsideMovieCard';

function AsideMoviesList({ movies }) {
  const { pathname } = useLocation();
  return (
    <div
      className={classNames({
        'grid grid-cols-1 gap-5 p-3': true,
        'gap-9 my-8': pathname === '/MoviesApp/',
      })}
    >
      <div className="flex items-center gap-2">
        <FaRegPlayCircle className="text-3xl text-secondary-yellow" />
        <h1 className="font-bold text-2xl uppercase">
          {pathname === '/MoviesApp/' ? 'Now in theatres' : 'Recommended'}
        </h1>
      </div>

      <ul className="w-full min-w-80 grid grid-cols-1 gap-2">
        {movies.map(({ id }) => (
          <li key={id}>
            <AsideMovieCard movieId={Number(id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

AsideMoviesList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  movies: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default AsideMoviesList;
