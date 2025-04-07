import './style.scss';

function Modal({children}: {children: string}) {
    return (
        <div className="modal">
            <div className="modal-text">
                 <p>{children}</p>
            </div>
        </div>
    );
}

export default Modal;