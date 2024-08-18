import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import Error from '../components/Error';
import MoviesList from '../components/MoviesList';
import Slide from '../components/Slide';
import Spinner from '../components/Spinner';
import useTmdbApi from '../contexts/TmdbApiContext/useTmdbApi';
import fetchTrendingList from '../loaders/fetchTrendingList';
import AsideMoviesList from '../components/AsideMoviesList';
import fetchMoviesPlayingNow from '../loaders/fetchMoviesPlayingNow';

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

  const {
    isPending: isPlayingNowPending,
    isPlayingNowError,
    data: playingNowData,
  } = useQuery({
    queryKey: ['playingNow', apiKey],
    queryFn: fetchMoviesPlayingNow,
  });

  if (isPlayingNowPending) {
    return <Spinner />;
  }

  if (isPlayingNowError) {
    return null;
  }

  if (!playingNowData.results.length) {
    return null;
  }

  const moviesPlayingNow = playingNowData.results.slice(0, 9);

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <Error styles="py-20 px-5" message={error.message} />;
  }

  return (
    <>
      <Slide />

      <section className="grid grid-cols-1 gap-1 lg:grid-cols-[1fr,auto] items-start p-4">
        <MoviesList
          pages={data.pages}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetching={isFetching}
          isFetchingNextPage={isFetchingNextPage}
          filterMovies={false}
        />

        <AsideMoviesList movies={moviesPlayingNow} />
      </section>
    </>
  );
}

export default Home;
