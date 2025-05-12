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
            <Docker activeName='mine'/>
        </div>
    )

}

export default Mine;