const fetchMoviesByQuery = async ({ queryKey }) => {
  const [, apiKey, searchQuery, currentPage] = queryKey;

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchQuery)}&page=${currentPage + 1}&api_key=${apiKey}&language=en-US`
  );

  if (!response.ok) {
    throw new Error('An error occurred when trying to fetch movies by query.');
  }

  return response.json();
};

export default fetchMoviesByQuery;
