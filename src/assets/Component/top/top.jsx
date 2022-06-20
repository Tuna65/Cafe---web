import './top.css';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';

function Top() {
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
                    delay: 500000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                }}
                modules={[Autoplay, Navigation, Pagination, EffectFade]}
                className="mySwiper"
                id="Top"
            >
                <SwiperSlide>
                    {({ isActive }) => (
                        <>
                            <div className="top__wrapper-1">
                                <div className="top__blur"></div>
                            </div>
                            <div className={isActive ? 'activee top__content' : 'top__content'}>
                                <div className="top__title">
                                    <h1>ENJOY YOUR DINNER</h1>
                                </div>
                                <p>Enjoy the real fresh food from our chef</p>
                                <div className="top__content-button">
                                    <button>BOOK NOW</button>
                                    <button>VIEW MENU</button>
                                </div>
                            </div>
                        </>
                    )}
                </SwiperSlide>

                <SwiperSlide>
                    {({ isActive }) => (
                        <>
                            <div className="top__wrapper-1">
                                <div className="top__blur"></div>
                            </div>
                            <div className={isActive ? 'activee top__content' : 'top__content'}>
                                <div className="top__title">
                                    <h1>EXQUITITE ATMOSPHERE</h1>
                                </div>
                                <p>Enjoy the real fresh food from our chef</p>
                                <div className="top__content-button">
                                    <button>BOOK NOW</button>
                                    <button>VIEW MENU</button>
                                </div>
                            </div>
                        </>
                    )}
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Top;
