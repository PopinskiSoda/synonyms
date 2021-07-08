import React from 'react';
import './Button/index.scss'

export const Button = ({text, type}) => {
    return (
        <button className={`Button${type ? ` Button--${type}` : ''}`}>
            {text}
        </button>
    )
}