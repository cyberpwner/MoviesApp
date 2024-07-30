import { useContext } from 'react';
import LoginContext from './LoginContext';

const useLogin = () => {
  return useContext(LoginContext);
};

export default useLogin;
