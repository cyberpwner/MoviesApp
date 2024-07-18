const fetchMovieTrailerKey = async ({ queryKey }) => {
  const [, apiKey, id] = queryKey;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${apiKey}`
  );

  if (!response.ok) {
    throw new Error(`An error occured when trying to fetch movie trailer key.`);
  }

  return response.json();
};

export default fetchMovieTrailerKey;
