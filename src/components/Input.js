import React from 'react';
import './Input/index.scss'

export const Input = ({value, onChange, placeholder, className}) => {
    return (
        <input
            className={`Input${className ? ` ${className}` : ''}`}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}