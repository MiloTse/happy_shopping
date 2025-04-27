import React from "react";
import './style.scss';
import {useNavigate} from "react-router-dom";

function Docker   ()   {
    const navigate = useNavigate();

    return (

            <div className="docker">
                <div className="docker-item docker-item-active" onClick={() => navigate('/home')}>
                    <p className="iconfont">&#xe608;</p>
                    <p className="docker-item-title">Home</p>
                </div>
                <div className="docker-item" >
                    <p className="iconfont">&#xe609;</p>
                    <p className="docker-item-title">Category</p>
                </div>
                <div className="docker-item">
                    <p className="iconfont">&#xe601;</p>
                    <p className="docker-item-title">Cart</p>
                </div>
                <div className="docker-item">
                    <p className="iconfont">&#xe602;</p>
                    <p className="docker-item-title">Mine</p>
                </div>
            </div>

    );
}

export default Docker;