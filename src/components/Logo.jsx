import { Link } from 'react-router-dom';
import LogoImg from '../assets/img/logo.png';

function Logo() {
  return (
    <Link to="/">
      <img src={LogoImg} alt="Logo" className="w-32" />
    </Link>
  );
}

export default Logo;
