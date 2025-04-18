import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';


const SearchList = () => {

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
                    />
                </div>
                <div className="search-clear iconfont">&#xe610;</div>
            </div>
            {/*item list area*/}
            <div className="tab">
                <div className="tab-item tab-item-active">Default</div>
                <div className="tab-item ">Sale</div>
                <div className="tab-item ">Price</div>
            </div>
            {/*bottom line*/}
            <div className="bottom">
                -- I am the bottom line --
            </div>
        </div>
    )
}

export default SearchList;