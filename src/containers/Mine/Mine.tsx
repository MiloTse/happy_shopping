import './style.scss';
import React from "react";
import Docker from "../../components/Docker/Docker";



function Mine() {
    return (
        <div className="mine-page">
            <div className='title'>
                Mine
            </div>
            {/*profile section*/}
            <div className='profile'>
                <div className='profile-left'>
                    <img className='profile-left avatar' alt=''/>
                    <div className='profile-left nickname'>
                        <span>Nickname</span>

                    </div>
                    <div className='profile-left vip-info'>
                        <span  className='profile-left vip-level'>VIP5</span>
                    </div>

                </div>
                <div className='profile-right'>
                    <div className='profile-right member-centre'>
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
            <Docker activeName='cart'/>
        </div>
    )

}

export default Mine;