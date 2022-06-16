import './top.css';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination, Parallax } from 'swiper';

import { motion } from 'framer-motion';

function Top() {
    const transiton = { duration: 0.8, type: 'spring', delay: 0.2 };
    const transition = { duration: 0.8, type: 'spring', delay: 0.3 };

    return (
        <>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                speed={500}
                direction={'horizontal'}
                effect={'fade'}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                parallax={true}
                navigation={true}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[Autoplay, Navigation, Pagination, EffectFade, Parallax]}
                className="mySwiper"
                id="Top"
            >
                <SwiperSlide>
                    <div className="top__wrapper-2">
                        <div className="top__blur"></div>
                        <motion.h1
                            data-swiper-parallax="300"
                            initial={{ left: '5%' }}
                            whileInView={{ left: '0%' }}
                            transition={transiton}
                        >
                            ENJOY YOUR DINNER
                        </motion.h1>
                        {/* <motion.h1  >ENJOY YOUR DINNER</motion.h1> */}
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="top__wrapper-1">
                        <div className="top__blur"></div>
                        <motion.h1
                            data-swiper-parallax="300"
                            initial={{ left: '15%' }}
                            whileInView={{ left: '0%' }}
                            transition={transiton}
                        >
                            EXQUITITE ATMOSPHERE
                        </motion.h1>
                        {/* <h1 data-swiper-parallax="300">EXQUITITE ATMOSPHERE</h1> */}
                    </div>
                </SwiperSlide>

                <div className="top__content ">
                    <motion.p initial={{ top: '50px' }} whileInView={{ top: '10px' }} transition={transiton}>
                        Enjoy the real fresh food from our chef
                    </motion.p>
                    <motion.div
                        className="top__content-button"
                        initial={{ top: '60px' }}
                        whileInView={{ top: '0' }}
                        transition={transition}
                        animate="visible"
                    >
                        <button>BOOK NOW</button>
                        <button>VIEW MENU</button>
                    </motion.div>
                </div>
            </Swiper>
        </>
    );
}

export default Top;
