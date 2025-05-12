import './style.scss';
import React from "react";
import Docker from "../../components/Docker/Docker";



function Mine() {
    return (
        <div className="mine-page">
            {/*title section*/}
            <div className='mine-title'>
                Mine
            </div>
            {/*profile information section*/}
            <div className='mine-profile'>
                <div className='mine-profile-left'>
                    <img className='avatar' alt='avatar' src='http://statics.dell-lee.com/shopping/category-list-5.png'/>
                    <div className='nickname'>Tom Wang</div>
                    <div className='vip-info'>
                        <span  className='vip-level'>VIP5</span>
                    </div>
                </div>
                <div className='mine-profile-right'>
                    <div className='mine-profile-right member-centre'>
                        Member
                    </div>
                </div>
            </div>

            {/* point section */}
            <div className="mine-points">
                <div className="mine-points-item">
                    <div className="mine-points-value">4</div>
                    <div className="mine-points-label">优惠券</div>
                </div>
                <div className="mine-points-item">
                    <div className="mine-points-value">258</div>
                    <div className="mine-points-label">积分</div>
                </div>
                <div className="mine-points-item">

                </div>
            </div>
            {/* feature section */}
            <div className="mine-features">
                <div className="mine-features-row">
                    <div className="mine-feature-item">
                        <div className="mine-feature-icon iconfont">&#xe603;</div>
                        <div className="mine-feature-text">全部订单</div>
                    </div>
                    <div className="mine-feature-item">
                        <div className="mine-feature-icon iconfont">&#xe612;</div>
                        <div className="mine-feature-text">待付款</div>
                    </div>
                    <div className="mine-feature-item">
                        <div className="mine-feature-icon iconfont">&#xe63f;</div>
                        <div className="mine-feature-text">待发货</div>
                    </div>
                    <div className="mine-feature-item">
                        <div className="mine-feature-icon iconfont">&#xe6b1;</div>
                        <div className="mine-feature-text">待收货</div>
                    </div>
                </div>
 
                <div className="mine-features-row">
                    <div className="mine-feature-item">
                        <div className="mine-feature-icon iconfont">&#xe611;</div>
                        <div className="mine-feature-text">退款/售后</div>
                    </div>
                    <div className="mine-feature-item">
                        <div className="mine-feature-icon iconfont">&#xec2e;</div>
                        <div className="mine-feature-text">客服</div>
                    </div>
                    <div className="mine-feature-item">
                        <div className="mine-feature-icon iconfont">&#xe643;</div>
                        <div className="mine-feature-text">设置</div>
                    </div>
                    <div className="mine-feature-item">
                        <div className="mine-feature-icon iconfont">&#xe640;</div>
                        <div className="mine-feature-text">地址</div>
                    </div>
                </div>
            </div>
            
            <Docker activeName='mine'/>
        </div>
    )

}

export default Mine;