import React from "react";
import './style.scss';
import {Link} from "react-router-dom";


const SearchList = () => {

    return (
        <div className="page search-list-page">
            <div className='search'>
                <Link to='/home' className='search-back-link'>
                    <div className='search-back-iconiconfont'>&#xe601;</div>
                </Link>
                <div className='search-area'>
                    <div className='search-iconiconfont'>&#xe64e; </div>
                    <input
                        className='search-input'
                        placeholder='Please enter product name！'
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchList;