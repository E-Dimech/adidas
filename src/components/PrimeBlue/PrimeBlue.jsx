import React from 'react';
import './primeblue.scss';
import Close from '../../assets/icons/close.svg';
import Primeblue from '../../assets/icons/primeblue2.png';
import Leaf from '../../assets/icons/leaf.png';

function PrimeBlueModal(props) {
    if (!props.primeBlueModalDisplay) {
        return null
    } 
    return (
        <div className="primeblue-modal">
            <img src={Close} alt="Close" className="primeblue-modal__close" onClick={() => props.closePrimeBlueModal()}/>
            <div className="primeblue-modal__container">
                <div className="primeblue-modal__container-title">
                    <img src={Primeblue} alt="Prime Blue" className="primeblue-modal__container-primeblue"/>
                </div>
                <p className="primeblue-modal__container-text">Primeblue is a high-performance recycled material made in part with Parley Ocean Plastic—upcycled plastic waste, intercepted on remote islands, beaches, coastal communities and shorelines, preventing it from polluting our ocean.</p>
            </div>
        </div>
    )
}

export default PrimeBlueModal;
