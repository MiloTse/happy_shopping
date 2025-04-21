
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
            {/*main area */}
            <div className='main'>
                <div className='main-price'><span className="main-price-symbol">&#36;</span>
                139.9</div>
                <div className='main-sales'>sold 546</div>
                 <div className='main-content'>
                    <div
                        className='main-content-title'>山东海阳普罗旺斯西红柿自然熟沙飘番茄新鲜水果蔬菜健康轻食严选彩箱5斤装
                    </div>
                    <p className='main-content-subtitle'>山东海阳普罗旺斯西红柿自然熟沙飘番茄新鲜水果蔬菜健康轻食严选彩箱5斤装</p>
                </div>

            </div>
            {/*specification area */}
            <div className='spec'>
                <div className='spec-title'>spec info</div>
                <div className='spec-content'>
                    <div className='spec-content-left'>
                        <p className='spec-content-item'>origin</p>
                        <p className='spec-content-item'>spec</p>
                    </div>
                    <div className='spec-content-right'>
                        <p className='spec-content-item'>The actual batch of purchased products shall prevail.</p>
                        <p className='spec-content-item'>2kg</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Detail;