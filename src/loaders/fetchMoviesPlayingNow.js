const fetchMoviesPlayingNow = async ({ queryKey }) => {
  const [, apiKey] = queryKey;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${apiKey}`
  );

  if (!response.ok) {
    throw new Error(
      'An error occurred when trying to fetch playing now movies'
    );
  }

  return response.json();
};

export default fetchMoviesPlayingNow;
