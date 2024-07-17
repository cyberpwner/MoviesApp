import { createContext } from 'react';

const TmdbApiContext = createContext({
  apiKey: 'f621196a0e79ce9094cf70e206a154b5',
  setApiKey: () => {},
  searchQuery: '',
  setSearchQuery: () => {},
});

export default TmdbApiContext;
