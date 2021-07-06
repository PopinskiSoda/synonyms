import React from 'react';
import { Input } from './Input';
import { useDispatch } from 'react-redux';
import { EDIT_SYNONYM } from '../constants/actionTypes';

export const Card = ({id, text}) => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch({
            type: EDIT_SYNONYM,
            id: id,
            text: event.target.value,
        })
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