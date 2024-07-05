import { useMemo } from 'react';
import PropTypes from 'prop-types';
import TmdbApiContext from './TmdbApiContext';
import useTmdbApi from './useTmdbApi';

function TmdbApiProvider({ children }) {
  const { apiKey, setApiKey } = useTmdbApi();

  const memoizedApiData = useMemo(() => {
    return { apiKey, setApiKey };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiKey]);

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
