import { useQuery } from '@tanstack/react-query';
import fetchMovieDetails from '../loaders/fetchMovieDetails';

const useMovieDetails = (movieId) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['movieDetails', movieId],
    queryFn: fetchMovieDetails,
  });

  if (isPending) {
    return { isPending, movieDetails: null, error: null };
  }

  if (isError) {
    return { isPending, movieDetails: null, error };
  }

  // if success
  return { isPending, movieDetails: data, error: null };
};

export default useMovieDetails;
