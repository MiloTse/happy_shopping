import 'normalize.css';
import './styles/border.css';
import './styles/base.css';
import Guide from './containers/Guide/Guide';
import { HashRouter, Routes, Route } from 'react-router-dom';
import React from "react";

const App =() => {

    return (
        <HashRouter>
            <Routes>
                <Route path="/#" element={<Guide />} />
            </Routes>
        </HashRouter>
     )
}

export default App;
