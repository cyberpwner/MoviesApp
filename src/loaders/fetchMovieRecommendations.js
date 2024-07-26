const fetchMovieRecommendations = async ({ queryKey }) => {
  const [, apiKey, movieId] = queryKey;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/recommendations?page=1&api_key=${apiKey}`
  );

  if (!response.ok) {
    throw new Error(
      'An error occured when trying to fetch movie recommmendations'
    );
  }

  return response.json();
};

export default fetchMovieRecommendations;
