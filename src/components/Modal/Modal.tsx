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
            showMessage: (message: string)=>{
                setShowModal(true);
                setMessage(message);
                //add a timer to close the modal after 1.5s
                setTimeout(()=>{
                    setShowModal(false);
                },1500);
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