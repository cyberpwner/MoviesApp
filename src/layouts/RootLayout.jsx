import { Outlet } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import LoginButton from '../components/LoginButton';
import Logo from '../components/Logo';

// eslint-disable-next-line import/no-unresolved
import '@splidejs/react-splide/css';
import Slide from '../components/Slide';
import LandingMovieDetails from '../components/FeaturedDetails';

function RootLayout() {
  return (
    <>
      <header className="header-shadow w-full absolute top-0 p-4 bg-transparent text-white z-10">
        <section className="flex justify-between items-center">
          <Logo />
          <SearchBar />
          <LoginButton />
        </section>
      </header>

      <section className="relative top-0 w-full">
        <Slide />
        <LandingMovieDetails
          title="Mad Max: Fury"
          rating="8.5"
          year="2015"
          duration={128}
          genres={[
            { name: 'Action' },
            { name: 'Thriller' },
            { name: 'Fiction' },
          ]}
          overview="Retired from active duty, and training recruits for the Impossible Mission Force, agent Ethan Hunt faces the toughest foe of his career: Owen Davian, an international broker of arms and information"
        />
      </section>

      <Outlet />

      <footer className="relative bottom-0 bg-blue-950 text-white p-4 text-center text-xs w-full">
        <p>
          Pbox is top of free streaming website, where to watch movies online
          free without registration required. With a big database and great
          features, we&apos;re confident Fbox is the best free movies online
          website in the space that you can&apos;t simply miss!
        </p>
        <p className="text-yellow-400">
          This site does not store any files on our server, we only linked to
          the media which is hosted on 3rd party services.
        </p>
      </footer>
    </>
  );
}

export default RootLayout;
