/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import classNames from 'classnames';
import LoginButton from './LoginButton';
import Logo from './Logo';
import SearchBar from './SearchBar';

function Header() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <header className="header-shadow w-full absolute top-0 p-4 bg-transparent text-white z-10">
      <section className="flex justify-between items-center">
        <Logo />

        <button
          type="button"
          className="text-xl hover:text-secondary-yellow transition-all"
          onClick={() => setShowSearchBar((prev) => !prev)}
        >
          <FaSearch
            className={classNames({ 'text-secondary-yellow': showSearchBar })}
          />
        </button>
        {showSearchBar && <SearchBar setShowSearchBar={setShowSearchBar} />}

        <LoginButton />
      </section>
    </header>
  );
}

export default Header;
