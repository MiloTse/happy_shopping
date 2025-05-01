import './style.scss';
import Docker from "../../components/Docker/Docker";
import React from "react";

function Cart() {
    return (
        <div className="page cart-page">
            <div className='title'>
                Cart
            </div>
            <div className='shop'>
                <div className='shop-title'>
                    <span className='iconfont'></span>喜梅蔬菜店
                </div>
            </div>
            <Docker activeName='cart' />
        </div>
    )
}

export default Cart;