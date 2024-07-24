import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import TmdbApiProvider from './contexts/TmdbApiContext/TmdbApiProvider';
import SearchResults from './pages/SearchResults';
import Error from './components/Error';
import MovieDetails from './components/MovieDetails';
import NotFound from './pages/NotFound';

const ERROR_MESSAGE = 'An error has occured.';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/MoviesApp"
      element={<RootLayout />}
      errorElement={<Error styles="mt-20 mx-auto" message={ERROR_MESSAGE} />}
    >
      <Route
        index
        element={<Home />}
        errorElement={<Error styles="mt-20 mx-auto" message={ERROR_MESSAGE} />}
      />

      <Route
        path="filter/:query"
        element={<SearchResults />}
        errorElement={<Error styles="mt-20 mx-auto" message={ERROR_MESSAGE} />}
      />

      <Route
        path="movie/:id"
        errorElement={<Error styles="mt-20 mx-auto" message={ERROR_MESSAGE} />}
        element={<MovieDetails />}
      />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TmdbApiProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </TmdbApiProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
