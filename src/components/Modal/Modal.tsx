import './style.scss';

function Modal({children}: {children: string}) {
    return (
        <div className="modal">
            <div className="modal-text">
                <span className="close">&times;</span>
                <p>Opps! Error occurred...</p>
            </div>
        </div>
    );
}

export default Modal;