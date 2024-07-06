/* eslint-disable jsx-a11y/control-has-associated-label */
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  return (
    <form className="search-bar flex items-center rounded-full transition-all">
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
