import './style.scss';
import {useEffect, useState} from "react";


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

function Modal( ) {

    // const [showModal, setShowModal] = useState(false);
    // const [message, setMessage] = useState('');



    return (
        <div className="modal">
            <div className="modal-text">
                 Hello world
            </div>
        </div>
    );
}

export default Modal;