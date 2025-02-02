/* eslint-disable jsx-a11y/control-has-associated-label */
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useTmdbApi from '../contexts/TmdbApiContext/useTmdbApi';

function SearchBar({ setShowSearchBar }) {
  const { setSearchQuery } = useTmdbApi();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // get the search query
    const formData = new FormData(event.target);
    const query = formData.get('search');

    if (!query.trim()) {
      return;
    }

    // send the query to state
    setSearchQuery(query);
    navigate(`filter/${encodeURIComponent(query)}`);

    // reset and hide the form
    event.target.reset();
    setShowSearchBar(false);
  };

  return (
    <div className="absolute left-0 -m-4 top-20 w-full">
      <form
        className="w-2/3 sm:w-1/3 mx-auto search-bar flex items-center rounded-full transition-all"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full mx-auto py-3 px-5 rounded-full outline-none text-center bg-black/30  text-secondary-yellow placeholder:text-secondary-yellow/70 text-xs tracking-wider transition-all"
          type="search"
          name="search"
          id="search"
          placeholder="Search movies..."
        />

        <button type="submit" className="flex items-center">
          <FaSearch className="text-secondary-yellow -m-7 font-light cursor-pointer" />
        </button>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  setShowSearchBar: PropTypes.func.isRequired,
};

export default SearchBar;
