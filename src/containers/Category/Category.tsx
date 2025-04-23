import './style.scss';
import React from "react";


const Category = () => {

    return (
        <div className="page category-page">
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