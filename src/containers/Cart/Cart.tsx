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
                    <div className='radio'></div>
                    <span className='iconfont'>&#xe7ce;</span>喜梅蔬菜店
                </div>
            </div>
            <Docker activeName='cart' />
        </div>
    )
}

export default Cart;