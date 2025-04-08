import 'normalize.css';
import './styles/border.css';
import './styles/base.css';
import {HashRouter, Routes, Route, BrowserRouter} from 'react-router-dom';
import React from "react";
import Guide from './containers/Guide/Guide';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';

const App =() => {

    return (
        <>

        {/* <BrowserRouter> */}
        <HashRouter>
            <Routes>
                <Route path="/" element={<Guide />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </HashRouter>
        {/*</BrowserRouter>*/}

        </>
     )
}

export default App;
