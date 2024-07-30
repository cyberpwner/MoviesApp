/* eslint-disable jsx-a11y/control-has-associated-label */
import { FaArrowRight, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import useLogin from '../contexts/LoginContext/useLogin';

function LoginPortal() {
  const { setShowLoginPage } = useLogin();
  const { pathname } = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className={classNames({
        'relative bg-custom-dark-blue p-4 rounded-xl w-96 text-white grid grid-cols-1 justify-start': true,
      })}
    >
      <button
        type="button"
        className="absolute right-4 top-5 text-gray-400 text-xs hover:text-gray-300 transition-all"
        onClick={() => {
          setShowLoginPage(false);
          document.body.classList.remove('hide-scroll');
        }}
      >
        <FaTimes className="" />
      </button>

      <form
        action=""
        className="p-4 grid grid-cols-1 gap-5"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl">Welcome back!</h1>

        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-gray-400 text-sm">
            Account
          </label>
          <input
            type="username"
            name="username"
            id="username"
            className="py-2.5 px-3.5 rounded-lg text-white text-sm placeholder:text-gray-400 outline-none transition-all focus:outline-offset-0 focus:outline-blue-900 bg-secondary-blue"
            placeholder="Username or email"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-gray-400 text-sm">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="py-2.5 px-3.5 rounded-lg text-white text-sm placeholder:text-gray-400 outline-none transition-all focus:outline-offset-0 focus:outline-blue-900 bg-secondary-blue"
            placeholder="Password"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-secondary-yellow text-primary-blue font-medium px-4 py-2.5 rounded-md hover:bg-yellow-400 hover:text-secondary-blue transition-all"
          >
            Login
          </button>
        </div>

        <div className="flex flex-col gap-1 text-secondary-yellow text-sm">
          <Link
            to={`${pathname}`}
            className="flex gap-1 items-center hover:text-secondary-yellow/70 transition-all"
          >
            Forgot your password
            <FaArrowRight className="font-extralight" />
          </Link>
          <Link
            to={`${pathname}`}
            className="flex gap-1 items-center hover:text-secondary-yellow/70 transition-all"
          >
            Sign up for a new account
            <FaArrowRight />
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPortal;
