import './style.scss';
import 'swiper/css';
import type {ResponseType} from "./types";
import React, {useEffect,  useState} from "react";
import useRequest from "../../utils/useRequest";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Card from "./components/Card";
//import { message } from "../../utils/message";





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






    return (
        <div className="page home-page">
            <Banner location={data?.data.location} banners={data?.data.banners}/>
            <Category categories={data?.data.categories}/>
            <Card title="新品尝鲜" list={data?.data.fresh}/>
            <div className="bottom">
             -- I am the bottom line --
            </div>
            <div className="docker">
                <div className="docker-item docker-item-active">
                    <p className="iconfont">&#xe608;</p>
                    <p className="docker-item-title">首页</p>
                </div>
                <div className="docker-item">
                    <p className="iconfont">&#xe609;</p>
                    <p className="docker-item-title">分类</p>
                </div>
                <div className="docker-item">
                    <p className="iconfont">&#xe601;</p>
                    <p className="docker-item-title">购物车</p>
                </div>
                <div className="docker-item">
                    <p className="iconfont">&#xe602;</p>
                    <p className="docker-item-title">我的</p>
                </div>
            </div>
        </div>
    )
}

export default Home;
