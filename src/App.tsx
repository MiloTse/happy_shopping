import 'normalize.css';
import './styles/border.css';
import './styles/base.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import Guide from './containers/Guide/Guide';
import Login from './containers/Login/Login';


const App =() => {

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Guide />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </HashRouter>
     )
}

export default App;
