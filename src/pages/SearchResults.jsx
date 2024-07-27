import { useInfiniteQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Error from '../components/Error';
import MoviesList from '../components/MoviesList';
import Spinner from '../components/Spinner';
import useTmdbApi from '../contexts/TmdbApiContext/useTmdbApi';
import fetchMoviesByQuery from '../loaders/fetchMoviesByQuery';

function SearchResults() {
  const { apiKey } = useTmdbApi();
  const { query } = useParams();
  const searchQuery = decodeURIComponent(query);
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
    queryKey: ['searchMovies', apiKey, searchQuery],
    queryFn: fetchMoviesByQuery,
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
    <section className="py-20 px-5">
      <MoviesList
        pages={data.pages}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetching={isFetching}
        isFetchingNextPage={isFetchingNextPage}
        filterMovies
      />
    </section>
  );
}

export default SearchResults;
