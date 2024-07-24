import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Error from '../components/Error';
import MoviesList from '../components/MoviesList';
import Spinner from '../components/Spinner';
import useTmdbApi from '../contexts/TmdbApiContext/useTmdbApi';
import fetchMoviesByQuery from '../loaders/fetchMoviesByQuery';

function SearchResults() {
  const [currentPage, setCurrentPage] = useState(0);
  const { apiKey } = useTmdbApi();
  const { query } = useParams();
  const searchQuery = decodeURIComponent(query);
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['searchMovies', apiKey, searchQuery, currentPage],
    queryFn: fetchMoviesByQuery,
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <Error styles="py-20 px-5" message={error.message} />;
  }

  const movies = data.results.filter(
    (movie) =>
      movie.media_type === 'movie' &&
      movie.genre_ids.length > 0 &&
      movie.poster_path &&
      movie.backdrop_path
  );

  return (
    <section className="py-20 px-5">
      <MoviesList
        numberOfPages={data.total_pages}
        moviesList={movies}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
}

export default SearchResults;
