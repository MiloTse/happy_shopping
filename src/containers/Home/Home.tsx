import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React, {useEffect,  useState} from "react";
import useRequest from "../../utils/useRequest";
//import { message } from "../../utils/message";

//返回内容类型
type ResponseType = {
    success: boolean;
    data: {
        location: {
            id: string;
            address: string;
        };
        banners: Array<{
            id: string,
            url: string
        }>
    }
}




const localLocation= localStorage.getItem('location');
const locationHistory= localLocation ? JSON.parse(localLocation) : null;

//defaultRequestData
const defaultRequestData = {
    url: '/home.json',
    method: 'POST',
    data: {
        latitude:locationHistory? locationHistory.latitude: 45.3497856,
        longitude: locationHistory? locationHistory.longitude: -75.7554394,
    }
}

const Home =() => {
    const [requestData, setRequestData] = useState(defaultRequestData);
    //data： 请求发送返回的结果
    const {data} = useRequest<ResponseType>(requestData);

    console.log(data);

    //request backend server when requestData changed
/* useRequest 已经封装了，这里不需要重新写请求
    useEffect(() => {
        request().then((data)=>{
            console.log(data);
        }).catch(e=>{
            console.log(e?.message);

            message(e?.message, 1500);
        })
    }, [requestData, request ]);

*/

    //obtain user location
    useEffect(()=>{
        //get user location if locationHistory not exist, else used the locationHistory
         if(navigator.geolocation && !locationHistory){
             navigator.geolocation.getCurrentPosition((position)=>{
                 console.log(position);
                 const { coords } = position;
                 const { latitude, longitude } = coords;
                 console.log(latitude,longitude);
                 //store the location to localStorage
                 localStorage.setItem('location', JSON.stringify({
                     latitude, longitude
                 }));
                 //setRequestData if can get location, and copy to new object
                 const newRequestData = {
                     ...defaultRequestData,
                     data: {
                         latitude, longitude
                 }};
                 setRequestData(newRequestData);

             },(error)=>{
                 console.log(error);
             },{
                 timeout: 500,
             })
         }
    } );




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
