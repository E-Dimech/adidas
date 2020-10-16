import React from 'react';
import './modal.scss';
import Close from '../../assets/icons/close.svg';
import Leaf from '../../assets/icons/leaf.png';

function Modal(props) {
    if (!props.modalDisplay) {
        return null
    } 
    return (
        <div className="modal">
            <img src={Close} alt="Close" className="modal__close" onClick={() => props.closeModal()}/>
            <div className="modal__container">
                <div className="modal__container-title">
                    <h1 className="modal__container-heading">FROM THREAT INTO THREAD </h1> 
                    <img src={Leaf} alt="Leaf" className="modal__container-leaf"/>
                </div>
                <p className="modal__container-text">Parley Ocean Plastic® is created from upcycled marine plastic waste that is intercepted from remote islands, beaches and coastal communities. We use it as a replacement for virgin plastic in the making of all adidas x Parley high-performance sportswear. After collecting plastic waste from coastlines, it's baled and sent to Parley supply chain partners. There it's shredded and reworked to become high-performance polyester yarn: Parley Ocean Plastic™, which is then used to create adidas x Parley sportswear, that's as good for the planet as it is for your workout.</p>
            </div>
        </div>
    )
}

export default Modal;
