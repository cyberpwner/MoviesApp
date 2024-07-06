import { Splide, SplideSlide } from '@splidejs/react-splide';
import FeaturedMovie from './FeaturedMovie';
import useFeaturedList from '../hooks/useFeaturedList';
import useTmdbApi from '../contexts/TmdbApiContext/useTmdbApi';

function Slide() {
  const { apiKey } = useTmdbApi();
  const { isPending, featuredList, error } = useFeaturedList(apiKey);

  if (error || isPending) {
    return null;
  }

  const slicedFeaturedList = featuredList.slice(0, 10);

  return (
    <Splide
      className="w-full"
      options={{
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '0',
        // autoplay: true,
        cover: true,
        lazyLoad: 'nearby',
      }}
    >
      {slicedFeaturedList.map(({ id }) => (
        <SplideSlide className="w-full cursor-move" key={id}>
          <FeaturedMovie movieId={id} />
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default Slide;
