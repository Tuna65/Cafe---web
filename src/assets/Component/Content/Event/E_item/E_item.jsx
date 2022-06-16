import { faCalendarAlt, faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './E_item.css';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper';

import img3 from '../../../../img/3.jpg';
import img2 from '../../../../img/1-8.jpg';
import img1 from '../../../../img/2-7.jpg';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function EItem() {
    const items = [
        {
            path: img3,
            title: 'Barbeque Party',
            day: '10 May 2017',
            firstTime: '12:00',
            lastTime: '13:00',
        },
        {
            path: img2,
            title: 'Barbeque Party',
            day: '10 May 2017',
            firstTime: '12:00',
            lastTime: '13:00',
        },
        {
            path: img1,
            title: 'Barbeque Party',
            day: '10 May 2017',
            firstTime: '12:00',
            lastTime: '13:00',
        },
        {
            path: img1,
            title: 'Barbeque Party',
            day: '10 May 2017',
            firstTime: '12:00',
            lastTime: '13:00',
        },
        {
            path: img2,
            title: 'Barbeque Party',
            day: '10 May 2017',
            firstTime: '12:00',
            lastTime: '13:00',
        },
        {
            path: img3,
            title: 'Barbeque Party',
            day: '10 May 2017',
            firstTime: '12:00',
            lastTime: '13:00',
        },
    ];
    return (
        <div className="ei_wrapper">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                modules={[Pagination]}
                className="ei__mySwiper"
            >
                {items.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="ei__inner">
                                <div className="ei__inner-img">
                                    <img src={item.path} alt="" className="ei__img" />
                                    <span className="ei__inner-img-layout"></span>

                                    <span className="ei__icon-link">
                                        <Link to="/party-bar">
                                            <FontAwesomeIcon icon={faLink} className="ei__icon" />
                                        </Link>
                                    </span>
                                </div>
                                <h5>{item.title}</h5>
                                <div className="ei__times">
                                    <div className="day">
                                        <FontAwesomeIcon icon={faCalendarAlt} />

                                        <span>{item.day}</span>
                                    </div>
                                    <div className="hours">
                                        <FontAwesomeIcon icon={faClock} />
                                        <span>
                                            {item.firstTime} - {item.lastTime}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default EItem;
