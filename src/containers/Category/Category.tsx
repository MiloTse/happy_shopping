import './style.scss';
import React from "react";
import {useNavigate} from "react-router-dom";


const Category = () => {
    const navigate = useNavigate();

    return (
        <div className="page category-page">
            <div className="title">
                <div className="iconfont" onClick={() => {
                    navigate(-1)
                }}>&#xe6a9;</div>
                <div className="text">Category</div>
            </div>
            <div className="docker">
                <div className="docker-item ">
                    <p className="iconfont">&#xe608;</p>
                    <p className="docker-item-title">Home</p>
                </div>
                <div className="docker-item docker-item-active">
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
        </div>
    )
}

export default Category;