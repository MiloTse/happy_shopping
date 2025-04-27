import './style.scss';
import React, {useEffect, useState} from "react";

import useRequest from "../../utils/useRequest";
import {CategoryAndTagResponseType,    ProductType, ProductResponseType} from "./types";
import {message} from "../../utils/message";
import {d} from "@pmmmwh/react-refresh-webpack-plugin/types/options";


const Category = () => {
    const [products, setProducts] = useState<Array<ProductType>>([]);

    const [categories, setCategories] = useState<Array<{ id: string; name: string }>>([]);
    const [tags, setTags] = useState<string[]>([]);
    const [keyword, setKeyword] = useState('');

    const [currentTag, setCurrentTag] = useState('');
    const  [ currentCategory,  setCurrentCategory ]=useState('');
    //not send request until call request manually
    const {request: tagRequest  } = useRequest<CategoryAndTagResponseType>({manual: true});
    //passing request data productRequestData to useRequest
    const {request: productRequest  } = useRequest<ProductResponseType>({manual: true});

     useEffect(() => {
         productRequest({
                url:'/categoryProduct.json',
                method:'POST',
                data: {
                    tag:currentTag,
                    keyword ,
                    category: currentCategory,
                },
            }
        ).then((data)=>{
            if(data?.success) {
                const result = data.data;
                setProducts(result);
            }
        }).catch((e:any)=>{
            message(e?.message);
        });
    },[keyword, currentTag, currentCategory,productRequest]);



    useEffect(() => {
        tagRequest({
                url:'/categoryAndTagList.json',
                method:'GET',

            }
        ).then((data)=>{
             if(data?.success) {
                 const result = data.data;
                console.log(result);
                setCategories(result.category);
                setTags(result.tag);//should same as ts file and json
            }
        }).catch((e:any)=>{
            message(e?.message);
        });
    },[tagRequest]);


    function handleKeyDown(key: string, target: any) {
        if(key === 'Enter') {
            console.log(target.value);
            setKeyword(target.value);
        }
    }
    console.log(products)
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


                        onKeyDown={(e) => {handleKeyDown(e.key, e.target)} }
                    />
                </div>

            </div>
            <div className="category">
                <div className={currentCategory===''? 'category-item category-item-active':'category-item'}
                onClick={()=>{setCurrentCategory('')}}
                >全部商品</div>
                {
                    categories.map((category)=>{
                        return(
                            <div key={category.id}
                                 className={category.id === currentCategory ? "category-item category-item-active":"category-item "}
                                 onClick={()=>{setCurrentCategory(category.id)}}
                            >
                                {category.name}
                            </div>)
                    })
                }
            </div>
            <div className="tag">
                <div className= { currentTag ==='' ? 'tag-item tag-item-active':'tag-item'}
                     onClick={()=>{setCurrentTag('')}}
                >
                    全部
                </div>
                {
                    tags.map((tag,index)=>(
                            <div className= {tag===currentTag? 'tag-item tag-item-active':'tag-item'}
                                 key={tag+index}
                                 onClick={()=>{setCurrentTag(tag)}}
                            >
                                {tag}
                            </div>
                    ))
                }


            </div>
            <div className="product">
                <div className="product-title">精选商品({products.length})</div>
                {
                    products.map((product)=> {

                            return(
                                <div className="product-item" key={product.id}>
                                    <img className="product-item-img"
                                         src={product.imgUrl}
                                         alt={product.title}
                                    />
                                    <div className="product-item-content">
                                        <div className="product-item-title">{product.title}</div>
                                        <div className="product-item-sales">sold {product.sales}</div>
                                        <div className="product-item-price">
                                            <span className="product-item-price-symbol">&#36;  </span>
                                            {product.price}
                                        </div>
                                        <div className="product-item-button">
                                            buy
                                        </div>
                                    </div>
                                </div>
                            )

                    }

                    )
                }


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