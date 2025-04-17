import './style.scss';
import useRequest from "../../utils/useRequest";
import {Link, useLocation, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import type {ResponseType} from "./types";



// const localLocation=localStorage.getItem('location');
// const locationHistory=localLocation ?JSON.parse(localLocation):null;
// //默认请求数据
// const defaultRequestData= {
//     url: '/nearby.json',
//     method: 'POST',
//     data: {
//         latitude: locationHistory ? locationHistory.latitude : 37.7304167,
//         longitude: locationHistory ? locationHistory.longitude : -122.384425,
//     }
// }
//

const Nearby = () => {
    // const{ data} = useRequest<ResponseType>(defaultRequestData);
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [keyword, setKeyword ]= useState('')


    // const list = (data?.data || []).filter(
    //     item => { return item.name.indexOf(keyword) > -1;}
    // );
    // function handleItemClick(latitude:string,longitude:string) {
    //     localStorage.setItem('location', JSON.stringify({
    //         latitude, longitude
    //     }));
    //     navigate('/home')
    // }
    return (
        <div className='page nearby-page'>
             <div className="title">
                 <Link to="/home">
                     <div className="iconfont title-icon"> icon</div>
                 </Link>
                 切换门店
             </div>
            <div className="search">
                <div className="search-icon iconfont">icon
                </div>
                {/*<input type="search-input"*/}
                {/*       placeholder="请输入地址"*/}
                {/*       value={keyword}*/}
                {/*       onChange={(e)=>{setKeyword(e.target.value)}}*/}
                {/*/>*/}
            </div>
            <div className="subtitle">附近门店
            </div>
            <ul className="list">
                {

                }

            </ul>
        </div>
    )
}

export default Nearby;