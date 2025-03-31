import React, {useEffect, useRef} from 'react';
import './styles/app.css';

const App =() => {
    const ref = useRef<HTMLDivElement>(null!);
    useEffect(()=>{
      ref.current.style.opacity = '1';
    })
  return (
      <div ref={ref} className="page guide-page">
          <img alt="logo"
               className="main-pic"
               src={require('./images/halg_logo_icon_@2x.png')}
          />
          <p className="title">Happy Shopping</p>
          <img alt="logo"
               className="sub-pic"
               src={require('./images/slogan_word_icon_@2x.png')}
          />
          <div className="iconfont arrow-icon">&#xe60c;</div>
      </div>
  );
}

export default App;
