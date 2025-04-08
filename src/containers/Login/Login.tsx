import './style.scss'
import React, {useEffect, useRef, useState} from "react";
import useRequest from "../../utils/useRequest";
import Modal,{ ModalInterfaceType } from "../../components/Modal/Modal";

//1. 首先定义接口返回内容
type ResponseData = {
    name: string;
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
    const {request, } = useRequest<ResponseData>('/charlestest.json', 'GET', {});

    function handleSubmitBtnClick() {
        if(!phoneNumber ) {
            // alert('please input phone number!');
            modalRef.current?.showMessage('phone number should not be empty.');
            return;
        }




        request().then((data)=>{
            data && console.log(data.name);
         }).catch((e:any)=>{
             // alert(e?.message);
            // setShowModal(true);
            // setMessage(e?.message || 'unknown error.');
            modalRef.current?.showMessage(e?.message || 'unknown error.');
        });
    }

    return (
        <div className="page login-page">
            <div className="tab">
                <div className="tab-item tab-item-left">login</div>
                <div className="tab-item tab-item-right">register</div>
            </div>
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

        </div>


)

}

export default Login