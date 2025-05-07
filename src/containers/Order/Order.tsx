import './style.scss';
import React, {useEffect, useState} from "react";
import useRequest from "../../utils/useRequest";
import {ResponseType, ResponseDataType, AddressResponseType, AddressItemType} from "./types";
import {message} from "../../utils/message";
import {useParams} from "react-router-dom";
import Popover from "../../components/Popover/Popover";





 function Order() {
     const {request } = useRequest<ResponseType>({ manual:true})
     const {request: addressRequest } = useRequest<AddressResponseType>({ manual:true})
     //store order data from requesting
     const [data, setData] = useState<ResponseDataType | null >(null);
     const params = useParams<{id:string}>()
     const [showAddress, setShowAddress] = useState(false);
     const [addressList, setAddressList] = useState<AddressItemType[]>([]);
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
     }, [params,request]);


     function handleBlankClick() {
         setShowAddress(false);
     }

     function handleConfirmClick() {
         console.log('confirm click');
     }

     function handleReceiverClick() {
           setShowAddress(true);
           addressRequest({
               url: '/userAddress.json',
               method: 'GET'
           }).then((response)=>{
               console.log(response.data);
                 setAddressList(response.data);
           }).catch((e)=>{
               message(e.message);
           });
     }
     console.log(addressList);


     return data? (
        <div className="page order-page">
            <div className='title'>Confirm Order</div>
            <div className='receiver' onClick={handleReceiverClick}>
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
                    <div key={shop.shopId}>
                        {/*iterate show div from dynamic data*/}
                        <div className='shop'>
                            <div className='shop-title'>
                                <span className='iconfont'>&#xe7ce;</span>
                                {shop.shopName}
                            </div>
                            <div className='shop-products'>

                                {
                                    shop.cartList.map(product => (
                                        <div className='shop-product' key={product.productId}>
                                            <img src={product.imgUrl}
                                                 alt={product.title}
                                                 className='shop-product-img'/>
                                            <div className='shop-product-content'>
                                                <div className='shop-product-title'>
                                                    {product.title}
                                                </div>
                                                <div className='shop-product-kilo'>{product.weight}</div>
                                            </div>
                                            <div className='shop-product-order'>
                                                <div>&#36;{product.price}</div>
                                                <div>X{product.count}</div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>


                    </div>
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
            <Popover show={showAddress} blankClickCallBack={()=> setShowAddress(false)}>
                <div className='address-popover'>
                    <div className='address-popover-title'>Choose Address</div>
                    {
                        addressList.map((address, index) => (
                            <div key={index} className='address-item'>
                                <div className='address-item-content'>
                                    <div className='address-item-name'>
                                        Receiver: {address.name}
                                        <span className='address-item-phone'>{address.phone}</span>
                                    </div>
                                    <div className='address-item-address'>
                                        Address: {address.address}
                                    </div>
                                </div>
                                {/*<div className='address-item-select'>*/}
                                {/*    <span className={address.selected ? 'iconfont selected' : 'iconfont'}>&#xe6a7;</span>*/}
                                {/*</div>*/}
                            </div>
                        ))
                    }


                    <div className='address-item'>
                        <div className='address-item-content'>
                            <div className='address-item-name'>
                                Receiver: {data.address.name}
                                <span className='address-item-phone'>{data.address.phone}</span>
                            </div>
                            <div className='address-item-address'>
                                Address: {data.address.address}
                            </div>
                        </div>
                    </div>



                </div>

            </Popover>
        </div>
     ) : null;
 }


export default Order;