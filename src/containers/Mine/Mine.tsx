import './style.scss';
import React from "react";
import Docker from "../../components/Docker/Docker";



function Mine() {
    function handleMemberClick() {
        console.log('member centre')
    }

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
                    <button className='mine-profile-right member-centre' onClick={handleMemberClick}>
                        Member
                    </button>
                </div>
            </div>

            {/* point section */}
            <div className="mine-points">
                <div className="mine-points-item">
                    <div className="mine-points-value">4</div>
                    <div className="mine-points-label">Coupons</div>
                </div>
                <div className="mine-points-item">
                    <div className="mine-points-value">258</div>
                    <div className="mine-points-label">Reward Points</div>
                </div>
                <div className="mine-points-item">

                </div>
            </div>
            {/* feature section */}
            <div className="mine-features">
                <div className="mine-features-row">
                    <div className="mine-feature-item">
                        <div className="mine-feature-icon iconfont">&#xe603;</div>
                        <div className="mine-feature-text">All Orders</div>
                    </div>
                    <div className="mine-feature-item">
                        <div className="mine-feature-icon iconfont">&#xe612;</div>
                        <div className="mine-feature-text">Pending Payment</div>
                    </div>
                    <div className="mine-feature-item">
                        <div className="mine-feature-icon iconfont">&#xe63f;</div>
                        <div className="mine-feature-text">Awaiting Shipment</div>
                    </div>
                    <div className="mine-feature-item">
                        <div className="mine-feature-icon iconfont">&#xe6b1;</div>
                        <div className="mine-feature-text">Awaiting Delivery</div>
                    </div>
                </div>
 
                <div className="mine-features-row">
                    <div className="mine-feature-item">
                        <div className="mine-feature-icon iconfont">&#xe611;</div>
                        <div className="mine-feature-text">Returns & Refunds</div>
                    </div>
                    <div className="mine-feature-item">
                        <div className="mine-feature-icon iconfont">&#xec2e;</div>
                        <div className="mine-feature-text">Customer Service</div>
                    </div>
                    <div className="mine-feature-item">
                        <div className="mine-feature-icon iconfont">&#xe643;</div>
                        <div className="mine-feature-text">Settings</div>
                    </div>
                    <div className="mine-feature-item">
                        <div className="mine-feature-icon iconfont">&#xe640;</div>
                        <div className="mine-feature-text">Address</div>
                    </div>
                </div>
            </div>
            
            <Docker activeName='mine'/>
        </div>
    )

}

export default Mine;