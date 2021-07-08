import React from 'react';
import './Modal/index.scss';
import cross from '../icons/cross.svg'

export const Modal = ({
    title,
    onClose,
    children,
    controls,
    size,
}) => {
    return (
        <div className={`Modal${size ? ` Modal--${size}` : ''}`}>
            <div className='Modal__header'>
                <div className='Modal__title'>{title}</div>
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
            <div className='Modal__controls'>
                {controls}
            </div>
        </div>
    );
}