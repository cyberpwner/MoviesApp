import { FaArrowRight } from 'react-icons/fa';

function LoginButton() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-full bg-transparent border-2 border-white py-2 px-6 hover:bg-secondary-yellow hover:text-black hover:border-yellow-300 transition-all ease-in delay-75"
    >
      Login
      <FaArrowRight />
    </button>
  );
}

export default LoginButton;
