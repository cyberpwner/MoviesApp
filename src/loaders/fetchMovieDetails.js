const fetchMovieDetails = async ({ queryKey }) => {
  const [, movieId] = queryKey;

  if (!movieId) {
    throw new Error('movie id is undefined/null');
  }

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=f621196a0e79ce9094cf70e206a154b5`
  );

  if (!response.ok) {
    throw new Error('Error occured while trying to fetch movie details.');
  }

  return response.json();
};

export default fetchMovieDetails;
