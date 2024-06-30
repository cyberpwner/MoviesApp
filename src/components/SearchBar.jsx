/* eslint-disable jsx-a11y/control-has-associated-label */
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  return (
    <form className="flex items-center w-96">
      <input
        className="w-full py-2.5 px-5 rounded-l-full rounded-r-full outline-none text-center bg-black/50 focus:bg-black/70 shadow-sm shadow-transparent focus:shadow-black hover:shadow-black hover:bg-black/70 text-yellow-400 placeholder:text-yellow-400 text-sm tracking-wider transition-all"
        type="search"
        name="search"
        id="search"
        placeholder="Search movies..."
      />

      <button type="submit" className="flex items-center">
        <FaSearch className="text-yellow-400 -m-7 font-light cursor-pointer" />
      </button>
    </form>
  );
}

export default SearchBar;
