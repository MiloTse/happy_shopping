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
                    <img className='avatar' alt='avatar'/>
                    <div className='nickname'>Tom Wang</div>
                    <div className='vip-info'>
                        <span  className='vip-level'>VIP5</span>
                    </div>
                </div>
                <div className='mine-profile-right'>
                    <div className='mine-profile-right member-centre'>
                        Member Centre
                    </div>
                </div>
            </div>
            {/*point section*/}
            <div>
                <div className='point'>
                    <div className='point-item'>
                        <span>4</span>
                        <span>Points</span>
                    </div>
                    <div className='point-item'>
                        <span>123456</span>
                        <span>Points</span>
                    </div>
                </div>
            </div>
            <Docker activeName='mine'/>
        </div>
    )

}

export default Mine;