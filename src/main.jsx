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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      {/* <Route path="filter?keyword=:query" element={filter} /> */}
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
