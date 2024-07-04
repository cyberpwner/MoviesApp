import LoginButton from './LoginButton';
import Logo from './Logo';
import SearchBar from './SearchBar';

function Header() {
  return (
    <header className="header-shadow w-full absolute top-0 p-4 bg-transparent text-white z-10">
      <section className="flex justify-between items-center">
        <Logo />
        <SearchBar />
        <LoginButton />
      </section>
    </header>
  );
}

export default Header;
