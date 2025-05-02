import './style.scss';
import Docker from "../../components/Docker/Docker";
import React, {useEffect, useRef, useState} from "react";
import useRequest from "../../utils/useRequest";
import type {ResponseType, ListItemType } from "./types";
import {message} from "../../utils/message";

function Cart() {
    //loading data from backend server at the first time only
    const { request } = useRequest<ResponseType>({manual: true});
    const [list, setList ] = useState<ListItemType[]>([]);
    useEffect(() => {
        request({
                url: '/cartProducts.json',
                method: 'GET'
            }).then((data)=>{
            const list = data.data;
            //fetch shop list data from response data
            const newList= list.map(shop =>{

                //added new return property 'selected' to every product
                const newCartList= shop.cartList.map(product => {
                    return {...product, selected: false}
                });
                return{ shopId:shop.shopId, shopName:shop.shopName, cartList: newCartList}
            });
            // console.log(newList);
            //passing newList to list
            setList(newList);
        }).catch((e)=>{
                console.log(e?.message);
                message(e.message);
            })
    }, [request]);













    return (
        <div className="page cart-page">
            <div className='title'>
                Cart
            </div>

            {/*show every shop iterated by list*/}
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
            {
                list.map(shop=>{
                    return (

                        <div className='shop' key={shop.shopId}>
                            <div className='shop-title'>
                                <div className='radio'></div>
                                <span className='iconfont'>&#xe7ce;</span>{shop.shopName}
                            </div>
                            <div className='shop-products'>
                                {/*fetch cartList from shopList*/}
                                {
                                    shop.cartList.map(product=>{
                                        return (
                                            <div className='shop-product'>
                                                <div className='radio'></div>
                                                <img src='http://statics.dell-lee.com/shopping/category-list-1.png'
                                                     alt=''
                                                     className='shop-product-img'/>
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
                                        )
                                    })
                                }



                            </div>
                        </div>


                    )
                })
            }


            {/* show total price*/}
            <div className='total-price'>
                <div className='select-all'>
                    <div className='radio'></div>
                    <div className='select-all-text'>全选</div>
                </div>
                <div className='total'>
                    <span className='total-text'>合计:</span>
                    <div className='total-price-inner'>
                        <span className='total-price-inner-symbol'>&#36; </span>
                        99
                    </div>
                </div>
                <div className='check'>结算(2)</div>

            </div>
            <Docker activeName='cart'/>
        </div>
    )
}

export default Cart;