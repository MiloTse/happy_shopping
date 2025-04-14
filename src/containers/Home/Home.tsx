import './style.scss';
import 'swiper/css';
import type {ResponseType} from "./types";
import React, {useEffect,  useState} from "react";
import useRequest from "../../utils/useRequest";
import Banner from "./components/Banner";
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
             <div className="category">
                {
                    (data?.data.categories || []).map((item)=>{
                        return (
                            <div className="category-item" key={item.id}>
                                <img className='category-item-img'
                                     alt={item.name}
                                     src={item.imgUrl}/>
                                <p className='category-item-desc'>{item.name}</p>
                            </div>
                        )
                    })
                }


            </div>
            <div className="card">
                <h3 className="card-title">
                    <img
                        alt="新品尝鲜"
                        className="card-title-img"
                        src="http://statics.dell-lee.com/shopping/hot.png"/>
                    新品尝鲜
                <div className="card-title-more">
                    more
                    <span className="iconfont">&#xe70d;</span>
                </div>
                </h3>
                <div className="card-content">

                    {
                        (data?.data.fresh || []).map((item)=> {
                            return (
                                <div className="card-content-item" key={item.id}>
                                    <img
                                        alt={item.name}
                                        className="card-content-item-img"
                                        src={item.imgUrl}/>
                                    <p className='card-content-item-desc'>{item.name}</p>
                                    <div className='card-content-item-price'>
                                        <span className='card-content-item-yen'>&yen;</span>
                                        {item.price}
                                        <div className='iconfont'>&#xe6b2;</div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
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
