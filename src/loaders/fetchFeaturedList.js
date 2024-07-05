const fetchFeaturedList = async ({ queryKey }) => {
  const [, apiKey] = queryKey;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  );

  if (!response.ok) {
    throw new Error(
      'An error occured while trying to fetch the featured list.'
    );
  }

  return response.json();
};

export default fetchFeaturedList;
