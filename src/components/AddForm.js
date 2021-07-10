import React from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_SYNONYM } from '../constants/actionTypes';
import './AddForm/index.scss';

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
        <div className='AddForm'>
            <div
                className='AddForm__title'
            >
                добавление синонима:
            </div>
            <Input
                onChange={handleChange}
                placeholder='Введите название'
            />
            <Button
                className='AddForm__button'
                text='добавить'
                type='main'
                onClick={handleAdd}
            />
        </div>
    )
}