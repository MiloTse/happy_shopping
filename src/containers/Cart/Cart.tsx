import './style.scss';
import Docker from "../../components/Docker/Docker";
import React from "react";

function Cart() {
    return (
        <div className="page cart-page">
            <Docker activeName='cart' />
        </div>
    )
}

export default Cart;