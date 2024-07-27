import { useInfiniteQuery } from '@tanstack/react-query';
import Error from '../components/Error';
import MoviesList from '../components/MoviesList';
import Slide from '../components/Slide';
import Spinner from '../components/Spinner';
import useTmdbApi from '../contexts/TmdbApiContext/useTmdbApi';
import fetchTrendingList from '../loaders/fetchTrendingList';

function Home() {
  const { apiKey } = useTmdbApi();
  const {
    isPending,
    isError,
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['trendingMoviesList', apiKey],
    queryFn: fetchTrendingList,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
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
        pages={data.pages}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetching={isFetching}
        isFetchingNextPage={isFetchingNextPage}
        filterMovies={false}
      />
    </section>
  );
}

export default Home;
