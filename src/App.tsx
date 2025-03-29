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
    </div>
  );
}

export default App;
