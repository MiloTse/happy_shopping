import React from 'react';
import './styles/app.css';

const App =() => {
  return (
      <div className="page guide-page">
          <img alt="logo"
               className="main-pic"
               src={require('./images/halg_logo_icon_@2x.png')}
          />
          <p className="title">Happy Shopping</p>
          <img alt="logo"
               className="sub-pic"
               src={require('./images/slogan_word_icon_@2x.png')}
          />
      </div>
  );
}

export default App;
