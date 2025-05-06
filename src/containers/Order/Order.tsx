import './style.scss';
import React, {useEffect} from "react";
import useRequest from "../../utils/useRequest";
import type {ResponseType} from "./types";
import {message} from "../../utils/message";
import {useParams} from "react-router-dom";





 function Order() {
     const {request }= useRequest<ResponseType>({ manual:true})
     const params = useParams<{id:string}>()


     // useEffect(() => {
     //     request({
     //         url: '/cartProducts.json',
     //         method: 'GET'
     //     }).then((data)=>{
     //         const list = data.data;
     //         //fetch shop list data from response data
     //         const newList= list.map(shop =>{
     //
     //             //added new return property 'selected' to every product
     //             const newCartList= shop.cartList.map(product => {
     //                 return {...product, selected: false}
     //             });
     //             return{ shopId:shop.shopId, shopName:shop.shopName, cartList: newCartList}
     //         });
     //         // console.log(newList);
     //         //passing newList to list
     //         setList(newList);
     //     }).catch((e)=>{
     //         console.log(e?.message);
     //         message(e.message);
     //     })
     // }, [request]);


    return (
        <div className="page order-page">
            <div className='title'>Confirm Order</div>
            <div className='receiver'>
                <div className='iconfont'>&#xe68e; </div>
                <div className='receiver-content'>
                    <div className='receiver-name'>
                        Receiver: Tom
                        <span className='receiver-phone'>1-613-727-4723</span>
                    </div>
                    <div className='receiver-address'>
                        Address: 1385 Woodroffe Avenue, Ottawa, ON, K2G 1V8
                    </div>
                </div>

            </div>
            <div className='delivery'>
                <div className='delivery-text'>Delivery Time</div>
                <div className='delivery-select'>Choose</div>
            </div>
            <div className='shop' >
                <div className='shop-title'  >
                    <span className='iconfont'>&#xe7ce;</span>
                    喜梅蔬菜店
                </div>
                <div className='shop-products'>
                    <div className='shop-product'>
                        <img src='http://statics.dell-lee.com/shopping/fresh-2.png'
                             alt=''
                             className='shop-product-img'/>
                        <div className='shop-product-content'>
                            <div className='shop-product-title'>
                                城市厨房澳洲牛肉卷肥牛卷450g牛肉片火锅生鲜牛羊.
                            </div>
                            <div className='shop-product-kilo'>0.45kg</div>
                        </div>
                        <div className='shop-product-order'>
                            <div>&#36;99</div>
                            <div>x1</div>
                        </div>
                    </div>
                </div>

                <div className='shop-products'>
                    <div className='shop-product'>
                        <img src='http://statics.dell-lee.com/shopping/fresh-2.png'
                             alt=''
                             className='shop-product-img'/>
                        <div className='shop-product-content'>
                            <div className='shop-product-title'>
                                城市厨房澳洲牛肉卷肥牛卷450g牛肉片火锅生鲜牛羊.
                            </div>
                            <div className='shop-product-kilo'>0.45kg</div>
                        </div>
                        <div className='shop-product-order'>
                            <div>&#36;99</div>
                            <div>x1</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='shop' >
                <div className='shop-title'  >
                    <span className='iconfont'>&#xe7ce;</span>
                    喜梅蔬菜店
                </div>
                <div className='shop-products'>
                    <div className='shop-product'>
                        <img src='http://statics.dell-lee.com/shopping/fresh-2.png'
                             alt=''
                             className='shop-product-img'/>
                        <div className='shop-product-content'>
                            <div className='shop-product-title'>
                                城市厨房澳洲牛肉卷肥牛卷450g牛肉片火锅生鲜牛羊.
                            </div>
                            <div className='shop-product-kilo'>0.45kg</div>
                        </div>
                        <div className='shop-product-order'>
                            <div>&#36;99</div>
                            <div>x1</div>
                        </div>
                    </div>
                </div>

                <div className='shop-products'>
                    <div className='shop-product'>
                        <img src='http://statics.dell-lee.com/shopping/fresh-2.png'
                             alt=''
                             className='shop-product-img'/>
                        <div className='shop-product-content'>
                            <div className='shop-product-title'>
                                城市厨房澳洲牛肉卷肥牛卷450g牛肉片火锅生鲜牛羊.
                            </div>
                            <div className='shop-product-kilo'>0.45kg</div>
                        </div>
                        <div className='shop-product-order'>
                            <div>&#36;99</div>
                            <div>x1</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer'>
                <div className='footer-total'>
                    Total:
                    <span className='footer-total-price'>
                        <span className='footer-total-symbol'>&#36;</span>
                    199
                    </span>
                </div>
                <div className='footer-submit'>Place Order</div>
            </div>
        </div>
    )
 }


export default Order;