import React from 'react';
import './Button/index.scss'

export const Button = (text) => {
    return (
        <button className='Button'>
            {text}
        </button>
    )
}