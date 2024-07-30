import { createContext } from 'react';

const LoginContext = createContext({
  showLoginPage: false,
  setShowLoginPage: () => {},
});

export default LoginContext;
