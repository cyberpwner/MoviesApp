import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TmdbApiContext from './TmdbApiContext';

function TmdbApiProvider({ children }) {
  const [apiKey, setApiKey] = useState('f621196a0e79ce9094cf70e206a154b5');
  const [searchQuery, setSearchQuery] = useState('');

  const memoizedApiData = useMemo(() => {
    return { apiKey, setApiKey, searchQuery, setSearchQuery };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiKey, searchQuery]);

  return (
    <TmdbApiContext.Provider value={memoizedApiData}>
      {children}
    </TmdbApiContext.Provider>
  );
}

TmdbApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TmdbApiProvider;
