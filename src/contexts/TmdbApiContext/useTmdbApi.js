import { useContext } from 'react';
import TmdbApiContext from './TmdbApiContext';

const useTmdbApi = () => {
  return useContext(TmdbApiContext);
};

export default useTmdbApi;
