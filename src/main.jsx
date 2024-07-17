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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error />}>
      <Route index element={<Home />} errorElement={<Error />} />

      <Route
        path="filter/:query"
        element={<SearchResults />}
        errorElement={<Error />}
      />

      <Route
        path="movie/:id"
        errorElement={<Error />}
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
