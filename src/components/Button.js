import React from 'react';
import './Button/index.scss'

export const Button = ({text, type, onClick}) => {
    return (
        <button
            className={`Button${type ? ` Button--${type}` : ''}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}