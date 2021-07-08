import React from 'react';
import './Input/index.scss'

export const Input = ({value, onChange}) => {
    return (
        <input
            className='Input'
            value={value}
            onChange={onChange}
        />
    );
}