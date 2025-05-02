import './style.scss';
import Docker from "../../components/Docker/Docker";
import React from "react";

function Cart() {
    return (
        <div className="page cart-page">
            <div className='title'>
                Cart
            </div>
            {/*show every shop*/}
            <div className='shop'>
                <div className='shop-title'>
                    <div className='radio'></div>
                    <span className='iconfont'>&#xe7ce;</span>喜梅蔬菜店
                </div>
                <div className='shop-products'>
                    <div className='shop-product'>
                        <div className='radio'></div>
                        <img src='http://statics.dell-lee.com/shopping/category-list-1.png' alt='' className='shop-product-img'/>
                        <div className='shop-product-content'>
                            <div className='shop-product-title'>
                                潍坊水果萝卜10斤水果萝卜甜脆水果型潍县青沙窝天津萝卜…
                            </div>


                            <div className='shop-product-kilo'>
                                0.43kg
                            </div>
                            <div className='shop-product-price'>
                                <span className='shop-product-price-symbol'>&#36; </span>99
                            </div>
                            <input value='3' className='shop-product-count'/>
                        </div>
                    </div>
                    <div className='shop-product'>
                        <div className='radio'></div>
                        <img src='http://statics.dell-lee.com/shopping/category-list-1.png' alt='' className='shop-product-img'/>
                        <div className='shop-product-content'>
                            <div className='shop-product-title'>
                                潍坊水果萝卜10斤水果萝卜甜脆水果型潍县青沙窝天津萝卜…
                            </div>


                            <div className='shop-product-kilo'>
                                0.43kg
                            </div>
                            <div className='shop-product-price'>
                                <span className='shop-product-price-symbol'>&#36; </span>99
                            </div>
                            <input value='3' className='shop-product-count'/>
                        </div>
                    </div>
                    <div className='shop-product'>
                        <div className='radio'></div>
                        <img src='http://statics.dell-lee.com/shopping/category-list-1.png' alt='' className='shop-product-img'/>
                        <div className='shop-product-content'>
                            <div className='shop-product-title'>
                                潍坊水果萝卜10斤水果萝卜甜脆水果型潍县青沙窝天津萝卜…
                            </div>


                            <div className='shop-product-kilo'>
                                0.43kg
                            </div>
                            <div className='shop-product-price'>
                                <span className='shop-product-price-symbol'>&#36; </span>99
                            </div>
                            <input value='3' className='shop-product-count'/>
                        </div>
                    </div>
                </div>
            </div>
            {/*show every shop*/}
            <div className='shop'>
                <div className='shop-title'>
                    <div className='radio'></div>
                    <span className='iconfont'>&#xe7ce;</span>喜梅蔬菜店
                </div>
                <div className='shop-products'>
                    <div className='shop-product'>
                        <div className='radio'></div>
                        <img src='http://statics.dell-lee.com/shopping/category-list-1.png' alt='' className='shop-product-img'/>
                        <div className='shop-product-content'>
                            <div className='shop-product-title'>
                                潍坊水果萝卜10斤水果萝卜甜脆水果型潍县青沙窝天津萝卜…
                            </div>


                            <div className='shop-product-kilo'>
                                0.43kg
                            </div>
                            <div className='shop-product-price'>
                                <span className='shop-product-price-symbol'>&#36; </span>99
                            </div>
                            <input value='3' className='shop-product-count'/>
                        </div>
                    </div>
                    <div className='shop-product'>
                        <div className='radio'></div>
                        <img src='http://statics.dell-lee.com/shopping/category-list-1.png' alt='' className='shop-product-img'/>
                        <div className='shop-product-content'>
                            <div className='shop-product-title'>
                                潍坊水果萝卜10斤水果萝卜甜脆水果型潍县青沙窝天津萝卜…
                            </div>


                            <div className='shop-product-kilo'>
                                0.43kg
                            </div>
                            <div className='shop-product-price'>
                                <span className='shop-product-price-symbol'>&#36; </span>99
                            </div>
                            <input value='3' className='shop-product-count'/>
                        </div>
                    </div>
                    <div className='shop-product'>
                        <div className='radio'></div>
                        <img src='http://statics.dell-lee.com/shopping/category-list-1.png' alt='' className='shop-product-img'/>
                        <div className='shop-product-content'>
                            <div className='shop-product-title'>
                                潍坊水果萝卜10斤水果萝卜甜脆水果型潍县青沙窝天津萝卜…
                            </div>


                            <div className='shop-product-kilo'>
                                0.43kg
                            </div>
                            <div className='shop-product-price'>
                                <span className='shop-product-price-symbol'>&#36; </span>99
                            </div>
                            <input value='3' className='shop-product-count'/>
                        </div>
                    </div>
                </div>
            </div>
            {/* show total price*/}
            <div className='total-price'>
                <div>
                    <div className='radio'></div>
                    全选
                </div>
                <div>合计：
                    <span className='total-price-symbol'>&#36; </span>
                    99
                </div>
                <div className='check'>结算(2)</div>

            </div>
            <Docker activeName='cart' />
        </div>
    )
}

export default Cart;