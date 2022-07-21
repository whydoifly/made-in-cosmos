import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';

import 'swiper/css';

const mySwiper = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
    >
      <SwiperSlide>
        <img src={img1} className="slide-1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} className="slide-2" />
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default mySwiper;