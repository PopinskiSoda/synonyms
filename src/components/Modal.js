import React from 'react';
import './Modal/index.scss';
import cross from '../icons/cross.svg'

export const Modal = ({header, onClose, children}) => {
    return (
        <div className='Modal'>
            <div className='Modal__header'>
                <div>{header}</div>
                <button
                    className='Modal__close-button'
                    onClick={onClose}
                >
                    <img src={cross}/>
                </button>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}