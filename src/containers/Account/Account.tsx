import './style.scss'
import React, {useEffect, useRef, useState} from "react";
import useRequest from "../../utils/useRequest";
import Modal,{ ModalInterfaceType } from "../../components/Modal/Modal";
import {Link, Outlet} from "react-router-dom";


const Account = ()=> {
    return (
        <div className="page account-page">
            <div className="tab">
                <div className="tab-item tab-item-left">
                    <Link to="/account/login">login</Link>
                </div>
                <div className="tab-item tab-item-right">
                    <Link to="/account/register">register</Link>
                </div>
            </div>
            <Outlet />
        </div>


)

}

export default Account