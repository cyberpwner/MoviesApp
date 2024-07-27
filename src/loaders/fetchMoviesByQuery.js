const fetchMoviesByQuery = async ({ pageParam = 0, queryKey }) => {
  const [, apiKey, searchQuery] = queryKey;

  const response = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(searchQuery)}&page=${pageParam + 1}&api_key=${apiKey}`
  );

  if (!response.ok) {
    throw new Error('An error occurred when trying to fetch movies by query.');
  }

  return response.json();
};

export default fetchMoviesByQuery;
