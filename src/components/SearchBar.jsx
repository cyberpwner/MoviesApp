/* eslint-disable jsx-a11y/control-has-associated-label */
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useTmdbApi from '../contexts/TmdbApiContext/useTmdbApi';

function SearchBar() {
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
    // reset the form
    event.target.reset();
  };

  return (
    <form
      className="search-bar flex items-center rounded-full transition-all"
      onSubmit={handleSubmit}
    >
      <input
        className="w-full py-2.5 px-5 rounded-full outline-none text-center bg-black/50  text-secondary-yellow placeholder:text-secondary-yellow text-xs tracking-wider transition-all"
        type="search"
        name="search"
        id="search"
        placeholder="Search movies..."
      />

      <button type="submit" className="flex items-center">
        <FaSearch className="text-secondary-yellow -m-7 font-light cursor-pointer" />
      </button>
    </form>
  );
}

export default SearchBar;
