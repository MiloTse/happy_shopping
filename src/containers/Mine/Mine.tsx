import './style.scss';
import React from "react";
import Docker from "../../components/Docker/Docker";



function Mine() {
    return (
        <div className="mine-page">
            <div className='title'>
                Mine
            </div>
            <Docker activeName='cart'/>
        </div>
    )

}

export default Mine;