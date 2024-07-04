const fetchFeaturedList = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/movie/popular?api_key=f621196a0e79ce9094cf70e206a154b5&language=en-US&page=1'
  );

  if (!response.ok) {
    throw new Error(
      'An error occured while trying to fetch the featured list.'
    );
  }

  return response.json();
};

export default fetchFeaturedList;
