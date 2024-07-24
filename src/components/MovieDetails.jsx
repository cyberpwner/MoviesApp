import { useParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import Video from './Video';
import Spinner from './Spinner';
import useTmdbApi from '../contexts/TmdbApiContext/useTmdbApi';
import fetchMovieTrailerKey from '../loaders/fetchMovieTrailerKey';
import Error from './Error';
import MovieDescription from './MovieDescription';

function MovieDetails() {
  const { apiKey } = useTmdbApi();
  const { id } = useParams();
  const { isPending, isError, data } = useQuery({
    queryKey: ['movieTrailerKey', apiKey, id],
    queryFn: fetchMovieTrailerKey,
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    // return null;

    return (
      <Error
        styles="py-20 px-5"
        message="An error occured when trying to fetch movie trailer"
      />
    );
  }

  const trailerKey = data.results.find(({ type }) => type === 'Trailer')?.key;

  const url = `${trailerKey ? `https://youtube.com/embed/${trailerKey}?autoplay=0&controls=0` : ''}`;

  return (
    <section className="my-20 text-white grid grid-cols-1 gap-10">
      {url && <Video url={url} />}
      <MovieDescription id={Number(id)} />
    </section>
  );
}

export default MovieDetails;
