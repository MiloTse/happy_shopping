import './style.scss';
import {forwardRef, useEffect, useImperativeHandle, useState} from "react";


//if showModal is true, close after 1.5s
/*
useEffect(() => {
    const timer = setTimeout(() => {
        alert('login success');
        setShowModal(false);
    }, 1500);
    //clean up the timer
    return () => clearTimeout(timer);
}, [showModal]);

*/

//模态框对应的TS类型
export type ModalInterfaceType = {
    showMessage: (msg: string) => void;
}

const Modal = forwardRef<ModalInterfaceType>((props, ref)=>{
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState('');

    useImperativeHandle(ref,()=>{
        return {
            showMessage: (msg: string)=>{
                setShowModal(true);
                setMessage(msg);
            }
        }
    },[showModal, message]);

    return showModal? (
        <div className="modal">
            <div className="modal-text">
                {message}
            </div>
        </div>
    ): null;


});



export default Modal;