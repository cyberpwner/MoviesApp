import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="grid grid-cols-1 place-items-center">
      <div>
        <h1 className="text-9xl font-bold text-center">404</h1>
        <p className="text-center">
          Page not found! Go back to the{' '}
          <Link
            to="/MoviesApp/"
            className="text-secondary-yellow underline underline-offset-2"
          >
            Home Page
          </Link>
        </p>
      </div>
    </section>
  );
}

export default NotFound;
