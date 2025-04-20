import React, {useState} from 'react';
import './style.scss';
import {Link, useParams} from 'react-router-dom';
import useRequest from "../../utils/useRequest";
import type {ResponseType} from "./types";

const SearchList = () => {
    const params = useParams<{ shopId : string; keyword: string}>();
    const [keyword, setKeyword] = useState(params.keyword);
    console.log(params.keyword,params.shopId);

    const [requestData, setRequestData] = useState({
        url: '/api/searchList.json',
        method: 'GET',
        params: {
            keyword: params.keyword,
            shopId: params.shopId,
            // page: 0,
            // pageSize: 8,
            type: 'default'
        },

    });
    const {data} = useRequest<ResponseType>(requestData);


    function handleClearKeyword() {
        setKeyword('');
    }

    return (
        <div className="page search-list-page">
            {/*search input area*/}
            <div className="search">
                <Link to="/home" className="search-back-link">
                    <div className="search-back-icon iconfont">&#xe6a9;</div>
                </Link>
                <div className="search-area">
                    <div className="search-icon iconfont">&#xe600;</div>
                    <input
                        className="search-input"
                        placeholder="Please enter product name"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </div>
                <div className="search-clear iconfont" onClick={handleClearKeyword}>&#xe610;</div>
            </div>
            {/*item list area*/}
            <div className="tab">
                <div className="tab-item tab-item-active">Default</div>
                <div className="tab-item ">Sale</div>
                <div className="tab-item ">Price</div>
            </div>
            {/*product list area*/}
            <div className="list">

                <div className="item">
                    <img className="item-img" alt='' src='http://statics.dell-lee.com/shopping/fresh-4.png'/>
                    <div className="item-content">
                        <p className="item-title">
                            Fresh frozen squid head frozen squid tentacles 400g...
                        </p>
                        <div className="item-price">
                            <span className="item-price-symbol">
                                &#36;
                            </span>
                            49.9
                        </div>
                        <div className="item-sales">sold 982</div>
                    </div>

                </div>
                <div className="item">
                    <img className="item-img" alt='' src='http://statics.dell-lee.com/shopping/fresh-4.png'/>
                    <div className="item-content">
                        <p className="item-title">
                            Fresh frozen squid head frozen squid tentacles 400g...
                        </p>
                        <div className="item-price">
                            <span className="item-price-symbol">
                                &#36;
                            </span>
                            49.9
                        </div>
                        <div className="item-sales">sold 982</div>
                    </div>

                </div>
                <div className="item">
                    <img className="item-img" alt='' src='http://statics.dell-lee.com/shopping/fresh-4.png'/>
                    <div className="item-content">
                        <p className="item-title">
                            Fresh frozen squid head frozen squid tentacles 400g...
                        </p>
                        <div className="item-price">
                            <span className="item-price-symbol">
                                &#36;
                            </span>
                            49.9
                        </div>
                        <div className="item-sales">sold 982</div>
                    </div>

                </div>
                <div className="item">
                    <img className="item-img" alt='' src='http://statics.dell-lee.com/shopping/fresh-4.png'/>
                    <div className="item-content">
                        <p className="item-title">
                            Fresh frozen squid head frozen squid tentacles 400g...
                        </p>
                        <div className="item-price">
                            <span className="item-price-symbol">
                                &#36;
                            </span>
                            49.9
                        </div>
                        <div className="item-sales">sold 982</div>
                    </div>

                </div>



            </div>
            {/*bottom line*/}
            <div className="bottom">
                -- I am the bottom line --
            </div>
        </div>
    )
}

export default SearchList;