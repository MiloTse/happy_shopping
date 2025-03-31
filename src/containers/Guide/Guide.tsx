import React, {useCallback, useEffect, useRef} from 'react';
import './style.css';
import {useNavigate} from "react-router-dom";

const Guide =() => {
    const ref = useRef<HTMLDivElement>(null!);
    const navigate = useNavigate();
    useEffect(()=>{
        ref.current.style.opacity = '1';
    })

    //use useCallback hook as it will not be changed frequently
    //useCallback hook will only be called once when the component is mounted
/*
    const handleIconClick = useCallback(()=>{
        navigate('/login');
    },[navigate]);
*/

    //simple way to handle click event without useCallback hook without buffering
    function handleIconClick() {
        navigate('/login');
    }


    return (
        <div ref={ref} className="page guide-page">
            <img alt="JoyCart"
                 className="main-pic"
                 src={require('../../images/halg_logo_icon_@2x.png')}
            />
            <p className="title">Happy Shopping</p>
            <img alt="Shop with Joy, Eat with Trust"
                 className="sub-pic"
                 src={require('../../images/slogan_word_icon_@2x.png')}
            />
            <div className="iconfont arrow-icon"
            onClick={handleIconClick}
            >&#xe60c;</div>
        </div>
    )
}

export default Guide;
