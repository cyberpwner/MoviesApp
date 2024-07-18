import Error from '../components/Error';
import MoviesList from '../components/MoviesList';
import Slide from '../components/Slide';
import Spinner from '../components/Spinner';
import useTmdbApi from '../contexts/TmdbApiContext/useTmdbApi';
import useFeaturedList from '../hooks/useFeaturedList';

function Home() {
  const { apiKey } = useTmdbApi();
  const { isPending, isError, featuredList, error } = useFeaturedList(apiKey);

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <Error styles="py-20 px-5" message={error.message} />;
  }

  return (
    <section className="">
      <Slide />
      <MoviesList moviesList={featuredList} />
    </section>
  );
}

export default Home;
