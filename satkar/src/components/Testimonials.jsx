import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import styles from './Testimonials.module.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Testimonials() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles["myswiper-slide"]}>
          <img src="https://www.trustindex.io/wp-content/uploads/2021/02/review2.png" />
        </SwiperSlide>
        <SwiperSlide className={styles["myswiper-slide"]}>
          <img src="https://www.trustindex.io/wp-content/uploads/2021/02/review2.png" />
        </SwiperSlide>
        <SwiperSlide className={styles["myswiper-slide"]}>
          <img src="https://www.trustindex.io/wp-content/uploads/2021/02/review2.png" />
        </SwiperSlide>
        <SwiperSlide className={styles["myswiper-slide"]}>
          <img src="https://www.trustindex.io/wp-content/uploads/2021/02/review2.png" />
        </SwiperSlide>
        <SwiperSlide className={styles["myswiper-slide"]}>
          <img src="https://www.trustindex.io/wp-content/uploads/2021/02/review2.png" />
        </SwiperSlide>
        <SwiperSlide className={styles["myswiper-slide"]}>
          <img src="https://www.trustindex.io/wp-content/uploads/2021/02/review2.png" />
        </SwiperSlide>
        <SwiperSlide className={styles["myswiper-slide"]}>
          <img src="https://www.trustindex.io/wp-content/uploads/2021/02/review2.png" />
        </SwiperSlide>
        <SwiperSlide className={styles["myswiper-slide"]}>
          <img src="https://www.trustindex.io/wp-content/uploads/2021/02/review2.png" />
        </SwiperSlide>
        <SwiperSlide className={styles["myswiper-slide"]}>
          <img src="https://www.trustindex.io/wp-content/uploads/2021/02/review2.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
