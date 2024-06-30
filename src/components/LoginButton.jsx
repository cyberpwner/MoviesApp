import { FaArrowRight } from 'react-icons/fa';

function LoginButton() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-full bg-transparent border-2 border-white py-1.5 px-6 hover:bg-yellow-500 hover:text-black hover:border-yellow-300 transition-all"
    >
      Login
      <FaArrowRight />
    </button>
  );
}

export default LoginButton;
