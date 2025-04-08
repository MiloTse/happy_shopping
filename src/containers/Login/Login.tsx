
import React, {useEffect, useRef, useState} from "react";
import useRequest from "../../utils/useRequest";
import Modal,{ ModalInterfaceType } from "../../components/Modal/Modal";
import {Link} from "react-router-dom";

//1. 首先定义接口返回内容
type ResponseType = {
    status:string,
    data:string
}

const Login = ()=> {
    const modalRef = useRef<ModalInterfaceType>(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState('');

    //use custom hook to send request
    //step1. 通过泛型传递给useRequest 方法
    //step5.接受data 类型也一定为 ResponseType | null
    // const { data, error, request, } = useRequest<ResponseData>('/charlestesta.json', 'GET', {});
    const {request, } = useRequest<ResponseType>();

    function handleSubmitBtnClick() {
        if(!phoneNumber ) {
            // alert('please input phone number!');
            modalRef.current?.showMessage('phone number should not be empty.');
            return;
        }

        if(!password ) {
             modalRef.current?.showMessage('password should not be empty.');
            return;
        }




        request().then((data)=>{
            data && console.log(data);
         }).catch((e:any)=>{
             // alert(e?.message);
            // setShowModal(true);
            // setMessage(e?.message || 'unknown error.');
            modalRef.current?.showMessage(e?.message || 'unknown error.');
        });
    }

    return (
        <>
            <div className="form">
                <div className="form-item">
                    <div className='form-item-title'>phone number</div>
                    <input value={phoneNumber}
                           className='form-item-content'
                           placeholder='please input phone number'
                           onChange={(e)=>{
                               setPhoneNumber(e.target.value);
                           }}
                    />
                </div>
                <div className="form-item">
                    <div className='form-item-title'>password</div>
                    <input value={password}
                           type="password"
                           className="form-item-content"
                           placeholder="please input password"
                           onChange={(e)=>{
                               setPassword(e.target.value);
                           }}
                    />
                </div>
            </div>

            <div className="submit" onClick={handleSubmitBtnClick}>
                login
            </div>
            <p className="notice">
                <input type="checkbox"/>
                I accept the
                <a href="#">Terms and Conditions</a>
                &
                <a href="#">Privacy Policy</a>
            </p>
            <Modal ref={modalRef}/>


        </>

)

}

export default Login