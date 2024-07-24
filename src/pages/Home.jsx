import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Error from '../components/Error';
import MoviesList from '../components/MoviesList';
import Slide from '../components/Slide';
import Spinner from '../components/Spinner';
import useTmdbApi from '../contexts/TmdbApiContext/useTmdbApi';
import fetchTrendingList from '../loaders/fetchTrendingList';

function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const { apiKey } = useTmdbApi();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['trendingMoviesList', apiKey, currentPage],
    queryFn: fetchTrendingList,
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <Error styles="py-20 px-5" message={error.message} />;
  }

  return (
    <section className="">
      <Slide />

      <MoviesList
        numberOfPages={data.total_pages}
        moviesList={data.results}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
}

export default Home;
