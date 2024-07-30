import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import LoginContext from './LoginContext';

function LoginProvider({ children }) {
  const [showLoginPage, setShowLoginPage] = useState(false);

  const memoizedState = useMemo(() => {
    return {
      showLoginPage,
      setShowLoginPage,
    };
  }, [showLoginPage]);

  return (
    <LoginContext.Provider value={memoizedState}>
      {children}
    </LoginContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginProvider;
