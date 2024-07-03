import { Splide, SplideSlide } from '@splidejs/react-splide';
import Tuscany from '../assets/img/wallpaper_tuscany_sunset.jpg';
import Pic01 from '../assets/img/pic01.jpg';
import Pic02 from '../assets/img/pic02.jpg';
import Pic03 from '../assets/img/pic03.jpg';
import Pic04 from '../assets/img/pic04.jpg';

function Slide() {
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
      <SplideSlide className="w-full cursor-move">
        <img src={Tuscany} alt="" className="w-full h-screen" />
      </SplideSlide>
      <SplideSlide className="w-full cursor-move">
        <img src={Pic01} alt="" className="w-full h-screen" />
      </SplideSlide>
      <SplideSlide className="w-full cursor-move">
        <img src={Pic02} alt="" className="w-full h-screen" />
      </SplideSlide>
      <SplideSlide className="w-full cursor-move">
        <img src={Pic03} alt="" className="w-full h-screen" />
      </SplideSlide>
      <SplideSlide className="w-full cursor-move">
        <img src={Pic04} alt="" className="w-full h-screen" />
      </SplideSlide>
    </Splide>
  );
}

export default Slide;
