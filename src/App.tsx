import 'normalize.css';
import './styles/border.css';
import './styles/base.css';
import {createHashRouter, RouterProvider} from 'react-router-dom';
import React from "react";
import Guide from './containers/Guide/Guide';
import Login from './containers/Account/Login';
import Register from './containers/Account/Register';
import Account from "./containers/Account/Account";
import Home from "./containers/Home/Home";

const router = createHashRouter([{
        path: "/",
        element: <Guide />
    },
    {
      path: "/account",
        element: <Account />,
        children: [{
                path: "/account/login",
                element: <Login />
            }, {
                path: "/account/register",
                element: <Register />
            }
        ]
    },
    {
        path: "/home",
        element: <Home />
    }
]);

const App =() => {
    return <RouterProvider router={router}/>;
}

export default App;

