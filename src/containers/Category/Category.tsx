import './style.scss';
import React, {useEffect, useState} from "react";

import useRequest from "../../utils/useRequest";
import { CategoryAndTagResponseType} from "./types";
import {message} from "../../utils/message";


const Category = () => {
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState();

    //not send request until call request manually
    const {request, } = useRequest<CategoryAndTagResponseType>({manual: true});

    useEffect(() => {

        request({
                url:'/categoryAndTagList.json',
                method:'GET',

            }

        ).then((data)=>{
             if(data?.success) {
                 const result = data.data;
                console.log(result);
                setCategories(result.category);
            }
        }).catch((e:any)=>{
            message(e?.message);
        });










    },[])




    return (
        <div className="page category-page">
            <div className="title">
                <div className="iconfont">&#xe6a9;</div>
                <div className="text">Category</div>
            </div>
            <div className="search">
                <div className="search-area">
                    <div className="search-icon iconfont">&#xe600;</div>
                    <input
                        className="search-input"
                        placeholder="Please enter product name"

                    />
                </div>

            </div>
            <div className="category">
                <div className="category-item category-item-active">Products</div>
                <div className="category-item">Products</div>
                <div className="category-item">Products</div>
                <div className="category-item">Products</div>
                <div className="category-item">Products</div>
                <div className="category-item">Products</div>
                <div className="category-item">Products</div>
                <div className="category-item">Products</div>
            </div>
            <div className="tag">
                <div className="tag-item">Products</div>
                <div className="tag-item  tag-item-active">Products</div>
                <div className="tag-item">Products</div>
                <div className="tag-item">Products</div>
                <div className="tag-item">Products</div>
                <div className="tag-item">Products</div>
                <div className="tag-item">Products</div>
                <div className="tag-item">Products</div>
            </div>
            <div className="product">
                <div className="product-title">精选商品(50)</div>
                <div className="product-item">
                    <img className="product-item-img"
                        src="http://statics.dell-lee.com/shopping/fresh-1.png"
                        alt=""
                    />
                    <div className="product-item-content">
                        <div className="product-item-title">chicken wing middle 1000g/...</div>
                        <div className="product-item-sales">sold 156</div>
                        <div className="product-item-price">
                            <span className="product-item-price-symbol">&#36;  </span>156
                        </div>
                        <div className="product-item-button">
                            buy
                        </div>
                    </div>
                </div>
                <div className="product-item">
                    <img className="product-item-img"
                        src="http://statics.dell-lee.com/shopping/fresh-1.png"
                        alt=""
                    />
                    <div className="product-item-content">
                        <div className="product-item-title">chicken wing middle 1000g/...</div>
                        <div className="product-item-sales">sold 156</div>
                        <div className="product-item-price">
                            <span className="product-item-price-symbol">&#36;  </span>156
                        </div>
                        <div className="product-item-button">
                            buy
                        </div>
                    </div>
                </div>
                <div className="product-item">
                    <img className="product-item-img"
                        src="http://statics.dell-lee.com/shopping/fresh-1.png"
                        alt=""
                    />
                    <div className="product-item-content">
                        <div className="product-item-title">chicken wing middle 1000g/...</div>
                        <div className="product-item-sales">sold 156</div>
                        <div className="product-item-price">
                            <span className="product-item-price-symbol">&#36;  </span>156
                        </div>
                        <div className="product-item-button">
                            buy
                        </div>
                    </div>
                </div>
                <div className="product-item">
                    <img className="product-item-img"
                        src="http://statics.dell-lee.com/shopping/fresh-1.png"
                        alt=""
                    />
                    <div className="product-item-content">
                        <div className="product-item-title">chicken wing middle 1000g/...</div>
                        <div className="product-item-sales">sold 156</div>
                        <div className="product-item-price">
                            <span className="product-item-price-symbol">&#36;  </span>156
                        </div>
                        <div className="product-item-button">
                            buy
                        </div>
                    </div>
                </div>
                <div className="product-item">
                    <img className="product-item-img"
                        src="http://statics.dell-lee.com/shopping/fresh-1.png"
                        alt=""
                    />
                    <div className="product-item-content">
                        <div className="product-item-title">chicken wing middle 1000g/...</div>
                        <div className="product-item-sales">sold 156</div>
                        <div className="product-item-price">
                            <span className="product-item-price-symbol">&#36;  </span>156
                        </div>
                        <div className="product-item-button">
                            buy
                        </div>
                    </div>
                </div>
                <div className="product-item">
                    <img className="product-item-img"
                        src="http://statics.dell-lee.com/shopping/fresh-1.png"
                        alt=""
                    />
                    <div className="product-item-content">
                        <div className="product-item-title">chicken wing middle 1000g/...</div>
                        <div className="product-item-sales">sold 156</div>
                        <div className="product-item-price">
                            <span className="product-item-price-symbol">&#36;  </span>156
                        </div>
                        <div className="product-item-button">
                            buy
                        </div>
                    </div>
                </div>
                <div className="product-item">
                    <img className="product-item-img"
                        src="http://statics.dell-lee.com/shopping/fresh-1.png"
                        alt=""
                    />
                    <div className="product-item-content">
                        <div className="product-item-title">chicken wing middle 1000g/...</div>
                        <div className="product-item-sales">sold 156</div>
                        <div className="product-item-price">
                            <span className="product-item-price-symbol">&#36;  </span>156
                        </div>
                        <div className="product-item-button">
                            buy
                        </div>
                    </div>
                </div>
            </div>
            <div className="docker">
            <div className="docker-item ">
                    <p className="iconfont">&#xe608;</p>
                    <p className="docker-item-title">Home</p>
                </div>
                <div className="docker-item docker-item-active">
                    <p className="iconfont">&#xe609;</p>
                    <p className="docker-item-title">Category</p>
                </div>
                <div className="docker-item">
                    <p className="iconfont">&#xe601;</p>
                    <p className="docker-item-title">Cart</p>
                </div>
                <div className="docker-item">
                    <p className="iconfont">&#xe602;</p>
                    <p className="docker-item-title">Mine</p>
                </div>
            </div>
        </div>
    )
}

export default Category;