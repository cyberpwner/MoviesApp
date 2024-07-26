import classNames from 'classnames';
import PropTypes from 'prop-types';

function PaginationBar({ numberOfPages, currentPage, setCurrentPage }) {
  if (!numberOfPages) {
    return null;
  }

  const pages = [...Array(numberOfPages).keys()];
  return (
    <ul className="w-fit mx-auto flex gap-1 my-8">
      {pages.map((num) => (
        <button
          key={num}
          type="button"
          className={classNames({
            'bg-secondary-blue px-3 py-1.5 rounded-md text-gray-300 text-sm hover:bg-secondary-yellow hover:text-secondary-blue transition-all ease-in': true,
            'bg-secondary-yellow text-white cursor-text hover:text-white':
              num === currentPage,
          })}
          onClick={() => setCurrentPage(num)}
          disabled={num === currentPage}
        >
          <li>{num + 1}</li>
        </button>
      ))}
    </ul>
  );
}

PaginationBar.propTypes = {
  numberOfPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default PaginationBar;
