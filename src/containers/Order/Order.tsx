import './style.scss';
import React, {useEffect, useState} from "react";
import useRequest from "../../utils/useRequest";
import type {ResponseType, ResponseDataType} from "./types";
import {message} from "../../utils/message";
import {useParams} from "react-router-dom";





 function Order() {
     const {request } = useRequest<ResponseType>({ manual:true})
     //store order data from requesting
     const [data, setData] = useState<ResponseDataType | null >(null);
     const params = useParams<{id:string}>()


     useEffect(() => {
         request({
             url: '/orderDetail.json',
             method: 'GET',
             params: {id: params.id}
         }).then((response)=>{
             setData(response.data);
             console.log(response. data);
         }).catch((e)=>{
             message(e.message);
         })
     }, []);


    return data? (
        <div className="page order-page">
            <div className='title'>Confirm Order</div>
            <div className='receiver'>
                <div className='iconfont'>&#xe68e; </div>
                <div className='receiver-content'>
                    <div className='receiver-name'>
                        Receiver: {data.address.name}
                        <span className='receiver-phone'>{data.address.phone}</span>
                    </div>
                    <div className='receiver-address'>
                        Address: {data.address.address}
                    </div>
                </div>

            </div>
            <div className='delivery'>
                <div className='delivery-text'>Delivery Time</div>
                <div className='delivery-select'>{data.time}</div>
            </div>

            {
                data.shop.map(shop =>  (
                    <>
                        {/*iterate show div from dynamic data*/}
                        <div className='shop'>
                            <div className='shop-title'>
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
                        </div>


                    </>
                ))
            }




            <div className='footer'>
                <div className='footer-total'>
                    Total:
                    <span className='footer-total-price'>
                        <span className='footer-total-symbol'>&#36;</span>
                        {data.total}
                    </span>
                </div>
                <div className='footer-submit'>Place Order</div>
            </div>
        </div>
    ) :null;
 }


export default Order;