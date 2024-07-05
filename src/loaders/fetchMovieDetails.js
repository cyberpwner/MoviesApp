const fetchMovieDetails = async ({ queryKey }) => {
  const [, apiKey, movieId] = queryKey;

  if (!movieId) {
    throw new Error('movie id is undefined/null');
  }

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
  );

  if (!response.ok) {
    throw new Error('Error occured while trying to fetch movie details.');
  }

  return response.json();
};

export default fetchMovieDetails;
