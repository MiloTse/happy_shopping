import './style.scss';
import useRequest from "../../utils/useRequest";
import {Link, useLocation, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import type {ResponseType} from "./types";

const defaultRequestData = {
    url: '/nearby.json',
    method: 'POST',
    data: {
        latitude: 37.7304167,
        longitude: -122.384425,
    }
}

const Nearby = () => {
    const localLocation = localStorage.getItem('location');
    const locationHistory = localLocation ? JSON.parse(localLocation) : null;
    
    // Update request data with location history if available
    if (locationHistory) {
        defaultRequestData.data.latitude = locationHistory.latitude;
        defaultRequestData.data.longitude = locationHistory.longitude;
    }

    const { data } = useRequest<ResponseType>(defaultRequestData);
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [keyword, setKeyword] = useState('');

    // use the search keyword to filter the list
    const list = (data?.data || []).filter(
        item => item.name.toLowerCase().includes(keyword.toLowerCase())
    );

    function handleItemClick(latitude: string, longitude: string) {
        localStorage.setItem('location', JSON.stringify({
            latitude, longitude
        }));
        navigate('/home');
    }
    const handleGoBackClick = () => {
        navigate('/home');
    };
    return (
        <div className='page nearby-page'>
            <div className="title">

                    <div className="iconfont title-icon"
                         onClick={handleGoBackClick} style={{ cursor: 'pointer' }}>
                        &#xe6a9;</div>

                切换门店
            </div>
            <div className="search">
                <span className="search-icon iconfont">&#xe600;</span>
                <input 
                    className="search-input"
                    placeholder="请输入地址"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
            </div>
            <div className="subtitle">附近门店</div>
            <ul className="store-list">
                {list.map(item => (
                    <li
                        key={item.id} 
                        className="store-list-item"
                        onClick={() => handleItemClick(item.latitude, item.longitude)}
                    >
                        <div className="store-list-item-title">{item.name}</div>
                        <div className="store-list-item-desc">
                            <span>联系电话：{item.phone}</span>
                        </div>
                        <div className="store-list-item-address">{item.address}</div>
                        <div className="store-list-item-right">
                            <span className="iconfont">&#xe68e;</span>
                            {item.distance}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Nearby;