
import './style.scss';
import React from "react";

const Detail = () => {

    return (
        <div className="page detail-page">
            <div className="title">
                <div className="iconfont">&#xe6a9;</div>
                <div className="text">Detail</div>
            </div>
            <img className='image' alt='' src='http://statics.dell-lee.com/shopping/detail.png'/>
            <div className='main'>
                <div className='main-price'><span className="main-price-symbol">&#36;</span>
                139.9</div>
                <div className='sales'>546</div>
            <div className='main-content'>
                    <div
                        className='main-content-title'>山东海阳普罗旺斯西红柿自然熟沙飘番茄新鲜水果蔬菜健康轻食严选彩箱5斤装
                    </div>
                    <p className='main-content-subtitle'>山东海阳普罗旺斯西红柿自然熟沙飘番茄新鲜水果蔬菜健康轻食严选彩箱5斤装</p>

                </div>

            </div>

        </div>
    )

}

export default Detail;