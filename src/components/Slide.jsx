import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useQuery } from '@tanstack/react-query';
import FeaturedMovie from './FeaturedMovie';
import useTmdbApi from '../contexts/TmdbApiContext/useTmdbApi';
import Spinner from './Spinner';
import fetchTrendingList from '../loaders/fetchTrendingList';
// import Error from './Error';

function Slide() {
  const { apiKey } = useTmdbApi();
  const { isPending, isError, data } = useQuery({
    queryKey: ['trendingMoviesList', apiKey, 1],
    queryFn: fetchTrendingList,
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return null;
    // return <Error styles="py-20 px-5" message={error.message} />;
  }

  const slicedFeaturedList = data.results
    .filter(({ media_type: mediaType }) => mediaType === 'movie')
    .slice(0, 12);

  return (
    <Splide
      className="w-full"
      options={{
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '0',
        autoplay: true,
        cover: true,
        lazyLoad: 'nearby',
      }}
    >
      {slicedFeaturedList.map(({ id }) => (
        <SplideSlide
          className="w-full cursor-move  min-h-96 h-3/5 max-h-screen"
          key={id}
        >
          <FeaturedMovie movieId={id} />
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default Slide;
