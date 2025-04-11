import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React, {useEffect, useState} from "react";


const Home =() => {
/*    const [requestData, setRequestData] = useState<any>({
        url: '/home.json',
        method: 'POST',
        data: {
            latitude:45.3497856,
            longitude: -75.7554394,
        }

    });*/

    useEffect(()=>{
         if(navigator.geolocation){
             navigator.geolocation.getCurrentPosition((position)=>{
                 console.log(position);
             },(error)=>{
                 console.log(error);
             },{
                 timeout: 1000,
             })
         }
    })




    const [page, setPage] = useState(1);


    return (
        <div className="page home-page">
            <div className="banner">
                <h3 className="location">
                    <span className="iconfont">&#xe68e;</span>
                    Ottawa(Algonquin College store)
                </h3>
                <div className="search">
                <span className="iconfont">&#xe600;</span>
                    Input search words here
                </div>
                <div className="swiper-area">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={(e:any) => {setPage(e.activeIndex+1)}}
                    >
                        <SwiperSlide>
                            <div className="swiper-item">
                                <img className="swiper-item-img" src='http://statics.dell-lee.com/shopping/banner.png' alt='轮播图'/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-item">
                                <img  className="swiper-item-img"  src='http://statics.dell-lee.com/shopping/banner.png' alt='轮播图'/>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                    <div className="pagination">{page}/2</div>
                </div>
            </div>

        </div>
    )
}

export default Home;
