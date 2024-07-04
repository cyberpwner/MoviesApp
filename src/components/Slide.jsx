import { Splide, SplideSlide } from '@splidejs/react-splide';

import Pic04 from '../assets/img/pic04.jpg';
import FeaturedDetails from './FeaturedDetails';
import useFeaturedList from '../hooks/useFeaturedList';

function Slide() {
  const { isPending, featuredList, error } = useFeaturedList();

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
        rewind: true,
        gap: '0',
      }}
    >
      {slicedFeaturedList.map(({ id }) => (
        <SplideSlide className="w-full cursor-move" key={id}>
          <img src={Pic04} alt="" className="w-full h-screen" />
          <FeaturedDetails movieId={id} />
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default Slide;
