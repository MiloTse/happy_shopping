import 'normalize.css';
import './styles/border.css';
import './styles/base.css';
import {HashRouter, Routes, Route, BrowserRouter, createHashRouter, RouterProvider} from 'react-router-dom';
import React from "react";
import Guide from './containers/Guide/Guide';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import Account from "./containers/Account/Account";

const router = createHashRouter([
    {
        path: "/", element: <Guide />
    },
    {
      path: "/account", element: <Account />,
    },
    {
        path: "/login", element: <Login />
    },
    {
        path: "/register", element: <Register />
    },

]);










const App =() => {

    return <RouterProvider router={router}/>;
}

export default App;
