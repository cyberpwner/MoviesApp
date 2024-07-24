import { useQuery } from '@tanstack/react-query';
import Error from '../components/Error';
import MoviesList from '../components/MoviesList';
import Slide from '../components/Slide';
import Spinner from '../components/Spinner';
import useTmdbApi from '../contexts/TmdbApiContext/useTmdbApi';
import fetchTrendingList from '../loaders/fetchTrendingList';

function Home() {
  const { apiKey } = useTmdbApi();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['trendingMoviesList', apiKey],
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

      <MoviesList moviesList={data.results} />
    </section>
  );
}

export default Home;