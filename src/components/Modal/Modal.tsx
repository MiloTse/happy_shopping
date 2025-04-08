import './style.scss';
import {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import {createPortal} from "react-dom";


//模态框对应的TS类型
export type ModalInterfaceType = {
    showMessage: (msg: string) => void;
}

const Modal = forwardRef<ModalInterfaceType>((props, ref)=>{
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState('');

    //store an unchangeable ref to store the div element
    const divRef = useRef(document.createElement('div'));
    const divElement = divRef.current;
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



    useEffect(()=>{
        if(showModal){
            //append the div element to the body
            document.body.appendChild(divElement);
        }else {
            if(divElement.parentElement){
                document.body.removeChild(divElement);
            }
        }
        return ()=>{
            if(divElement.parentElement){
                document.body.removeChild(divElement);
            }
        }

    },[showModal,divElement]);//divElement as the external ref, should be added to reference

    //store the first parameter <div> to the divElement
    return createPortal (
        <div className="modal">
            <div className="modal-text">
                {message}
            </div>
        </div>,
        divElement
    );


});



export default Modal;