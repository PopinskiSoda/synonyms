import React from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_SYNONYM } from '../constants/actionTypes';

export const AddForm = () => {
    const [currentValue, setCurrentValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = useCallback((event) => {
        setCurrentValue(event.target.value)
    }, [])

    const handleAdd = useCallback(() => {
        dispatch({
            type: ADD_SYNONYM,
            payload: {
                id: Date.now(),
                text: currentValue,
                isEditing: false,
            },
        })
    }, [currentValue])

    return (
        <>
            <Input onChange={handleChange}/>
            <Button
                text='добавить'
                type='main'
                onClick={handleAdd}
            />
        </>
    )
}