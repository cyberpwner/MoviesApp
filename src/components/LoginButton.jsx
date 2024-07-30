import { FaArrowRight } from 'react-icons/fa';
import useLogin from '../contexts/LoginContext/useLogin';
import LoginPortal from './LoginPortal';
import Modal from './Modal';

function LoginButton() {
  const { showLoginPage, setShowLoginPage } = useLogin();

  return (
    <>
      <button
        type="button"
        className="flex items-center gap-2 rounded-full bg-transparent border-2 border-white py-2 px-6 hover:bg-secondary-yellow hover:text-black hover:border-yellow-300 transition-all ease-in delay-75"
        onClick={() => {
          setShowLoginPage(true);
          document.body.classList.add('hide-scroll');
        }}
      >
        <span className="hidden md:block">Login</span>
        <FaArrowRight />
      </button>

      {showLoginPage && (
        <Modal>
          <LoginPortal />
        </Modal>
      )}
    </>
  );
}

export default LoginButton;
