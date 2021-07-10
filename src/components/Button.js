import React from 'react';
import './Button/index.scss'

export const Button = ({text, type, onClick, className}) => {
    return (
        <button
            className={`Button${type ? ` Button--${type}` : ''}${className ? ` ${className}` : ''}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}