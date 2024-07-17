import { Outlet } from 'react-router-dom';

// eslint-disable-next-line import/no-unresolved
import '@splidejs/react-splide/css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function RootLayout() {
  return (
    <>
      <Header />

      <main className="text-white grid grid-cols-1 min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default RootLayout;
