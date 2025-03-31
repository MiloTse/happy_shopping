import React, {useEffect, useRef} from 'react';
import './style.css';

const Guide =() => {
    const ref = useRef<HTMLDivElement>(null!);
    useEffect(()=>{
        ref.current.style.opacity = '1';
    })
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
            <div className="iconfont arrow-icon">&#xe60c;</div>
        </div>
    );
}

export default Guide;
