import React from 'react';
import { Input } from './Input';
import { useDispatch } from 'react-redux';

export const Card = ({id, text}) => {
    const handleChange = () => {
        dispatch({type: ''})
    }

    return (
        <div>
            <Input
                value={text}
                onChange={handleChange}
            />
            <button>edit</button>
            <button>delete</button>
        </div>
    )
}