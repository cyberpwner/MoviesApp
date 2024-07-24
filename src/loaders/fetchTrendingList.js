const fetchTrendingList = async ({ queryKey }) => {
  const [, apiKey, currentPage] = queryKey;

  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=${currentPage + 1}`
  );

  if (!response.ok) {
    throw new Error(
      `An error occured when trying to fetch trending movies list`
    );
  }

  return response.json();
};

export default fetchTrendingList;
