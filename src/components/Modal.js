import React from 'react';
import './Modal/index.scss';

export const Modal = ({header, onClose, children}) => {
    return (
        <div className='Modal'>
            <div className='Modal__header'>
                <div>{header}</div>
                <button
                    onClick={onClose}
                >
                    x
                </button>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}