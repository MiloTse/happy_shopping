import './style.scss'
import React, {useEffect, useRef, useState} from "react";
import useRequest from "../../utils/useRequest";
import Modal,{ ModalInterfaceType } from "../../components/Modal/Modal";
import {Link, Outlet, useLocation} from "react-router-dom";


const Account = ()=> {

    const location = useLocation();
    console.log(location);
    const isLoginActivated = location.pathname === '/account/login';
    const loginActiveClass = isLoginActivated ? 'tab-item-active' : '';
    const registerActiveClass = !isLoginActivated ? 'tab-item-active' : '';


    return (
        <div className="page account-page">
            <div className="tab">
                <div className={`tab-item tab-item-left ${loginActiveClass}`}>
                    <Link to="/account/login">login</Link>
                </div>
                <div className={`tab-item tab-item-right ${registerActiveClass}`}>
                    <Link to="/account/register">register</Link>
                </div>
            </div>
            <Outlet />
        </div>


)

}

export default Account