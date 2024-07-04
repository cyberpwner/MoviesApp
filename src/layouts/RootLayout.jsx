import { Outlet } from 'react-router-dom';

// eslint-disable-next-line import/no-unresolved
import '@splidejs/react-splide/css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slide from '../components/Slide';

function RootLayout() {
  return (
    <>
      <Header />
      <Slide />

      <Outlet />

      <Footer />
    </>
  );
}

export default RootLayout;
