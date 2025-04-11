import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React from "react";


const Home =() => {
    return (
        <div className="page home-page">
            <div className="banner">
                <h3 className="location">
                    <span className="iconfont">&#xe68e;</span>
                    Ottawa(Chinatown Branch)
                </h3>
                <div className="search">
                <span className="iconfont">&#xe600;</span>
                    Input search words here
                </div>
                <div className="swiper-area">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <div className="swiper-item">
                                <img src='http://statics.dell-lee.com/shopping/banner.png' alt='轮播图'/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-item">
                                <img src='http://statics.dell-lee.com/shopping/banner.png' alt='轮播图'/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </div>
    )
}

export default Home;
